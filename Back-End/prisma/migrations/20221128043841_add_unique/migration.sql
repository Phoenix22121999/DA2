/*
  Warnings:

  - A unique constraint covering the columns `[post_id,job_type_id]` on the table `Recruitment_Post_Job_Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[post_id,majors_id]` on the table `Recruitment_Post_Majors` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;
TRUNCATE TABLE [dbo].[Recruitment_Post_Job_Type]
TRUNCATE TABLE [dbo].[Recruitment_Post_Majors]
-- CreateIndex
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ADD CONSTRAINT [Recruitment_Post_Job_Type_post_id_job_type_id_key] UNIQUE NONCLUSTERED ([post_id], [job_type_id]);

-- CreateIndex
ALTER TABLE [dbo].[Recruitment_Post_Majors] ADD CONSTRAINT [Recruitment_Post_Majors_post_id_majors_id_key] UNIQUE NONCLUSTERED ([post_id], [majors_id]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
