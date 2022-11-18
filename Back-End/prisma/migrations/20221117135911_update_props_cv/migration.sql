/*
  Warnings:

  - Added the required column `user_id` to the `cv` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[cv] ADD [user_id] BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[cv] ADD CONSTRAINT [cv_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
