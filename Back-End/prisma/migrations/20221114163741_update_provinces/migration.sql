/*
  Warnings:

  - You are about to drop the `provines` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[districts] DROP CONSTRAINT [districts_province_code_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[provines] DROP CONSTRAINT [provines_administrative_unit_id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[provines] DROP CONSTRAINT [provines_adminstrative_region_id_fkey];

-- DropTable
DROP TABLE [dbo].[provines];

-- CreateTable
CREATE TABLE [dbo].[provinces] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [name_en] NVARCHAR(1000),
    [full_name] NVARCHAR(1000) NOT NULL,
    [full_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000),
    [administrative_unit_id] INT,
    [adminstrative_region_id] INT,
    CONSTRAINT [provinces_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [provinces_code_key] UNIQUE NONCLUSTERED ([code])
);

-- AddForeignKey
ALTER TABLE [dbo].[provinces] ADD CONSTRAINT [provinces_administrative_unit_id_fkey] FOREIGN KEY ([administrative_unit_id]) REFERENCES [dbo].[administrative_units]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[provinces] ADD CONSTRAINT [provinces_adminstrative_region_id_fkey] FOREIGN KEY ([adminstrative_region_id]) REFERENCES [dbo].[administrative_regions]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[districts] ADD CONSTRAINT [districts_province_code_fkey] FOREIGN KEY ([province_code]) REFERENCES [dbo].[provinces]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
