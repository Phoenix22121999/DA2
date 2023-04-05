/*
  Warnings:

  - You are about to drop the column `descrition` on the `User_Account` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Account] DROP COLUMN [descrition];
ALTER TABLE [dbo].[User_Account] ADD [description] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
