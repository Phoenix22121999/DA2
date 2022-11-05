USE [QLHS_TDTU]
GO
/****** Object:  Table [dbo].[_prisma_migrations]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[_prisma_migrations](
	[id] [varchar](36) NOT NULL,
	[checksum] [varchar](64) NOT NULL,
	[finished_at] [datetimeoffset](7) NULL,
	[migration_name] [nvarchar](250) NOT NULL,
	[logs] [nvarchar](max) NULL,
	[rolled_back_at] [datetimeoffset](7) NULL,
	[started_at] [datetimeoffset](7) NOT NULL,
	[applied_steps_count] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Account]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Account](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[password] [nvarchar](1000) NOT NULL,
	[username] [nvarchar](1000) NOT NULL,
	[user_id] [int] NOT NULL,
	[google_id] [int] NULL,
	[is_active] [bit] NOT NULL,
	[is_delete] [bit] NOT NULL,
	[create_date] [datetime2](7) NOT NULL,
	[user_type_id] [bigint] NOT NULL,
 CONSTRAINT [User_Account_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [User_Account_google_id_key] UNIQUE NONCLUSTERED 
(
	[google_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [User_Account_user_type_id_key] UNIQUE NONCLUSTERED 
(
	[user_type_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [User_Account_username_key] UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Candidate]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Candidate](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[first_name] [nvarchar](1000) NOT NULL,
	[last_name] [nvarchar](1000) NOT NULL,
	[full_name] [nvarchar](1000) NOT NULL,
	[email] [nvarchar](1000) NULL,
	[number_phone] [nvarchar](1000) NULL,
	[age] [int] NULL,
	[gender] [int] NULL,
	[address] [nvarchar](1000) NULL,
	[city_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[avartar] [nvarchar](1000) NULL,
	[is_active] [bit] NOT NULL,
	[is_delete] [bit] NOT NULL,
 CONSTRAINT [User_Candidate_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Manager]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Manager](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[first_name] [nvarchar](1000) NOT NULL,
	[last_name] [nvarchar](1000) NOT NULL,
	[full_name] [nvarchar](1000) NOT NULL,
	[email] [nvarchar](1000) NULL,
	[number_phone] [nvarchar](1000) NULL,
	[age] [int] NULL,
	[gender] [int] NULL,
	[address] [nvarchar](1000) NULL,
	[city_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[avartar] [nvarchar](1000) NULL,
 CONSTRAINT [User_Manager_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Recruiter]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Recruiter](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[company_name] [nvarchar](1000) NOT NULL,
	[email] [nvarchar](1000) NULL,
	[number_phone] [nvarchar](1000) NULL,
	[address] [nvarchar](1000) NULL,
	[city_id] [int] NULL,
	[district_id] [int] NULL,
	[ward_id] [int] NULL,
	[avartar] [nvarchar](1000) NULL,
	[is_active] [bit] NOT NULL,
	[is_delete] [bit] NOT NULL,
 CONSTRAINT [User_Recruiter_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [User_Recruiter_company_name_key] UNIQUE NONCLUSTERED 
(
	[company_name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Type]    Script Date: 10/13/2022 6:08:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Type](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[user_type_name] [nvarchar](1000) NOT NULL,
	[is_active] [bit] NOT NULL,
	[is_delete] [bit] NOT NULL,
	[create_date] [datetime2](7) NULL,
	[create_user] [nvarchar](1000) NULL,
	[update_date] [datetime2](7) NULL,
	[update_user] [nvarchar](1000) NULL,
	[delete_date] [datetime2](7) NULL,
	[delete_user] [nvarchar](1000) NULL,
 CONSTRAINT [User_Type_pkey] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [User_Type_user_type_name_key] UNIQUE NONCLUSTERED 
(
	[user_type_name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[_prisma_migrations] ADD  DEFAULT (getdate()) FOR [started_at]
GO
ALTER TABLE [dbo].[_prisma_migrations] ADD  DEFAULT ((0)) FOR [applied_steps_count]
GO
ALTER TABLE [dbo].[User_Account] ADD  CONSTRAINT [User_Account_is_active_df]  DEFAULT ((1)) FOR [is_active]
GO
ALTER TABLE [dbo].[User_Account] ADD  CONSTRAINT [User_Account_is_delete_df]  DEFAULT ((0)) FOR [is_delete]
GO
ALTER TABLE [dbo].[User_Account] ADD  CONSTRAINT [User_Account_create_date_df]  DEFAULT (getdate()) FOR [create_date]
GO
ALTER TABLE [dbo].[User_Candidate] ADD  CONSTRAINT [User_Candidate_is_active_df]  DEFAULT ((1)) FOR [is_active]
GO
ALTER TABLE [dbo].[User_Candidate] ADD  CONSTRAINT [User_Candidate_is_delete_df]  DEFAULT ((0)) FOR [is_delete]
GO
ALTER TABLE [dbo].[User_Recruiter] ADD  CONSTRAINT [User_Recruiter_is_active_df]  DEFAULT ((1)) FOR [is_active]
GO
ALTER TABLE [dbo].[User_Recruiter] ADD  CONSTRAINT [User_Recruiter_is_delete_df]  DEFAULT ((0)) FOR [is_delete]
GO
ALTER TABLE [dbo].[User_Type] ADD  CONSTRAINT [User_Type_is_active_df]  DEFAULT ((1)) FOR [is_active]
GO
ALTER TABLE [dbo].[User_Type] ADD  CONSTRAINT [User_Type_is_delete_df]  DEFAULT ((0)) FOR [is_delete]
GO
ALTER TABLE [dbo].[User_Account]  WITH CHECK ADD  CONSTRAINT [User_Account_user_type_id_fkey] FOREIGN KEY([user_type_id])
REFERENCES [dbo].[User_Type] ([id])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[User_Account] CHECK CONSTRAINT [User_Account_user_type_id_fkey]
GO
