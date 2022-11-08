/*
  Warnings:

  - You are about to drop the `User_Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Recruiter` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Account] ADD [address] NVARCHAR(1000),
[age] INT,
[avartar] NVARCHAR(1000),
[city_id] INT,
[district_id] INT,
[email] NVARCHAR(1000),
[first_name] NVARCHAR(1000),
[full_name] NVARCHAR(1000),
[gender] INT,
[last_name] NVARCHAR(1000),
[logo] NVARCHAR(1000),
[number_phone] NVARCHAR(1000),
[ward_id] INT;

-- DropTable
DROP TABLE [dbo].[User_Candidate];

-- DropTable
DROP TABLE [dbo].[User_Manager];

-- DropTable
DROP TABLE [dbo].[User_Recruiter];

-- CreateTable
CREATE TABLE [dbo].[Job_Type] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [job_type_name] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [Job_Type_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [Job_Type_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Job_Type_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    CONSTRAINT [Job_Type_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Majors] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [majors_name] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [Majors_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [Majors_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Majors_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    CONSTRAINT [Majors_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Job] (
    [job_id] BIGINT NOT NULL IDENTITY(1,1),
    [job_name] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [Job_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [Job_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Job_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    CONSTRAINT [Job_pkey] PRIMARY KEY CLUSTERED ([job_id])
);

-- CreateTable
CREATE TABLE [dbo].[Apply_Profile] (
    [profile_id] BIGINT NOT NULL IDENTITY(1,1),
    [profile_name] NVARCHAR(1000) NOT NULL,
    [profile_link] NVARCHAR(1000),
    [is_active] BIT NOT NULL CONSTRAINT [Apply_Profile_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [Apply_Profile_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Apply_Profile_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [user_id] BIGINT NOT NULL,
    CONSTRAINT [Apply_Profile_pkey] PRIMARY KEY CLUSTERED ([profile_id])
);

-- CreateTable
CREATE TABLE [dbo].[Recruitment_Post] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [content] NVARCHAR(1000) NOT NULL,
    [recuiter_id] BIGINT NOT NULL,
    [to_value] BIGINT NOT NULL CONSTRAINT [Recruitment_Post_to_value_df] DEFAULT 0,
    [from_vale] BIGINT NOT NULL CONSTRAINT [Recruitment_Post_from_vale_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Recruitment_Post_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000) NOT NULL,
    [is_delete] BIT NOT NULL CONSTRAINT [Recruitment_Post_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [Recruitment_Post_is_active_df] DEFAULT 1,
    CONSTRAINT [Recruitment_Post_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[History_Apply_Job] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_id] BIGINT NOT NULL,
    [post_id] BIGINT NOT NULL,
    [profile_id] BIGINT NOT NULL,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [History_Apply_Job_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000) NOT NULL,
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [History_Apply_Job_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [History_Apply_Job_is_active_df] DEFAULT 1,
    CONSTRAINT [History_Apply_Job_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Recruitment_Post_Job_Type] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [post_id] INT NOT NULL,
    [job_type_id] INT NOT NULL,
    [majors_id] INT NOT NULL,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Recruitment_Post_Job_Type_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000) NOT NULL,
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000) NOT NULL,
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [Recruitment_Post_Job_Type_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [Recruitment_Post_Job_Type_is_active_df] DEFAULT 1,
    CONSTRAINT [Recruitment_Post_Job_Type_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Apply_Profile] ADD CONSTRAINT [Apply_Profile_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post] ADD CONSTRAINT [Recruitment_Post_recuiter_id_fkey] FOREIGN KEY ([recuiter_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
