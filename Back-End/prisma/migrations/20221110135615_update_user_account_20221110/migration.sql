/*
  Warnings:

  - You are about to drop the column `user_id` on the `User_Account` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[User_Account] DROP CONSTRAINT [User_Account_user_type_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [user_type_id] BIGINT NULL;
ALTER TABLE [dbo].[User_Account] DROP COLUMN [user_id];

-- AddForeignKey
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_user_type_id_fkey] FOREIGN KEY ([user_type_id]) REFERENCES [dbo].[User_Type]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
