BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Achievement] ALTER COLUMN [description] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[User_Education] ALTER COLUMN [description] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[User_Experience] ALTER COLUMN [description] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[User_Project] ALTER COLUMN [description] NVARCHAR(4000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
