
// -------------------------------------------------------------------------
// Test model to perform operations
// model Test {
//     testId         String  @id @default(uuid()) // Primary key
//     input          String // Test input
//     expectedOutput String // Expected output
//     isPublic       Boolean @default(false) // Whether the test is public or private
//     problem        Problem @relation(fields: [ProblemId], references: [problemId])
//     ProblemId      String
//   }



// --------------------------------------------------------------------

import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";
import { isAdmin } from "../_utils/isAdmin";


interface Test{
    input:string,
    expectedOutput:string,
    isPublic:boolean,
    problemId:string
}


// getting all the test cases if no testId as params is passed 
export async function GET(req:Request){
    const url=new URL(req.url);
    const testId=url.searchParams.get("testId");

    if(testId){
        try {
            const testDetails=await prisma.test.findUnique({
                where:{testId}
            });

            if(!testDetails){
               return NextResponse.json({
                message:"No test case present with this testId"
               },{
                status:404
               })
            }

            return NextResponse.json({
                message:"Test case found !!",
                testDetails,
            },{
                status:200
            })
            
        } catch (error) {
            return NextResponse.json({
                message:"Some error occured while fetching the test cases",
            },
            {
                status:500
            })
        }
    }
    else{
        const testCases=await prisma.test.findMany({});
        if(testCases.length != 0){
            return NextResponse.json({
                message:"Test cases fetched successfully",
                testCases
            },{
                status:200
            })
        }
        else{
            return NextResponse.json({
                success:false,
                message:"No test case present in the database",

            },{
                status:400
            })
        }
    }
}

// creating  a test case
export async function POST(req:Request){

    const body=await req.json();
    const url=new URL(req.url);
    const userId=url.searchParams.get("userId");
    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({
          message:"Not allowed to perform This action"
        },{
            status:504
        })
    }

    const {input,expectedOutput,isPublic,problemId} =body as Test
   
    if(!input || !expectedOutput ){
        return NextResponse.json({
            message:"input , expected output is required "
        },{
            status:400
        })
    }

   try {
    const createdTest=await prisma.test.create({
        data:{
            input,
            expectedOutput,
            isPublic,
            problemId:problemId || undefined
        }
    })

    return NextResponse.json({
        message:"Test created successfully"
    },{
        status:200
    })

   } catch (error) {
     return NextResponse.json({
        message:"Error occured while creating the test cases "
     },{
        status:500
     })
   }
    
}

// updating a testcase on the basis of user is allowed to perform this action or not means admin
export async function PUT(req:Request){
    const body =await req.json();
    const url=new URL(req.url);
    const testId=url.searchParams.get("testId");
    const userId=url.searchParams.get("userId");
    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({
          message:"Not allowed to perform This action"
        },{
            status:504
        })
    }

    const {input,expectedOutput,isPublic,problemId}=body as Test

    if(!input && !expectedOutput && !isPublic && !problemId){
        return NextResponse.json({
            message:"at least one field is required to perform update operation"
        },{
            status:400
        })
    }

    if(!testId){
        return NextResponse.json({
            message:"TestId is required to update the test case"
        },{
            status:400
        })
    }

    // check where test with this id is present inside the database
    const isPresent=await prisma.test.findUnique({where:{testId}})

    if(isPresent){
        try {
            const updatedTest=await prisma.test.update({
                where:{testId},
                data:{
                    input:input ||undefined,
                    expectedOutput:expectedOutput || undefined,
                    isPublic:isPublic || undefined,
                    problemId:problemId || undefined
                }
            })

            return NextResponse.json({
                success:true,
                message:"Test updated successfully",
                updatedTest 
            },{
                status:200
            })
        } catch (error) {
            return NextResponse.json({
                success:false,
                message:"Error while updating the test case"
            },{
                status:500
            })
        }
    }
}

// deleting the test case on the basis of admin route
export async function DELETE(req:Request){
    const url=new URL(req.url);
    const testId=url.searchParams.get("testId");
    const userId=url.searchParams.get("userId");

    if(!testId || !userId){
        return NextResponse.json({
            message:"Invalid credentials",
        },{
            status:400
        })
    }

    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({
            message:"Not Allowed to perform this action"
        },{
            status:500
        })
    }

    try {
        await prisma.test.delete({where:{testId}});

        return NextResponse.json({
            message:"The Test deleted Successfully",
        },{
            status:200
        })
    } catch (error) {

        return NextResponse.json({
            success:false,
            message:"Error Occured while deleting the test case"
        },{
            status:504
        })
    }
}

