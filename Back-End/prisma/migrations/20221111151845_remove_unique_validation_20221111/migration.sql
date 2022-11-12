BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[User_Account] DROP CONSTRAINT [User_Account_username_key];

-- DropIndex
ALTER TABLE [dbo].[User_Type] DROP CONSTRAINT [User_Type_user_type_name_key];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
