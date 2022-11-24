BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Recruitment_Post_Image] (
    [id] BIGINT NOT NULL IDENTITY(1,1),
    [post_id] BIGINT,
    [user_id] BIGINT,
    [url_image] NVARCHAR(1000),
    [is_active] BIT,
    [is_delete] BIT NOT NULL,
    CONSTRAINT [Recruitment_Post_Image_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
