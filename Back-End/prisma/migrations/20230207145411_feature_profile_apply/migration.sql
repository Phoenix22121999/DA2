BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User_Education] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [name_school] NVARCHAR(1000) NOT NULL,
    [year_start] DATETIME2 NOT NULL,
    [year_end] DATETIME2 NOT NULL,
    [description] NVARCHAR(4000) NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [User_Education_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [User_Education_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [User_Education_is_active_df] DEFAULT 1,
    [user_id] BIGINT NOT NULL,
    [majors] NVARCHAR(1000),
    CONSTRAINT [User_Education_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User_Experience] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [name_company] NVARCHAR(1000) NOT NULL,
    [year_start] DATETIME2 NOT NULL,
    [year_end] DATETIME2,
    [description] NVARCHAR(4000) NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [User_Experience_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [User_Experience_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [User_Experience_is_active_df] DEFAULT 1,
    [user_id] BIGINT NOT NULL,
    CONSTRAINT [User_Experience_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User_Achievement] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [name_achievement] NVARCHAR(1000) NOT NULL,
    [year] DATETIME2 NOT NULL,
    [description] NVARCHAR(4000) NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [User_Achievement_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [User_Achievement_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [User_Achievement_is_active_df] DEFAULT 1,
    [user_id] BIGINT NOT NULL,
    CONSTRAINT [User_Achievement_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User_Project] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [name_project] NVARCHAR(1000) NOT NULL,
    [year] DATETIME2 NOT NULL,
    [description] NVARCHAR(4000) NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [User_Project_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [User_Project_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [User_Project_is_active_df] DEFAULT 1,
    [user_id] BIGINT NOT NULL,
    CONSTRAINT [User_Project_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User_Education] ADD CONSTRAINT [User_Education_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[User_Experience] ADD CONSTRAINT [User_Experience_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[User_Achievement] ADD CONSTRAINT [User_Achievement_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[User_Project] ADD CONSTRAINT [User_Project_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
