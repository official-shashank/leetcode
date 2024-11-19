import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import { isAdmin } from "../_utils/isAdmin";  // Assuming this function checks if the user is an admin

// Enum for difficulty, based on your Prisma schema
enum Difficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}
  
  // Problem interface
interface Problem {
    title: string;
    description: string;
    difficulty: Difficulty;  
    tags: string[];
    testIds:string[];
  }
  

// GET route: Fetch problems based on the query
export async function GET(req: Request) {
  const url = new URL(req.url);
  const problemId = url.searchParams.get("problemId");

  try {
    if (problemId) {
      const problem = await prisma.problem.findUnique({
        where: {
          problemId: problemId,
        },
        include: {
          submissions: true,  // Include related submissions
          tests: true,        // Include related tests
          solutions: true,    // Include related solutions
        },
      });

      if (!problem) {
        return NextResponse.json({ message: "Problem not found" }, { status: 404 });
      }

      return NextResponse.json({ problem }, { status: 200 });
    } else {
      const problems = await prisma.problem.findMany();
      return NextResponse.json({ problems }, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// POST route: Create a new problem (Only if the user is an admin)
export async function POST(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");  // Assuming userId is provided in the query

  // Check if the user is an admin
  if (!userId || !(await isAdmin(userId))) {
    return NextResponse.json(
      { message: "Only admins can create problems" },
      { status: 403 }
    );
  }

  try {
    // Parse the request body for the new problem
    const body = await req.json();
    const { title, description, difficulty, tags,testIds} = body as Problem;

    // Validate the problem data
    if (!title || !description || !difficulty || !tags) {
      return NextResponse.json(
        { message: "All fields (title, description, difficulty, tags) are required" },
        { status: 400 }
      );
    }

    if(!testIds || !Array.isArray(testIds) || testIds.length==0){

      return NextResponse.json({
        message:"At least one valid test case is required"
      },{
        status:400
      }) 
    }

    // verify all test cases exist in the database
    const validTests=await prisma.test.findMany({
      where:{
        testId:{in:testIds}
      }
    })

    if(validTests.length != testIds.length){
      return NextResponse.json({
        message:"One or More test cases are invalid !!!"
      },{
        status:400
      })
    }

    // Create the new problem in the database
    const newProblem = await prisma.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        tests:{
          connect:testIds.map((testId:string)=>({testId}))
        }
      },
      include:{
        tests:true
      }
    });

    return NextResponse.json(newProblem, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const problemId = url.searchParams.get("problemId");
    const userId = url.searchParams.get("userId");

    // Validate problemId and userId
    if (!problemId || !userId) {
      return NextResponse.json(
        { message: "Invalid Problem or User ID!" },
        { status: 400 }
      );
    }

    // Check if user is admin
    if (!(await isAdmin(userId))) {
      return NextResponse.json(
        { message: "The user is not permitted to perform this action." },
        { status: 401 }
      );
    }

    // Parse request body and validate
    let body;
    try {
      body = await req.json();
      console.log(body)
    } catch (err) {
      return NextResponse.json(
        { message: "Invalid JSON payload in the request body." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { message: "Request body must be a valid JSON object." },
        { status: 400 }
      );
    }

    const { title, description, difficulty, tags, testIds } = body;

    // Validate if at least one field is provided for update
    if (!title && !description && !difficulty && !tags && !testIds) {
      return NextResponse.json(
        { message: "No valid fields provided for update." },
        { status: 400 }
      );
    }

    // Update the problem
    const updatedProblem = await prisma.problem.update({
      where: { problemId },
      data: {
        title: title || undefined,
        description: description || undefined,
        difficulty: difficulty || undefined,
        tags: tags || undefined,
        tests: testIds
          ? {
              set: testIds.map((testId: string) => ({ testId })), // Update tests relation
            }
          : undefined,
      },
    });

    return NextResponse.json(updatedProblem, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "An error occurred while updating the problem." },
      { status: 500 }
    );
  }
}
