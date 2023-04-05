/*
  Warnings:

  - A unique constraint covering the columns `[post_id,user_id]` on the table `Recruitment_Post_User_Like` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Recruitment_Post_User_Like] ADD CONSTRAINT [Recruitment_Post_User_Like_post_id_user_id_key] UNIQUE NONCLUSTERED ([post_id], [user_id]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
