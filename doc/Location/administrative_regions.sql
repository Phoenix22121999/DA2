--create table [#tempadministrative_regions] (
--[id] [int],
--[name] [nvarchar] (1000),
--[name_en] [nvarchar] (1000),
--[code_name_en] [nvarchar] (1000) NULL,
--[code_name] [nvarchar] (1000) NULL);


insert dbo.administrative_regions ([id],[name],[name_en],[code_name_en],[code_name])
select 1,N'Đông Bắc Bộ',N'Northeast',N'northest',N'dong_bac_bo' UNION ALL
select 2,N'Tây Bắc Bộ',N'Northwest',N'northwest',N'tay_bac_bo' UNION ALL
select 3,N'Đồng bằng sông Hồng',N'Red River Delta',N'red_river_delta',N'dong_bang_song_hong' UNION ALL
select 4,N'Bắc Trung Bộ',N'North Central Coast',N'north_central_coast',N'bac_trung_bo' UNION ALL
select 5,N'Duyên hải Nam Trung Bộ',N'South Central Coast',N'south_central_coast',N'duyen_hai_nam_trung_bo' UNION ALL
select 6,N'Tây Nguyên',N'Central Highlands',N'central_highlands',N'tay_nguyen' UNION ALL
select 7,N'Đông Nam Bộ',N'Southeast',N'southeast',N'dong_nam_bo' UNION ALL
select 8,N'Đồng bằng sông Cửu Long',N'Mekong River Delta',N'southwest',N'dong_bang_song_cuu_long';