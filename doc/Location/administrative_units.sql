--create table [#tempadministrative_units] (
--[id] [int],
--[full_name] [nvarchar] (1000) NULL,
--[full_name_en] [nvarchar] (1000) NULL,
--[short_name] [nvarchar] (1000),
--[short_name_en] [nvarchar] (1000) NULL,
--[code_name] [nvarchar] (1000),
--[code_name_en] [nvarchar] (1000) NULL);


insert dbo.administrative_units([id],[full_name],[full_name_en],[short_name],[short_name_en],[code_name],[code_name_en])
select 1,N'Thành phố trực thuộc trung ương',N'Municipality',N'Thành phố',N'City',N'thanh_pho_truc_thuoc_trung_uong',N'municipality' UNION ALL
select 2,N'Tỉnh',N'Province',N'Tỉnh',N'Province',N'tinh',N'province' UNION ALL
select 3,N'Thành phố thuộc thành phố trực thuộc trung ương',N'Municipal city',N'Thành phố',N'City',N'thanh_pho_thuoc_thanh_pho_truc_thuoc_trung_uong',N'municipal_city' UNION ALL
select 4,N'Thành phố thuộc tỉnh',N'Provincial city',N'Thành phố',N'City',N'thanh_pho_thuoc_tinh',N'provincial_city' UNION ALL
select 5,N'Quận',N'Urban district',N'Quận',N'District',N'quan',N'urban_district' UNION ALL
select 6,N'Thị xã',N'District-level town',N'Thị xã',N'Town',N'thi_xa',N'district_level_town' UNION ALL
select 7,N'Huyện',N'District',N'Huyện',N'District',N'huyen',N'district' UNION ALL
select 8,N'Phường',N'Ward',N'Phường',N'Ward',N'phuong',N'ward' UNION ALL
select 9,N'Thị trấn',N'Commune-level town',N'Thị trấn',N'Township',N'thi_tran',N'commune_level_town' UNION ALL
select 10,N'Xã',N'Commune',N'Xã',N'Commune',N'xa',N'commune';