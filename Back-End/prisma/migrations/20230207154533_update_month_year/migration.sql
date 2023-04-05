/*
  Warnings:

  - You are about to drop the column `year` on the `User_Project` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User_Achievement] ALTER COLUMN [year] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[User_Achievement] ADD [month] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[User_Education] ALTER COLUMN [year_start] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[User_Education] ALTER COLUMN [year_end] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[User_Education] ADD [month_end] NVARCHAR(1000),
[month_start] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[User_Experience] ADD [month_end] NVARCHAR(1000),
[month_start] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[User_Project] DROP COLUMN [year];
ALTER TABLE [dbo].[User_Project] ADD [month_end] NVARCHAR(1000),
[month_start] NVARCHAR(1000),
[year_end] NVARCHAR(1000),
[year_start] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
