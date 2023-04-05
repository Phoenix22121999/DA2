/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User_Account` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `User_Account` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [email] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_email_key] UNIQUE NONCLUSTERED ([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
