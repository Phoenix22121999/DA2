/*
  Warnings:

  - A unique constraint covering the columns `[job_type_name]` on the table `Job_Type` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[majors_name]` on the table `Majors` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Job_Type] ADD CONSTRAINT [Job_Type_job_type_name_key] UNIQUE NONCLUSTERED ([job_type_name]);

-- CreateIndex
ALTER TABLE [dbo].[Majors] ADD CONSTRAINT [Majors_majors_name_key] UNIQUE NONCLUSTERED ([majors_name]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
