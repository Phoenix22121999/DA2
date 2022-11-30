BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post] ALTER COLUMN [district_code] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Recruitment_Post] ALTER COLUMN [province_code] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Recruitment_Post] ALTER COLUMN [ward_code] NVARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [district_code] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [province_code] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[User_Account] ALTER COLUMN [ward_code] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
