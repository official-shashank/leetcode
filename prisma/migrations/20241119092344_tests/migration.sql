-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "problemId" TEXT;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("problemId") ON DELETE SET NULL ON UPDATE CASCADE;
