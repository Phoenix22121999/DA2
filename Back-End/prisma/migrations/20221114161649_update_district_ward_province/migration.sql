BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[cv] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [file_name_hash] NVARCHAR(1000) NOT NULL,
    [file_name] NVARCHAR(1000) NOT NULL,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [cv_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [is_active] BIT NOT NULL CONSTRAINT [cv_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [cv_is_delete_df] DEFAULT 0,
    CONSTRAINT [cv_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[administrative_regions] (
    [id] INT NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [name_en] NVARCHAR(1000) NOT NULL,
    [code_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000),
    CONSTRAINT [administrative_regions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[administrative_units] (
    [id] INT NOT NULL,
    [full_name] NVARCHAR(1000),
    [full_name_en] NVARCHAR(1000),
    [short_name] NVARCHAR(1000) NOT NULL,
    [short_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000) NOT NULL,
    [code_name_en] NVARCHAR(1000),
    CONSTRAINT [administrative_units_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[provines] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [name_en] NVARCHAR(1000),
    [full_name] NVARCHAR(1000) NOT NULL,
    [full_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000),
    [administrative_unit_id] INT,
    [adminstrative_region_id] INT,
    CONSTRAINT [provines_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [provines_code_key] UNIQUE NONCLUSTERED ([code])
);

-- CreateTable
CREATE TABLE [dbo].[districts] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [name_en] NVARCHAR(1000),
    [full_name] NVARCHAR(1000),
    [full_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000),
    [administrative_unit_id] INT NOT NULL,
    [province_code] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [districts_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [districts_code_key] UNIQUE NONCLUSTERED ([code])
);

-- CreateTable
CREATE TABLE [dbo].[wards] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [name_en] NVARCHAR(1000),
    [full_name] NVARCHAR(1000) NOT NULL,
    [full_name_en] NVARCHAR(1000),
    [code_name] NVARCHAR(1000),
    [district_code] NVARCHAR(1000) NOT NULL,
    [administrative_unit_id] INT NOT NULL,
    CONSTRAINT [wards_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[provines] ADD CONSTRAINT [provines_administrative_unit_id_fkey] FOREIGN KEY ([administrative_unit_id]) REFERENCES [dbo].[administrative_units]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[provines] ADD CONSTRAINT [provines_adminstrative_region_id_fkey] FOREIGN KEY ([adminstrative_region_id]) REFERENCES [dbo].[administrative_regions]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[districts] ADD CONSTRAINT [districts_administrative_unit_id_fkey] FOREIGN KEY ([administrative_unit_id]) REFERENCES [dbo].[administrative_units]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[districts] ADD CONSTRAINT [districts_province_code_fkey] FOREIGN KEY ([province_code]) REFERENCES [dbo].[provines]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[wards] ADD CONSTRAINT [wards_district_code_fkey] FOREIGN KEY ([district_code]) REFERENCES [dbo].[districts]([code]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[wards] ADD CONSTRAINT [wards_administrative_unit_id_fkey] FOREIGN KEY ([administrative_unit_id]) REFERENCES [dbo].[administrative_units]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
