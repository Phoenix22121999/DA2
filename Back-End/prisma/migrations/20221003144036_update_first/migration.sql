/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_type` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Account] DROP CONSTRAINT [Account_user_type_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[User_Manager] ALTER COLUMN [avartar] NVARCHAR(1000) NULL;

-- DropTable
DROP TABLE [dbo].[Account];

-- DropTable
DROP TABLE [dbo].[User_type];

-- CreateTable
CREATE TABLE [dbo].[User_Type] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_type_name] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [User_Type_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [User_Type_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    CONSTRAINT [User_Type_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_Type_user_type_name_key] UNIQUE NONCLUSTERED ([user_type_name])
);

-- CreateTable
CREATE TABLE [dbo].[User_Account] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [password] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [user_id] INT NOT NULL,
    [google_id] INT,
    [is_active] BIT NOT NULL CONSTRAINT [User_Account_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [User_Account_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [User_Account_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [user_type_id] BIGINT NOT NULL,
    CONSTRAINT [User_Account_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_Account_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [User_Account_google_id_key] UNIQUE NONCLUSTERED ([google_id]),
    CONSTRAINT [User_Account_user_type_id_key] UNIQUE NONCLUSTERED ([user_type_id])
);

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
