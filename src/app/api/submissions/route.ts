// submissionId Int          @id @default(autoincrement()) // Primary key
// code         String                                     // Code submitted by the user
// language     String                                     // Programming language used
// status       Status                                     // Status of the submission
// user         User        @relation(fields: [userId], references: [userId])
// userId       Int
// problem      Problem     @relation(fields: [problemId], references: [problemId])
// problemId    Int
// createdAt    DateTime    @default(now())                // Timestamp for the submission

export async function POST(request:Request){

    
}