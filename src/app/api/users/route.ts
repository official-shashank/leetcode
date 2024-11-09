import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    
});

export async function GET(request: Request) {

    try {
        const users = await prisma.user.findMany();
        return Response.json(users);
      } catch (error) {
        return Response.json({ error: "Failed to fetch users" });
      }
}


export async function POST(){

}