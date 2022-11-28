BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ALTER COLUMN [post_id] BIGINT NOT NULL;
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ALTER COLUMN [job_type_id] BIGINT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post_Majors] ALTER COLUMN [post_id] BIGINT NOT NULL;
ALTER TABLE [dbo].[Recruitment_Post_Majors] ALTER COLUMN [majors_id] BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ADD CONSTRAINT [Recruitment_Post_Job_Type_post_id_fkey] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Recruitment_Post]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ADD CONSTRAINT [Recruitment_Post_Job_Type_job_type_id_fkey] FOREIGN KEY ([job_type_id]) REFERENCES [dbo].[Job_Type]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_Majors] ADD CONSTRAINT [Recruitment_Post_Majors_post_id_fkey] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Recruitment_Post]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_Majors] ADD CONSTRAINT [Recruitment_Post_Majors_majors_id_fkey] FOREIGN KEY ([majors_id]) REFERENCES [dbo].[Majors]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
