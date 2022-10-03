BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User_type] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_type_name] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [User_type_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [User_type_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    CONSTRAINT [User_type_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_type_user_type_name_key] UNIQUE NONCLUSTERED ([user_type_name])
);

-- CreateTable
CREATE TABLE [dbo].[Account] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [password] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [user_id] INT NOT NULL,
    [google_id] INT,
    [is_active] BIT NOT NULL CONSTRAINT [Account_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [Account_is_delete_df] DEFAULT 0,
    [create_date] DATETIME2 NOT NULL CONSTRAINT [Account_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [user_type_id] BIGINT NOT NULL,
    CONSTRAINT [Account_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Account_username_key] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [Account_google_id_key] UNIQUE NONCLUSTERED ([google_id]),
    CONSTRAINT [Account_user_type_id_key] UNIQUE NONCLUSTERED ([user_type_id])
);

-- CreateTable
CREATE TABLE [dbo].[User_Candidate] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [first_name] NVARCHAR(1000) NOT NULL,
    [last_name] NVARCHAR(1000) NOT NULL,
    [full_name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [number_phone] NVARCHAR(1000),
    [age] INT,
    [gender] INT NOT NULL,
    [address] NVARCHAR(1000),
    [city_id] INT,
    [district_id] INT,
    [ward_id] INT,
    [avartar] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [User_Candidate_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [User_Candidate_is_delete_df] DEFAULT 0,
    CONSTRAINT [User_Candidate_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User_Recruiter] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [company_name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [number_phone] NVARCHAR(1000),
    [address] NVARCHAR(1000),
    [city_id] INT,
    [district_id] INT,
    [ward_id] INT,
    [avartar] NVARCHAR(1000) NOT NULL,
    [is_active] BIT NOT NULL CONSTRAINT [User_Recruiter_is_active_df] DEFAULT 1,
    [is_delete] BIT NOT NULL CONSTRAINT [User_Recruiter_is_delete_df] DEFAULT 0,
    CONSTRAINT [User_Recruiter_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_Recruiter_company_name_key] UNIQUE NONCLUSTERED ([company_name])
);

-- CreateTable
CREATE TABLE [dbo].[User_Manager] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [first_name] NVARCHAR(1000) NOT NULL,
    [last_name] NVARCHAR(1000) NOT NULL,
    [full_name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [number_phone] NVARCHAR(1000),
    [age] INT,
    [gender] INT NOT NULL,
    [address] NVARCHAR(1000),
    [city_id] INT,
    [district_id] INT,
    [ward_id] INT,
    [avartar] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [User_Manager_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [Account_user_type_id_fkey] FOREIGN KEY ([user_type_id]) REFERENCES [dbo].[User_type]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
