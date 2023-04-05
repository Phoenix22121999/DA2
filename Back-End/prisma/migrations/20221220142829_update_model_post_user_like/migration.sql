BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Recruitment_Post_User_Like] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [user_id] BIGINT NOT NULL,
    [post_id] BIGINT NOT NULL,
    [create_date] DATETIME2 CONSTRAINT [Recruitment_Post_User_Like_create_date_df] DEFAULT CURRENT_TIMESTAMP,
    [create_user] NVARCHAR(1000),
    [update_date] DATETIME2,
    [update_user] NVARCHAR(1000),
    [delete_date] DATETIME2,
    [delete_user] NVARCHAR(1000),
    [is_delete] BIT NOT NULL CONSTRAINT [Recruitment_Post_User_Like_is_delete_df] DEFAULT 0,
    [is_active] BIT NOT NULL CONSTRAINT [Recruitment_Post_User_Like_is_active_df] DEFAULT 1,
    CONSTRAINT [Recruitment_Post_User_Like_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_User_Like] ADD CONSTRAINT [Recruitment_Post_User_Like_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User_Account]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Recruitment_Post_User_Like] ADD CONSTRAINT [Recruitment_Post_User_Like_post_id_fkey] FOREIGN KEY ([post_id]) REFERENCES [dbo].[Recruitment_Post]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
