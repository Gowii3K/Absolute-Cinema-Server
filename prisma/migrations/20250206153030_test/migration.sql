-- CreateTable
CREATE TABLE "Screen" (
    "screenId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("screenId")
);

-- AddForeignKey
ALTER TABLE "Screen" ADD CONSTRAINT "Screen_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
