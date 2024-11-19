import prisma from "../../../../prisma/prismaClient";
// Middleware function to check admin access
export async function isAdmin(userId: string ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { userId },
      select: { role: true },
    });
    return user?.role === 'ADMIN';
}