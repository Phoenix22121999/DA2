/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `wards` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[wards] ADD CONSTRAINT [wards_code_key] UNIQUE NONCLUSTERED ([code]);

-- AddForeignKey
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_province_code_fkey] FOREIGN KEY ([province_code]) REFERENCES [dbo].[provinces]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_district_code_fkey] FOREIGN KEY ([district_code]) REFERENCES [dbo].[districts]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[User_Account] ADD CONSTRAINT [User_Account_ward_code_fkey] FOREIGN KEY ([ward_code]) REFERENCES [dbo].[wards]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post] ADD CONSTRAINT [Recruitment_Post_province_code_fkey] FOREIGN KEY ([province_code]) REFERENCES [dbo].[provinces]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post] ADD CONSTRAINT [Recruitment_Post_district_code_fkey] FOREIGN KEY ([district_code]) REFERENCES [dbo].[districts]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post] ADD CONSTRAINT [Recruitment_Post_ward_code_fkey] FOREIGN KEY ([ward_code]) REFERENCES [dbo].[wards]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
