BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [google_id] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
