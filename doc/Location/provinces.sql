--create table [#tempprovinces] (
--[id] [bigint] identity,
--[code] [nvarchar] (1000),
--[name] [nvarchar] (1000),
--[name_en] [nvarchar] (1000) NULL,
--[full_name] [nvarchar] (1000),
--[full_name_en] [nvarchar] (1000) NULL,
--[code_name] [nvarchar] (1000) NULL,
--[administrative_unit_id] [int] NULL,
--[adminstrative_region_id] [int] NULL);



set identity_insert dbo.provinces on;


insert dbo.provinces([id],[code],[name],[name_en],[full_name],[full_name_en],[code_name],[administrative_unit_id],[adminstrative_region_id])
select 1,N'01',N'Hà Nội',N'Ha Noi',N'Thành phố Hà Nội',N'Ha Noi City',N'ha_noi',1,3 UNION ALL
select 2,N'26',N'Vĩnh Phúc',N'Vinh Phuc',N'Tỉnh Vĩnh Phúc',N'Vinh Phuc Province',N'vinh_phuc',2,3 UNION ALL
select 3,N'27',N'Bắc Ninh',N'Bac Ninh',N'Tỉnh Bắc Ninh',N'Bac Ninh Province',N'bac_ninh',2,3 UNION ALL
select 4,N'30',N'Hải Dương',N'Hai Duong',N'Tỉnh Hải Dương',N'Hai Duong Province',N'hai_duong',2,3 UNION ALL
select 5,N'31',N'Hải Phòng',N'Hai Phong',N'Thành phố Hải Phòng',N'Hai Phong City',N'hai_phong',1,3 UNION ALL
select 6,N'33',N'Hưng Yên',N'Hung Yen',N'Tỉnh Hưng Yên',N'Hung Yen Province',N'hung_yen',2,3 UNION ALL
select 7,N'34',N'Thái Bình',N'Thai Binh',N'Tỉnh Thái Bình',N'Thai Binh Province',N'thai_binh',2,3 UNION ALL
select 8,N'35',N'Hà Nam',N'Ha Nam',N'Tỉnh Hà Nam',N'Ha Nam Province',N'ha_nam',2,3 UNION ALL
select 9,N'96',N'Cà Mau',N'Ca Mau',N'Tỉnh Cà Mau',N'Ca Mau Province',N'ca_mau',2,8 UNION ALL
select 10,N'04',N'Cao Bằng',N'Cao Bang',N'Tỉnh Cao Bằng',N'Cao Bang Province',N'cao_bang',2,1 UNION ALL
select 11,N'06',N'Bắc Kạn',N'Bac Kan',N'Tỉnh Bắc Kạn',N'Bac Kan Province',N'bac_kan',2,1 UNION ALL
select 12,N'08',N'Tuyên Quang',N'Tuyen Quang',N'Tỉnh Tuyên Quang',N'Tuyen Quang Province',N'tuyen_quang',2,1 UNION ALL
select 13,N'19',N'Thái Nguyên',N'Thai Nguyen',N'Tỉnh Thái Nguyên',N'Thai Nguyen Province',N'thai_nguyen',2,1 UNION ALL
select 14,N'20',N'Lạng Sơn',N'Lang Son',N'Tỉnh Lạng Sơn',N'Lang Son Province',N'lang_son',2,1 UNION ALL
select 15,N'22',N'Quảng Ninh',N'Quang Ninh',N'Tỉnh Quảng Ninh',N'Quang Ninh Province',N'quang_ninh',2,1 UNION ALL
select 16,N'24',N'Bắc Giang',N'Bac Giang',N'Tỉnh Bắc Giang',N'Bac Giang Province',N'bac_giang',2,1 UNION ALL
select 17,N'25',N'Phú Thọ',N'Phu Tho',N'Tỉnh Phú Thọ',N'Phu Tho Province',N'phu_tho',2,1 UNION ALL
select 18,N'10',N'Lào Cai',N'Lao Cai',N'Tỉnh Lào Cai',N'Lao Cai Province',N'lao_cai',2,2 UNION ALL
select 19,N'11',N'Điện Biên',N'Dien Bien',N'Tỉnh Điện Biên',N'Dien Bien Province',N'dien_bien',2,2 UNION ALL
select 20,N'12',N'Lai Châu',N'Lai Chau',N'Tỉnh Lai Châu',N'Lai Chau Province',N'lai_chau',2,2 UNION ALL
select 21,N'14',N'Sơn La',N'Son La',N'Tỉnh Sơn La',N'Son La Province',N'son_la',2,2 UNION ALL
select 22,N'15',N'Yên Bái',N'Yen Bai',N'Tỉnh Yên Bái',N'Yen Bai Province',N'yen_bai',2,2 UNION ALL
select 23,N'17',N'Hoà Bình',N'Hoa Binh',N'Tỉnh Hoà Bình',N'Hoa Binh Province',N'hoa_binh',2,2 UNION ALL
select 24,N'70',N'Bình Phước',N'Binh Phuoc',N'Tỉnh Bình Phước',N'Binh Phuoc Province',N'binh_phuoc',2,7 UNION ALL
select 25,N'72',N'Tây Ninh',N'Tay Ninh',N'Tỉnh Tây Ninh',N'Tay Ninh Province',N'tay_ninh',2,7 UNION ALL
select 26,N'74',N'Bình Dương',N'Binh Duong',N'Tỉnh Bình Dương',N'Binh Duong Province',N'binh_duong',2,7 UNION ALL
select 27,N'75',N'Đồng Nai',N'Dong Nai',N'Tỉnh Đồng Nai',N'Dong Nai Province',N'dong_nai',2,7 UNION ALL
select 28,N'79',N'Hồ Chí Minh',N'Ho Chi Minh',N'Thành phố Hồ Chí Minh',N'Ho Chi Minh City',N'ho_chi_minh',1,7 UNION ALL
select 29,N'77',N'Bà Rịa - Vũng Tàu',N'Ba Ria - Vung Tau',N'Tỉnh Bà Rịa - Vũng Tàu',N'Ba Ria - Vung Tau Province',N'ba_ria_vung_tau',2,7 UNION ALL
select 30,N'36',N'Nam Định',N'Nam Dinh',N'Tỉnh Nam Định',N'Nam Dinh Province',N'nam_dinh',2,3 UNION ALL
select 31,N'37',N'Ninh Bình',N'Ninh Binh',N'Tỉnh Ninh Bình',N'Ninh Binh Province',N'ninh_binh',2,3 UNION ALL
select 32,N'38',N'Thanh Hóa',N'Thanh Hoa',N'Tỉnh Thanh Hóa',N'Thanh Hoa Province',N'thanh_hoa',2,4 UNION ALL
select 33,N'40',N'Nghệ An',N'Nghe An',N'Tỉnh Nghệ An',N'Nghe An Province',N'nghe_an',2,4 UNION ALL
select 34,N'42',N'Hà Tĩnh',N'Ha Tinh',N'Tỉnh Hà Tĩnh',N'Ha Tinh Province',N'ha_tinh',2,4 UNION ALL
select 35,N'44',N'Quảng Bình',N'Quang Binh',N'Tỉnh Quảng Bình',N'Quang Binh Province',N'quang_binh',2,4 UNION ALL
select 36,N'45',N'Quảng Trị',N'Quang Tri',N'Tỉnh Quảng Trị',N'Quang Tri Province',N'quang_tri',2,4 UNION ALL
select 37,N'46',N'Thừa Thiên Huế',N'Thua Thien Hue',N'Tỉnh Thừa Thiên Huế',N'Thua Thien Hue Province',N'thua_thien_hue',2,4 UNION ALL
select 38,N'48',N'Đà Nẵng',N'Da Nang',N'Thành phố Đà Nẵng',N'Da Nang City',N'da_nang',1,5 UNION ALL
select 39,N'49',N'Quảng Nam',N'Quang Nam',N'Tỉnh Quảng Nam',N'Quang Nam Province',N'quang_nam',2,5 UNION ALL
select 40,N'51',N'Quảng Ngãi',N'Quang Ngai',N'Tỉnh Quảng Ngãi',N'Quang Ngai Province',N'quang_ngai',2,5 UNION ALL
select 41,N'52',N'Bình Định',N'Binh Dinh',N'Tỉnh Bình Định',N'Binh Dinh Province',N'binh_dinh',2,5 UNION ALL
select 42,N'54',N'Phú Yên',N'Phu Yen',N'Tỉnh Phú Yên',N'Phu Yen Province',N'phu_yen',2,5 UNION ALL
select 43,N'56',N'Khánh Hòa',N'Khanh Hoa',N'Tỉnh Khánh Hòa',N'Khanh Hoa Province',N'khanh_hoa',2,5 UNION ALL
select 44,N'58',N'Ninh Thuận',N'Ninh Thuan',N'Tỉnh Ninh Thuận',N'Ninh Thuan Province',N'ninh_thuan',2,5 UNION ALL
select 45,N'60',N'Bình Thuận',N'Binh Thuan',N'Tỉnh Bình Thuận',N'Binh Thuan Province',N'binh_thuan',2,5 UNION ALL
select 46,N'62',N'Kon Tum',N'Kon Tum',N'Tỉnh Kon Tum',N'Kon Tum Province',N'kon_tum',2,6 UNION ALL
select 47,N'64',N'Gia Lai',N'Gia Lai',N'Tỉnh Gia Lai',N'Gia Lai Province',N'gia_lai',2,6 UNION ALL
select 48,N'66',N'Đắk Lắk',N'Dak Lak',N'Tỉnh Đắk Lắk',N'Dak Lak Province',N'dak_lak',2,6 UNION ALL
select 49,N'67',N'Đắk Nông',N'Dak Nong',N'Tỉnh Đắk Nông',N'Dak Nong Province',N'dak_nong',2,6 UNION ALL
select 50,N'68',N'Lâm Đồng',N'Lam Dong',N'Tỉnh Lâm Đồng',N'Lam Dong Province',N'lam_dong',2,6 UNION ALL
select 51,N'80',N'Long An',N'Long An',N'Tỉnh Long An',N'Long An Province',N'long_an',2,8 UNION ALL
select 52,N'82',N'Tiền Giang',N'Tien Giang',N'Tỉnh Tiền Giang',N'Tien Giang Province',N'tien_giang',2,8 UNION ALL
select 53,N'83',N'Bến Tre',N'Ben Tre',N'Tỉnh Bến Tre',N'Ben Tre Province',N'ben_tre',2,8 UNION ALL
select 54,N'84',N'Trà Vinh',N'Tra Vinh',N'Tỉnh Trà Vinh',N'Tra Vinh Province',N'tra_vinh',2,8 UNION ALL
select 55,N'86',N'Vĩnh Long',N'Vinh Long',N'Tỉnh Vĩnh Long',N'Vinh Long Province',N'vinh_long',2,8 UNION ALL
select 56,N'87',N'Đồng Tháp',N'Dong Thap',N'Tỉnh Đồng Tháp',N'Dong Thap Province',N'dong_thap',2,8 UNION ALL
select 57,N'89',N'An Giang',N'An Giang',N'Tỉnh An Giang',N'An Giang Province',N'an_giang',2,8 UNION ALL
select 58,N'91',N'Kiên Giang',N'Kien Giang',N'Tỉnh Kiên Giang',N'Kien Giang Province',N'kien_giang',2,8 UNION ALL
select 59,N'92',N'Cần Thơ',N'Can Tho',N'Thành phố Cần Thơ',N'Can Tho City',N'can_tho',1,8 UNION ALL
select 60,N'93',N'Hậu Giang',N'Hau Giang',N'Tỉnh Hậu Giang',N'Hau Giang Province',N'hau_giang',2,8 UNION ALL
select 61,N'94',N'Sóc Trăng',N'Soc Trang',N'Tỉnh Sóc Trăng',N'Soc Trang Province',N'soc_trang',2,8 UNION ALL
select 62,N'95',N'Bạc Liêu',N'Bac Lieu',N'Tỉnh Bạc Liêu',N'Bac Lieu Province',N'bac_lieu',2,8 UNION ALL
select 63,N'02',N'Hà Giang',N'Ha Giang',N'Tỉnh Hà Giang',N'Ha Giang Province',N'ha_giang',2,1;

set identity_insert dbo.provinces off;