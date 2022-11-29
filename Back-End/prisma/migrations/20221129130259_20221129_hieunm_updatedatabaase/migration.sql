/*
  Warnings:

  - You are about to drop the column `profile_id` on the `History_Apply_Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_id` on the `User_Account` table. All the data in the column will be lost.
  - You are about to drop the column `district_id` on the `User_Account` table. All the data in the column will be lost.
  - You are about to drop the column `ward_id` on the `User_Account` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cv_id,post_id,user_id]` on the table `History_Apply_Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cv_id` to the `History_Apply_Job` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[History_Apply_Job] ALTER COLUMN [update_user] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[History_Apply_Job] DROP COLUMN [profile_id];
ALTER TABLE [dbo].[History_Apply_Job] ADD [cv_id] BIGINT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[User_Account] DROP COLUMN [city_id],
[district_id],
[ward_id];
ALTER TABLE [dbo].[User_Account] ADD [district_code] INT,
[province_code] INT,
[ward_code] INT;

-- CreateIndex
ALTER TABLE [dbo].[History_Apply_Job] ADD CONSTRAINT [History_Apply_Job_cv_id_post_id_user_id_key] UNIQUE NONCLUSTERED ([cv_id], [post_id], [user_id]);

-- AddForeignKey
ALTER TABLE [dbo].[History_Apply_Job] ADD CONSTRAINT [History_Apply_Job_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[History_Apply_Job] ADD CONSTRAINT [History_Apply_Job_post_id_fkey] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Recruitment_Post]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[History_Apply_Job] ADD CONSTRAINT [History_Apply_Job_cv_id_fkey] FOREIGN KEY ([cv_id]) REFERENCES [dbo].[cv]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
