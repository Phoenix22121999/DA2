BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post] ADD [address] NVARCHAR(1000),
[district_code] INT,
[province_code] INT,
[ward_code] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
