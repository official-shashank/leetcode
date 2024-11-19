/*
  Warnings:

  - You are about to drop the column `ProblemId` on the `Test` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_ProblemId_fkey";

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "tests" TEXT[];

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "ProblemId";
