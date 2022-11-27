/*
  Warnings:

  - You are about to drop the column `majors_id` on the `Recruitment_Post_Job_Type` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post] ADD [gender] INT;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ALTER COLUMN [create_date] DATETIME2 NULL;
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ALTER COLUMN [create_user] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] ALTER COLUMN [update_user] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Recruitment_Post_Job_Type] DROP COLUMN [majors_id];

-- CreateTable
CREATE TABLE [dbo].[Recruitment_Post_Majors] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [post_id] INT NOT NULL,
    [majors_id] INT NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [Recruitment_Post_Majors_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [Recruitment_Post_Majors_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [Recruitment_Post_Majors_is_active_df] DEFAULT 1,
    CONSTRAINT [Recruitment_Post_Majors_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
