/*
  Warnings:

  - You are about to drop the column `from_vale` on the `Recruitment_Post` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Recruitment_Post] DROP COLUMN [from_vale];
ALTER TABLE [dbo].[Recruitment_Post] ADD [from_value] BIGINT NOT NULL CONSTRAINT [Recruitment_Post_from_value_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
