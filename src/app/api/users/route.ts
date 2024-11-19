import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismaClient";



// fetch the userData and also if id is present get only that user DATA
// usage

//  http://localhost:3000/api/users/   ---> for all users 
// http://localhost:3000/api/users/?userId= <id of the user>  for only given id user


export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');  

  try {
    if (userId) {
      const user = await prisma.user.findUnique({
        where: {
          userId: userId, 
        },
      });

      if (user) {
        return NextResponse.json(user);
      } else {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
    } else {
      // If no userId provided, fetch all users
      const users = await prisma.user.findMany();
      return NextResponse.json(users);
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

// creating a user to database 

// usage
// http://localhost:3000/api/users/  by passing the body create a user 
export async function POST(req: Request) {
  try {
   
    const body = await req.json();
  
     await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        role: body.role || "USER", 
      },
    });

   
    return NextResponse.json({message:"user created successfully"});
  } catch (err:any) {
    
    return NextResponse.json({ error: err.message });
  }
}


// PUT - Update a user 
// http://localhost:3000/api/users/?userId to update user
export async function PUT(req: Request) {
  const body = await req.json();
  const url = new URL(req.url);
  const userId = url.searchParams.get('userId');
  const { username, email, role } = body;

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
      const updatedUser = await prisma.user.update({
      where: { userId: userId},
      data: {
        username: username || undefined,
        email: email || undefined,
        role: role || undefined,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// DELETE - Delete a user 
// http://localhost:3000/api/users/?userId to delete user
export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get('userId');


  if (!userId ) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { userId: userId },
    });

    return NextResponse.json(deletedUser);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}