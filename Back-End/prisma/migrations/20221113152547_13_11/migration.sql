/*
  Warnings:

  - Made the column `user_type_id` on table `User_Account` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[User_Account] DROP CONSTRAINT [User_Account_user_type_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [user_type_id] BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_user_type_id_fkey] FOREIGN KEY ([user_type_id]) REFERENCES [dbo].[User_Type]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
