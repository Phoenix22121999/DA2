--create table [#tempdistricts] (
--[id] [bigint] identity,
--[code] [nvarchar] (1000),
--[name] [nvarchar] (1000),
--[name_en] [nvarchar] (1000) NULL,
--[full_name] [nvarchar] (1000) NULL,
--[full_name_en] [nvarchar] (1000) NULL,
--[code_name] [nvarchar] (1000) NULL,
--[administrative_unit_id] [int],
--[province_code] [nvarchar] (1000));



set identity_insert dbo.districts on;


insert dbo.districts ([id],[code],[name],[name_en],[full_name],[full_name_en],[code_name],[administrative_unit_id],[province_code])
select 26,N'760',N'1',N'1',N'Quận 1',N'District 1',N'1',5,N'79' UNION ALL
select 27,N'761',N'12',N'12',N'Quận 12',N'District 12',N'12',5,N'79' UNION ALL
select 28,N'770',N'3',N'3',N'Quận 3',N'District 3',N'3',5,N'79' UNION ALL
select 29,N'771',N'10',N'10',N'Quận 10',N'District 10',N'10',5,N'79' UNION ALL
select 30,N'772',N'11',N'11',N'Quận 11',N'District 11',N'11',5,N'79' UNION ALL
select 31,N'773',N'4',N'4',N'Quận 4',N'District 4',N'4',5,N'79' UNION ALL
select 32,N'774',N'5',N'5',N'Quận 5',N'District 5',N'5',5,N'79' UNION ALL
select 33,N'775',N'6',N'6',N'Quận 6',N'District 6',N'6',5,N'79' UNION ALL
select 34,N'776',N'8',N'8',N'Quận 8',N'District 8',N'8',5,N'79' UNION ALL
select 35,N'778',N'7',N'7',N'Quận 7',N'District 7',N'7',5,N'79' UNION ALL
select 36,N'725',N'Thuận An',N'Thuan An',N'Thành phố Thuận An',N'Thuan An City',N'thuan_an',4,N'74' UNION ALL
select 37,N'001',N'Ba Đình',N'Ba Dinh',N'Quận Ba Đình',N'Ba Dinh District',N'ba_dinh',5,N'01' UNION ALL
select 38,N'002',N'Hoàn Kiếm',N'Hoan Kiem',N'Quận Hoàn Kiếm',N'Hoan Kiem District',N'hoan_kiem',5,N'01' UNION ALL
select 39,N'003',N'Tây Hồ',N'Tay Ho',N'Quận Tây Hồ',N'Tay Ho District',N'tay_ho',5,N'01' UNION ALL
select 40,N'004',N'Long Biên',N'Long Bien',N'Quận Long Biên',N'Long Bien District',N'long_bien',5,N'01' UNION ALL
select 41,N'005',N'Cầu Giấy',N'Cau Giay',N'Quận Cầu Giấy',N'Cau Giay District',N'cau_giay',5,N'01' UNION ALL
select 42,N'006',N'Đống Đa',N'Dong Da',N'Quận Đống Đa',N'Dong Da District',N'dong_da',5,N'01' UNION ALL
select 43,N'007',N'Hai Bà Trưng',N'Hai Ba Trung',N'Quận Hai Bà Trưng',N'Hai Ba Trung District',N'hai_ba_trung',5,N'01' UNION ALL
select 44,N'008',N'Hoàng Mai',N'Hoang Mai',N'Quận Hoàng Mai',N'Hoang Mai District',N'hoang_mai',5,N'01' UNION ALL
select 45,N'009',N'Thanh Xuân',N'Thanh Xuan',N'Quận Thanh Xuân',N'Thanh Xuan District',N'thanh_xuan',5,N'01' UNION ALL
select 46,N'016',N'Sóc Sơn',N'Soc Son',N'Huyện Sóc Sơn',N'Soc Son District',N'soc_son',7,N'01' UNION ALL
select 47,N'017',N'Đông Anh',N'Dong Anh',N'Huyện Đông Anh',N'Dong Anh District',N'dong_anh',7,N'01' UNION ALL
select 48,N'018',N'Gia Lâm',N'Gia Lam',N'Huyện Gia Lâm',N'Gia Lam District',N'gia_lam',7,N'01' UNION ALL
select 49,N'019',N'Nam Từ Liêm',N'Nam Tu Liem',N'Quận Nam Từ Liêm',N'Nam Tu Liem District',N'nam_tu_liem',5,N'01' UNION ALL
select 50,N'020',N'Thanh Trì',N'Thanh Tri',N'Huyện Thanh Trì',N'Thanh Tri District',N'thanh_tri',7,N'01' UNION ALL
select 51,N'021',N'Bắc Từ Liêm',N'Bac Tu Liem',N'Quận Bắc Từ Liêm',N'Bac Tu Liem District',N'bac_tu_liem',5,N'01' UNION ALL
select 52,N'250',N'Mê Linh',N'Me Linh',N'Huyện Mê Linh',N'Me Linh District',N'me_linh',7,N'01' UNION ALL
select 53,N'268',N'Hà Đông',N'Ha Dong',N'Quận Hà Đông',N'Ha Dong District',N'ha_dong',5,N'01' UNION ALL
select 54,N'269',N'Sơn Tây',N'Son Tay',N'Thị xã Sơn Tây',N'Son Tay Town',N'son_tay',6,N'01' UNION ALL
select 55,N'271',N'Ba Vì',N'Ba Vi',N'Huyện Ba Vì',N'Ba Vi District',N'ba_vi',7,N'01' UNION ALL
select 56,N'272',N'Phúc Thọ',N'Phuc Tho',N'Huyện Phúc Thọ',N'Phuc Tho District',N'phuc_tho',7,N'01' UNION ALL
select 57,N'273',N'Đan Phượng',N'Dan Phuong',N'Huyện Đan Phượng',N'Dan Phuong District',N'dan_phuong',7,N'01' UNION ALL
select 58,N'274',N'Hoài Đức',N'Hoai Duc',N'Huyện Hoài Đức',N'Hoai Duc District',N'hoai_duc',7,N'01' UNION ALL
select 59,N'275',N'Quốc Oai',N'Quoc Oai',N'Huyện Quốc Oai',N'Quoc Oai District',N'quoc_oai',7,N'01' UNION ALL
select 60,N'276',N'Thạch Thất',N'Thach That',N'Huyện Thạch Thất',N'Thach That District',N'thach_that',7,N'01' UNION ALL
select 61,N'277',N'Chương Mỹ',N'Chuong My',N'Huyện Chương Mỹ',N'Chuong My District',N'chuong_my',7,N'01' UNION ALL
select 62,N'278',N'Thanh Oai',N'Thanh Oai',N'Huyện Thanh Oai',N'Thanh Oai District',N'thanh_oai',7,N'01' UNION ALL
select 63,N'279',N'Thường Tín',N'Thuong Tin',N'Huyện Thường Tín',N'Thuong Tin District',N'thuong_tin',7,N'01' UNION ALL
select 64,N'280',N'Phú Xuyên',N'Phu Xuyen',N'Huyện Phú Xuyên',N'Phu Xuyen District',N'phu_xuyen',7,N'01' UNION ALL
select 65,N'281',N'Ứng Hòa',N'Ung Hoa',N'Huyện Ứng Hòa',N'Ung Hoa District',N'ung_hoa',7,N'01' UNION ALL
select 69,N'052',N'Nguyên Bình',N'Nguyen Binh',N'Huyện Nguyên Bình',N'Nguyen Binh District',N'nguyen_binh',7,N'04' UNION ALL
select 70,N'053',N'Thạch An',N'Thach An',N'Huyện Thạch An',N'Thach An District',N'thach_an',7,N'04' UNION ALL
select 71,N'058',N'Bắc Kạn',N'Bac Kan',N'Thành phố Bắc Kạn',N'Bac Kan City',N'bac_kan',4,N'06' UNION ALL
select 72,N'060',N'Pác Nặm',N'Pac Nam',N'Huyện Pác Nặm',N'Pac Nam District',N'pac_nam',7,N'06' UNION ALL
select 73,N'061',N'Ba Bể',N'Ba Be',N'Huyện Ba Bể',N'Ba Be District',N'ba_be',7,N'06' UNION ALL
select 74,N'062',N'Ngân Sơn',N'Ngan Son',N'Huyện Ngân Sơn',N'Ngan Son District',N'ngan_son',7,N'06' UNION ALL
select 75,N'063',N'Bạch Thông',N'Bach Thong',N'Huyện Bạch Thông',N'Bach Thong District',N'bach_thong',7,N'06' UNION ALL
select 76,N'064',N'Chợ Đồn',N'Cho Don',N'Huyện Chợ Đồn',N'Cho Don District',N'cho_don',7,N'06' UNION ALL
select 77,N'065',N'Chợ Mới',N'Cho Moi',N'Huyện Chợ Mới',N'Cho Moi District',N'cho_moi',7,N'06' UNION ALL
select 78,N'066',N'Na Rì',N'Na Ri',N'Huyện Na Rì',N'Na Ri District',N'na_ri',7,N'06' UNION ALL
select 79,N'070',N'Tuyên Quang',N'Tuyen Quang',N'Thành phố Tuyên Quang',N'Tuyen Quang City',N'tuyen_quang',4,N'08' UNION ALL
select 80,N'071',N'Lâm Bình',N'Lam Binh',N'Huyện Lâm Bình',N'Lam Binh District',N'lam_binh',7,N'08' UNION ALL
select 81,N'072',N'Na Hang',N'Na Hang',N'Huyện Na Hang',N'Na Hang District',N'na_hang',7,N'08' UNION ALL
select 82,N'073',N'Chiêm Hóa',N'Chiem Hoa',N'Huyện Chiêm Hóa',N'Chiem Hoa District',N'chiem_hoa',7,N'08' UNION ALL
select 83,N'074',N'Hàm Yên',N'Ham Yen',N'Huyện Hàm Yên',N'Ham Yen District',N'ham_yen',7,N'08' UNION ALL
select 84,N'075',N'Yên Sơn',N'Yen Son',N'Huyện Yên Sơn',N'Yen Son District',N'yen_son',7,N'08' UNION ALL
select 85,N'076',N'Sơn Dương',N'Son Duong',N'Huyện Sơn Dương',N'Son Duong District',N'son_duong',7,N'08' UNION ALL
select 86,N'080',N'Lào Cai',N'Lao Cai',N'Thành phố Lào Cai',N'Lao Cai City',N'lao_cai',4,N'10' UNION ALL
select 87,N'082',N'Bát Xát',N'Bat Xat',N'Huyện Bát Xát',N'Bat Xat District',N'bat_xat',7,N'10' UNION ALL
select 88,N'083',N'Mường Khương',N'Muong Khuong',N'Huyện Mường Khương',N'Muong Khuong District',N'muong_khuong',7,N'10' UNION ALL
select 89,N'084',N'Si Ma Cai',N'Si Ma Cai',N'Huyện Si Ma Cai',N'Si Ma Cai District',N'si_ma_cai',7,N'10' UNION ALL
select 90,N'085',N'Bắc Hà',N'Bac Ha',N'Huyện Bắc Hà',N'Bac Ha District',N'bac_ha',7,N'10' UNION ALL
select 91,N'086',N'Bảo Thắng',N'Bao Thang',N'Huyện Bảo Thắng',N'Bao Thang District',N'bao_thang',7,N'10' UNION ALL
select 92,N'087',N'Bảo Yên',N'Bao Yen',N'Huyện Bảo Yên',N'Bao Yen District',N'bao_yen',7,N'10' UNION ALL
select 93,N'088',N'Sa Pa',N'Sa Pa',N'Thị xã Sa Pa',N'Sa Pa Town',N'sa_pa',6,N'10' UNION ALL
select 94,N'089',N'Văn Bàn',N'Van Ban',N'Huyện Văn Bàn',N'Van Ban District',N'van_ban',7,N'10' UNION ALL
select 95,N'094',N'Điện Biên Phủ',N'Dien Bien Phu',N'Thành phố Điện Biên Phủ',N'Dien Bien Phu City',N'dien_bien_phu',4,N'11' UNION ALL
select 96,N'095',N'Mường Lay',N'Muong Lay',N'Thị xã Mường Lay',N'Muong Lay Town',N'muong_lay',6,N'11' UNION ALL
select 97,N'096',N'Mường Nhé',N'Muong Nhe',N'Huyện Mường Nhé',N'Muong Nhe District',N'muong_nhe',7,N'11' UNION ALL
select 98,N'097',N'Mường Chà',N'Muong Cha',N'Huyện Mường Chà',N'Muong Cha District',N'muong_cha',7,N'11' UNION ALL
select 99,N'098',N'Tủa Chùa',N'Tua Chua',N'Huyện Tủa Chùa',N'Tua Chua District',N'tua_chua',7,N'11' UNION ALL
select 100,N'099',N'Tuần Giáo',N'Tuan Giao',N'Huyện Tuần Giáo',N'Tuan Giao District',N'tuan_giao',7,N'11' UNION ALL
select 101,N'100',N'Điện Biên',N'Dien Bien',N'Huyện Điện Biên',N'Dien Bien District',N'dien_bien',7,N'11' UNION ALL
select 102,N'101',N'Điện Biên Đông',N'Dien Bien Dong',N'Huyện Điện Biên Đông',N'Dien Bien Dong District',N'dien_bien_dong',7,N'11' UNION ALL
select 103,N'102',N'Mường Ảng',N'Muong Ang',N'Huyện Mường Ảng',N'Muong Ang District',N'muong_ang',7,N'11' UNION ALL
select 104,N'103',N'Nậm Pồ',N'Nam Po',N'Huyện Nậm Pồ',N'Nam Po District',N'nam_po',7,N'11' UNION ALL
select 105,N'105',N'Lai Châu',N'Lai Chau',N'Thành phố Lai Châu',N'Lai Chau City',N'lai_chau',4,N'12' UNION ALL
select 106,N'106',N'Tam Đường',N'Tam Duong',N'Huyện Tam Đường',N'Tam Duong District',N'tam_duong',7,N'12' UNION ALL
select 107,N'107',N'Mường Tè',N'Muong Te',N'Huyện Mường Tè',N'Muong Te District',N'muong_te',7,N'12' UNION ALL
select 108,N'108',N'Sìn Hồ',N'Sin Ho',N'Huyện Sìn Hồ',N'Sin Ho District',N'sin_ho',7,N'12' UNION ALL
select 109,N'109',N'Phong Thổ',N'Phong Tho',N'Huyện Phong Thổ',N'Phong Tho District',N'phong_tho',7,N'12' UNION ALL
select 110,N'110',N'Than Uyên',N'Than Uyen',N'Huyện Than Uyên',N'Than Uyen District',N'than_uyen',7,N'12' UNION ALL
select 111,N'111',N'Tân Uyên',N'Tan Uyen',N'Huyện Tân Uyên',N'Tan Uyen District',N'tan_uyen',7,N'12' UNION ALL
select 112,N'112',N'Nậm Nhùn',N'Nam Nhun',N'Huyện Nậm Nhùn',N'Nam Nhun District',N'nam_nhun',7,N'12' UNION ALL
select 113,N'116',N'Sơn La',N'Son La',N'Thành phố Sơn La',N'Son La City',N'son_la',4,N'14' UNION ALL
select 114,N'118',N'Quỳnh Nhai',N'Quynh Nhai',N'Huyện Quỳnh Nhai',N'Quynh Nhai District',N'quynh_nhai',7,N'14' UNION ALL
select 115,N'119',N'Thuận Châu',N'Thuan Chau',N'Huyện Thuận Châu',N'Thuan Chau District',N'thuan_chau',7,N'14' UNION ALL
select 116,N'120',N'Mường La',N'Muong La',N'Huyện Mường La',N'Muong La District',N'muong_la',7,N'14' UNION ALL
select 117,N'121',N'Bắc Yên',N'Bac Yen',N'Huyện Bắc Yên',N'Bac Yen District',N'bac_yen',7,N'14' UNION ALL
select 118,N'122',N'Phù Yên',N'Phu Yen',N'Huyện Phù Yên',N'Phu Yen District',N'phu_yen',7,N'14' UNION ALL
select 119,N'123',N'Mộc Châu',N'Moc Chau',N'Huyện Mộc Châu',N'Moc Chau District',N'moc_chau',7,N'14' UNION ALL
select 120,N'124',N'Yên Châu',N'Yen Chau',N'Huyện Yên Châu',N'Yen Chau District',N'yen_chau',7,N'14' UNION ALL
select 121,N'125',N'Mai Sơn',N'Mai Son',N'Huyện Mai Sơn',N'Mai Son District',N'mai_son',7,N'14' UNION ALL
select 122,N'126',N'Sông Mã',N'Song Ma',N'Huyện Sông Mã',N'Song Ma District',N'song_ma',7,N'14' UNION ALL
select 123,N'127',N'Sốp Cộp',N'Sop Cop',N'Huyện Sốp Cộp',N'Sop Cop District',N'sop_cop',7,N'14' UNION ALL
select 124,N'128',N'Vân Hồ',N'Van Ho',N'Huyện Vân Hồ',N'Van Ho District',N'van_ho',7,N'14' UNION ALL
select 125,N'132',N'Yên Bái',N'Yen Bai',N'Thành phố Yên Bái',N'Yen Bai City',N'yen_bai',4,N'15' UNION ALL
select 126,N'133',N'Nghĩa Lộ',N'Nghia Lo',N'Thị xã Nghĩa Lộ',N'Nghia Lo Town',N'nghia_lo',6,N'15' UNION ALL
select 127,N'135',N'Lục Yên',N'Luc Yen',N'Huyện Lục Yên',N'Luc Yen District',N'luc_yen',7,N'15' UNION ALL
select 128,N'136',N'Văn Yên',N'Van Yen',N'Huyện Văn Yên',N'Van Yen District',N'van_yen',7,N'15' UNION ALL
select 129,N'137',N'Mù Căng Chải',N'Mu Cang Chai',N'Huyện Mù Căng Chải',N'Mu Cang Chai District',N'mu_cang_chai',7,N'15' UNION ALL
select 130,N'138',N'Trấn Yên',N'Tran Yen',N'Huyện Trấn Yên',N'Tran Yen District',N'tran_yen',7,N'15' UNION ALL
select 131,N'139',N'Trạm Tấu',N'Tram Tau',N'Huyện Trạm Tấu',N'Tram Tau District',N'tram_tau',7,N'15' UNION ALL
select 132,N'140',N'Văn Chấn',N'Van Chan',N'Huyện Văn Chấn',N'Van Chan District',N'van_chan',7,N'15' UNION ALL
select 133,N'141',N'Yên Bình',N'Yen Binh',N'Huyện Yên Bình',N'Yen Binh District',N'yen_binh',7,N'15' UNION ALL
select 134,N'148',N'Hòa Bình',N'Hoa Binh',N'Thành phố Hòa Bình',N'Hoa Binh City',N'hoa_binh',4,N'17' UNION ALL
select 135,N'150',N'Đà Bắc',N'Da Bac',N'Huyện Đà Bắc',N'Da Bac District',N'da_bac',7,N'17' UNION ALL
select 136,N'152',N'Lương Sơn',N'Luong Son',N'Huyện Lương Sơn',N'Luong Son District',N'luong_son',7,N'17' UNION ALL
select 137,N'153',N'Kim Bôi',N'Kim Boi',N'Huyện Kim Bôi',N'Kim Boi District',N'kim_boi',7,N'17' UNION ALL
select 138,N'154',N'Cao Phong',N'Cao Phong',N'Huyện Cao Phong',N'Cao Phong District',N'cao_phong',7,N'17' UNION ALL
select 139,N'155',N'Tân Lạc',N'Tan Lac',N'Huyện Tân Lạc',N'Tan Lac District',N'tan_lac',7,N'17' UNION ALL
select 140,N'156',N'Mai Châu',N'Mai Chau',N'Huyện Mai Châu',N'Mai Chau District',N'mai_chau',7,N'17' UNION ALL
select 141,N'157',N'Lạc Sơn',N'Lac Son',N'Huyện Lạc Sơn',N'Lac Son District',N'lac_son',7,N'17' UNION ALL
select 142,N'158',N'Yên Thủy',N'Yen Thuy',N'Huyện Yên Thủy',N'Yen Thuy District',N'yen_thuy',7,N'17' UNION ALL
select 143,N'159',N'Lạc Thủy',N'Lac Thuy',N'Huyện Lạc Thủy',N'Lac Thuy District',N'lac_thuy',7,N'17' UNION ALL
select 144,N'164',N'Thái Nguyên',N'Thai Nguyen',N'Thành phố Thái Nguyên',N'Thai Nguyen City',N'thai_nguyen',4,N'19' UNION ALL
select 145,N'165',N'Sông Công',N'Song Cong',N'Thành phố Sông Công',N'Song Cong City',N'song_cong',4,N'19' UNION ALL
select 146,N'167',N'Định Hóa',N'Dinh Hoa',N'Huyện Định Hóa',N'Dinh Hoa District',N'dinh_hoa',7,N'19' UNION ALL
select 147,N'168',N'Phú Lương',N'Phu Luong',N'Huyện Phú Lương',N'Phu Luong District',N'phu_luong',7,N'19' UNION ALL
select 148,N'169',N'Đồng Hỷ',N'Dong Hy',N'Huyện Đồng Hỷ',N'Dong Hy District',N'dong_hy',7,N'19' UNION ALL
select 149,N'170',N'Võ Nhai',N'Vo Nhai',N'Huyện Võ Nhai',N'Vo Nhai District',N'vo_nhai',7,N'19' UNION ALL
select 150,N'171',N'Đại Từ',N'Dai Tu',N'Huyện Đại Từ',N'Dai Tu District',N'dai_tu',7,N'19' UNION ALL
select 151,N'172',N'Phổ Yên',N'Pho Yen',N'Thành phố Phổ Yên',N'Pho Yen City',N'pho_yen',4,N'19' UNION ALL
select 152,N'173',N'Phú Bình',N'Phu Binh',N'Huyện Phú Bình',N'Phu Binh District',N'phu_binh',7,N'19' UNION ALL
select 153,N'178',N'Lạng Sơn',N'Lang Son',N'Thành phố Lạng Sơn',N'Lang Son City',N'lang_son',4,N'20' UNION ALL
select 154,N'180',N'Tràng Định',N'Trang Dinh',N'Huyện Tràng Định',N'Trang Dinh District',N'trang_dinh',7,N'20' UNION ALL
select 155,N'181',N'Bình Gia',N'Binh Gia',N'Huyện Bình Gia',N'Binh Gia District',N'binh_gia',7,N'20' UNION ALL
select 156,N'182',N'Văn Lãng',N'Van Lang',N'Huyện Văn Lãng',N'Van Lang District',N'van_lang',7,N'20' UNION ALL
select 157,N'183',N'Cao Lộc',N'Cao Loc',N'Huyện Cao Lộc',N'Cao Loc District',N'cao_loc',7,N'20' UNION ALL
select 158,N'184',N'Văn Quan',N'Van Quan',N'Huyện Văn Quan',N'Van Quan District',N'van_quan',7,N'20' UNION ALL
select 159,N'185',N'Bắc Sơn',N'Bac Son',N'Huyện Bắc Sơn',N'Bac Son District',N'bac_son',7,N'20' UNION ALL
select 160,N'186',N'Hữu Lũng',N'Huu Lung',N'Huyện Hữu Lũng',N'Huu Lung District',N'huu_lung',7,N'20' UNION ALL
select 161,N'187',N'Chi Lăng',N'Chi Lang',N'Huyện Chi Lăng',N'Chi Lang District',N'chi_lang',7,N'20' UNION ALL
select 162,N'188',N'Lộc Bình',N'Loc Binh',N'Huyện Lộc Bình',N'Loc Binh District',N'loc_binh',7,N'20' UNION ALL
select 163,N'189',N'Đình Lập',N'Dinh Lap',N'Huyện Đình Lập',N'Dinh Lap District',N'dinh_lap',7,N'20' UNION ALL
select 164,N'193',N'Hạ Long',N'Ha Long',N'Thành phố Hạ Long',N'Ha Long City',N'ha_long',4,N'22' UNION ALL
select 165,N'194',N'Móng Cái',N'Mong Cai',N'Thành phố Móng Cái',N'Mong Cai City',N'mong_cai',4,N'22' UNION ALL
select 166,N'195',N'Cẩm Phả',N'Cam Pha',N'Thành phố Cẩm Phả',N'Cam Pha City',N'cam_pha',4,N'22' UNION ALL
select 167,N'196',N'Uông Bí',N'Uong Bi',N'Thành phố Uông Bí',N'Uong Bi City',N'uong_bi',4,N'22' UNION ALL
select 168,N'198',N'Bình Liêu',N'Binh Lieu',N'Huyện Bình Liêu',N'Binh Lieu District',N'binh_lieu',7,N'22' UNION ALL
select 169,N'199',N'Tiên Yên',N'Tien Yen',N'Huyện Tiên Yên',N'Tien Yen District',N'tien_yen',7,N'22' UNION ALL
select 170,N'200',N'Đầm Hà',N'Dam Ha',N'Huyện Đầm Hà',N'Dam Ha District',N'dam_ha',7,N'22' UNION ALL
select 171,N'201',N'Hải Hà',N'Hai Ha',N'Huyện Hải Hà',N'Hai Ha District',N'hai_ha',7,N'22' UNION ALL
select 172,N'202',N'Ba Chẽ',N'Ba Che',N'Huyện Ba Chẽ',N'Ba Che District',N'ba_che',7,N'22' UNION ALL
select 173,N'203',N'Vân Đồn',N'Van Don',N'Huyện Vân Đồn',N'Van Don District',N'van_don',7,N'22' UNION ALL
select 174,N'205',N'Đông Triều',N'Dong Trieu',N'Thị xã Đông Triều',N'Dong Trieu Town',N'dong_trieu',6,N'22' UNION ALL
select 175,N'206',N'Quảng Yên',N'Quang Yen',N'Thị xã Quảng Yên',N'Quang Yen Town',N'quang_yen',6,N'22' UNION ALL
select 176,N'207',N'Cô Tô',N'Co To',N'Huyện Cô Tô',N'Co To District',N'co_to',7,N'22' UNION ALL
select 177,N'213',N'Bắc Giang',N'Bac Giang',N'Thành phố Bắc Giang',N'Bac Giang City',N'bac_giang',4,N'24' UNION ALL
select 178,N'215',N'Yên Thế',N'Yen The',N'Huyện Yên Thế',N'Yen The District',N'yen_the',7,N'24' UNION ALL
select 179,N'216',N'Tân Yên',N'Tan Yen',N'Huyện Tân Yên',N'Tan Yen District',N'tan_yen',7,N'24' UNION ALL
select 180,N'217',N'Lạng Giang',N'Lang Giang',N'Huyện Lạng Giang',N'Lang Giang District',N'lang_giang',7,N'24' UNION ALL
select 181,N'218',N'Lục Nam',N'Luc Nam',N'Huyện Lục Nam',N'Luc Nam District',N'luc_nam',7,N'24' UNION ALL
select 182,N'219',N'Lục Ngạn',N'Luc Ngan',N'Huyện Lục Ngạn',N'Luc Ngan District',N'luc_ngan',7,N'24' UNION ALL
select 183,N'220',N'Sơn Động',N'Son Dong',N'Huyện Sơn Động',N'Son Dong District',N'son_dong',7,N'24' UNION ALL
select 184,N'221',N'Yên Dũng',N'Yen Dung',N'Huyện Yên Dũng',N'Yen Dung District',N'yen_dung',7,N'24' UNION ALL
select 185,N'222',N'Việt Yên',N'Viet Yen',N'Huyện Việt Yên',N'Viet Yen District',N'viet_yen',7,N'24' UNION ALL
select 186,N'223',N'Hiệp Hòa',N'Hiep Hoa',N'Huyện Hiệp Hòa',N'Hiep Hoa District',N'hiep_hoa',7,N'24' UNION ALL
select 187,N'227',N'Việt Trì',N'Viet Tri',N'Thành phố Việt Trì',N'Viet Tri City',N'viet_tri',4,N'25' UNION ALL
select 188,N'228',N'Phú Thọ',N'Phu Tho',N'Thị xã Phú Thọ',N'Phu Tho Town',N'phu_tho',6,N'25' UNION ALL
select 189,N'230',N'Đoan Hùng',N'Doan Hung',N'Huyện Đoan Hùng',N'Doan Hung District',N'doan_hung',7,N'25' UNION ALL
select 190,N'231',N'Hạ Hoà',N'Ha Hoa',N'Huyện Hạ Hoà',N'Ha Hoa District',N'ha_hoa',7,N'25' UNION ALL
select 191,N'232',N'Thanh Ba',N'Thanh Ba',N'Huyện Thanh Ba',N'Thanh Ba District',N'thanh_ba',7,N'25' UNION ALL
select 192,N'233',N'Phù Ninh',N'Phu Ninh',N'Huyện Phù Ninh',N'Phu Ninh District',N'phu_ninh',7,N'25' UNION ALL
select 193,N'234',N'Yên Lập',N'Yen Lap',N'Huyện Yên Lập',N'Yen Lap District',N'yen_lap',7,N'25' UNION ALL
select 194,N'235',N'Cẩm Khê',N'Cam Khe',N'Huyện Cẩm Khê',N'Cam Khe District',N'cam_khe',7,N'25' UNION ALL
select 195,N'236',N'Tam Nông',N'Tam Nong',N'Huyện Tam Nông',N'Tam Nong District',N'tam_nong',7,N'25' UNION ALL
select 196,N'237',N'Lâm Thao',N'Lam Thao',N'Huyện Lâm Thao',N'Lam Thao District',N'lam_thao',7,N'25' UNION ALL
select 197,N'238',N'Thanh Sơn',N'Thanh Son',N'Huyện Thanh Sơn',N'Thanh Son District',N'thanh_son',7,N'25' UNION ALL
select 198,N'239',N'Thanh Thuỷ',N'Thanh Thuy',N'Huyện Thanh Thuỷ',N'Thanh Thuy District',N'thanh_thuy',7,N'25' UNION ALL
select 199,N'240',N'Tân Sơn',N'Tan Son',N'Huyện Tân Sơn',N'Tan Son District',N'tan_son',7,N'25' UNION ALL
select 200,N'243',N'Vĩnh Yên',N'Vinh Yen',N'Thành phố Vĩnh Yên',N'Vinh Yen City',N'vinh_yen',4,N'26' UNION ALL
select 201,N'244',N'Phúc Yên',N'Phuc Yen',N'Thành phố Phúc Yên',N'Phuc Yen City',N'phuc_yen',4,N'26' UNION ALL
select 202,N'246',N'Lập Thạch',N'Lap Thach',N'Huyện Lập Thạch',N'Lap Thach District',N'lap_thach',7,N'26' UNION ALL
select 203,N'247',N'Tam Dương',N'Tam Duong',N'Huyện Tam Dương',N'Tam Duong District',N'tam_duong',7,N'26' UNION ALL
select 204,N'248',N'Tam Đảo',N'Tam Dao',N'Huyện Tam Đảo',N'Tam Dao District',N'tam_dao',7,N'26' UNION ALL
select 205,N'249',N'Bình Xuyên',N'Binh Xuyen',N'Huyện Bình Xuyên',N'Binh Xuyen District',N'binh_xuyen',7,N'26' UNION ALL
select 206,N'251',N'Yên Lạc',N'Yen Lac',N'Huyện Yên Lạc',N'Yen Lac District',N'yen_lac',7,N'26' UNION ALL
select 207,N'252',N'Vĩnh Tường',N'Vinh Tuong',N'Huyện Vĩnh Tường',N'Vinh Tuong District',N'vinh_tuong',7,N'26' UNION ALL
select 208,N'253',N'Sông Lô',N'Song Lo',N'Huyện Sông Lô',N'Song Lo District',N'song_lo',7,N'26' UNION ALL
select 209,N'256',N'Bắc Ninh',N'Bac Ninh',N'Thành phố Bắc Ninh',N'Bac Ninh City',N'bac_ninh',4,N'27' UNION ALL
select 210,N'258',N'Yên Phong',N'Yen Phong',N'Huyện Yên Phong',N'Yen Phong District',N'yen_phong',7,N'27' UNION ALL
select 211,N'259',N'Quế Võ',N'Que Vo',N'Huyện Quế Võ',N'Que Vo District',N'que_vo',7,N'27' UNION ALL
select 212,N'260',N'Tiên Du',N'Tien Du',N'Huyện Tiên Du',N'Tien Du District',N'tien_du',7,N'27' UNION ALL
select 213,N'261',N'Từ Sơn',N'Tu Son',N'Thành phố Từ Sơn',N'Tu Son City',N'tu_son',4,N'27' UNION ALL
select 214,N'262',N'Thuận Thành',N'Thuan Thanh',N'Huyện Thuận Thành',N'Thuan Thanh District',N'thuan_thanh',7,N'27' UNION ALL
select 215,N'263',N'Gia Bình',N'Gia Binh',N'Huyện Gia Bình',N'Gia Binh District',N'gia_binh',7,N'27' UNION ALL
select 216,N'264',N'Lương Tài',N'Luong Tai',N'Huyện Lương Tài',N'Luong Tai District',N'luong_tai',7,N'27' UNION ALL
select 217,N'288',N'Hải Dương',N'Hai Duong',N'Thành phố Hải Dương',N'Hai Duong City',N'hai_duong',4,N'30' UNION ALL
select 218,N'290',N'Chí Linh',N'Chi Linh',N'Thành phố Chí Linh',N'Chi Linh City',N'chi_linh',4,N'30' UNION ALL
select 219,N'291',N'Nam Sách',N'Nam Sach',N'Huyện Nam Sách',N'Nam Sach District',N'nam_sach',7,N'30' UNION ALL
select 220,N'292',N'Kinh Môn',N'Kinh Mon',N'Thị xã Kinh Môn',N'Kinh Mon Town',N'kinh_mon',6,N'30' UNION ALL
select 221,N'293',N'Kim Thành',N'Kim Thanh',N'Huyện Kim Thành',N'Kim Thanh District',N'kim_thanh',7,N'30' UNION ALL
select 222,N'294',N'Thanh Hà',N'Thanh Ha',N'Huyện Thanh Hà',N'Thanh Ha District',N'thanh_ha',7,N'30' UNION ALL
select 223,N'295',N'Cẩm Giàng',N'Cam Giang',N'Huyện Cẩm Giàng',N'Cam Giang District',N'cam_giang',7,N'30' UNION ALL
select 224,N'296',N'Bình Giang',N'Binh Giang',N'Huyện Bình Giang',N'Binh Giang District',N'binh_giang',7,N'30' UNION ALL
select 225,N'297',N'Gia Lộc',N'Gia Loc',N'Huyện Gia Lộc',N'Gia Loc District',N'gia_loc',7,N'30' UNION ALL
select 226,N'298',N'Tứ Kỳ',N'Tu Ky',N'Huyện Tứ Kỳ',N'Tu Ky District',N'tu_ky',7,N'30' UNION ALL
select 227,N'299',N'Ninh Giang',N'Ninh Giang',N'Huyện Ninh Giang',N'Ninh Giang District',N'ninh_giang',7,N'30' UNION ALL
select 228,N'300',N'Thanh Miện',N'Thanh Mien',N'Huyện Thanh Miện',N'Thanh Mien District',N'thanh_mien',7,N'30' UNION ALL
select 229,N'303',N'Hồng Bàng',N'Hong Bang',N'Quận Hồng Bàng',N'Hong Bang District',N'hong_bang',5,N'31' UNION ALL
select 230,N'304',N'Ngô Quyền',N'Ngo Quyen',N'Quận Ngô Quyền',N'Ngo Quyen District',N'ngo_quyen',5,N'31' UNION ALL
select 231,N'305',N'Lê Chân',N'Le Chan',N'Quận Lê Chân',N'Le Chan District',N'le_chan',5,N'31' UNION ALL
select 232,N'306',N'Hải An',N'Hai An',N'Quận Hải An',N'Hai An District',N'hai_an',5,N'31' UNION ALL
select 233,N'307',N'Kiến An',N'Kien An',N'Quận Kiến An',N'Kien An District',N'kien_an',5,N'31' UNION ALL
select 234,N'308',N'Đồ Sơn',N'Do Son',N'Quận Đồ Sơn',N'Do Son District',N'do_son',5,N'31' UNION ALL
select 235,N'309',N'Dương Kinh',N'Duong Kinh',N'Quận Dương Kinh',N'Duong Kinh District',N'duong_kinh',5,N'31' UNION ALL
select 236,N'311',N'Thuỷ Nguyên',N'Thuy Nguyen',N'Huyện Thuỷ Nguyên',N'Thuy Nguyen District',N'thuy_nguyen',7,N'31' UNION ALL
select 237,N'312',N'An Dương',N'An Duong',N'Huyện An Dương',N'An Duong District',N'an_duong',7,N'31' UNION ALL
select 238,N'313',N'An Lão',N'An Lao',N'Huyện An Lão',N'An Lao District',N'an_lao',7,N'31' UNION ALL
select 239,N'314',N'Kiến Thuỵ',N'Kien Thuy',N'Huyện Kiến Thuỵ',N'Kien Thuy District',N'kien_thuy',7,N'31' UNION ALL
select 240,N'315',N'Tiên Lãng',N'Tien Lang',N'Huyện Tiên Lãng',N'Tien Lang District',N'tien_lang',7,N'31' UNION ALL
select 241,N'710',N'Gò Dầu',N'Go Dau',N'Huyện Gò Dầu',N'Go Dau District',N'go_dau',7,N'72' UNION ALL
select 242,N'316',N'Vĩnh Bảo',N'Vinh Bao',N'Huyện Vĩnh Bảo',N'Vinh Bao District',N'vinh_bao',7,N'31' UNION ALL
select 243,N'317',N'Cát Hải',N'Cat Hai',N'Huyện Cát Hải',N'Cat Hai District',N'cat_hai',7,N'31' UNION ALL
select 244,N'318',N'Bạch Long Vĩ',N'Bach Long Vi',N'Huyện Bạch Long Vĩ',N'Bach Long Vi District',N'bach_long_vi',7,N'31' UNION ALL
select 245,N'323',N'Hưng Yên',N'Hung Yen',N'Thành phố Hưng Yên',N'Hung Yen City',N'hung_yen',4,N'33' UNION ALL
select 246,N'325',N'Văn Lâm',N'Van Lam',N'Huyện Văn Lâm',N'Van Lam District',N'van_lam',7,N'33' UNION ALL
select 247,N'326',N'Văn Giang',N'Van Giang',N'Huyện Văn Giang',N'Van Giang District',N'van_giang',7,N'33' UNION ALL
select 248,N'327',N'Yên Mỹ',N'Yen My',N'Huyện Yên Mỹ',N'Yen My District',N'yen_my',7,N'33' UNION ALL
select 249,N'328',N'Mỹ Hào',N'My Hao',N'Thị xã Mỹ Hào',N'My Hao Town',N'my_hao',6,N'33' UNION ALL
select 250,N'329',N'Ân Thi',N'An Thi',N'Huyện Ân Thi',N'An Thi District',N'an_thi',7,N'33' UNION ALL
select 251,N'330',N'Khoái Châu',N'Khoai Chau',N'Huyện Khoái Châu',N'Khoai Chau District',N'khoai_chau',7,N'33' UNION ALL
select 252,N'331',N'Kim Động',N'Kim Dong',N'Huyện Kim Động',N'Kim Dong District',N'kim_dong',7,N'33' UNION ALL
select 253,N'332',N'Tiên Lữ',N'Tien Lu',N'Huyện Tiên Lữ',N'Tien Lu District',N'tien_lu',7,N'33' UNION ALL
select 254,N'333',N'Phù Cừ',N'Phu Cu',N'Huyện Phù Cừ',N'Phu Cu District',N'phu_cu',7,N'33' UNION ALL
select 255,N'336',N'Thái Bình',N'Thai Binh',N'Thành phố Thái Bình',N'Thai Binh City',N'thai_binh',4,N'34' UNION ALL
select 256,N'338',N'Quỳnh Phụ',N'Quynh Phu',N'Huyện Quỳnh Phụ',N'Quynh Phu District',N'quynh_phu',7,N'34' UNION ALL
select 257,N'339',N'Hưng Hà',N'Hung Ha',N'Huyện Hưng Hà',N'Hung Ha District',N'hung_ha',7,N'34' UNION ALL
select 258,N'340',N'Đông Hưng',N'Dong Hung',N'Huyện Đông Hưng',N'Dong Hung District',N'dong_hung',7,N'34' UNION ALL
select 259,N'341',N'Thái Thụy',N'Thai Thuy',N'Huyện Thái Thụy',N'Thai Thuy District',N'thai_thuy',7,N'34' UNION ALL
select 260,N'342',N'Tiền Hải',N'Tien Hai',N'Huyện Tiền Hải',N'Tien Hai District',N'tien_hai',7,N'34' UNION ALL
select 261,N'343',N'Kiến Xương',N'Kien Xuong',N'Huyện Kiến Xương',N'Kien Xuong District',N'kien_xuong',7,N'34' UNION ALL
select 262,N'344',N'Vũ Thư',N'Vu Thu',N'Huyện Vũ Thư',N'Vu Thu District',N'vu_thu',7,N'34' UNION ALL
select 263,N'347',N'Phủ Lý',N'Phu Ly',N'Thành phố Phủ Lý',N'Phu Ly City',N'phu_ly',4,N'35' UNION ALL
select 264,N'349',N'Duy Tiên',N'Duy Tien',N'Thị xã Duy Tiên',N'Duy Tien Town',N'duy_tien',6,N'35' UNION ALL
select 265,N'350',N'Kim Bảng',N'Kim Bang',N'Huyện Kim Bảng',N'Kim Bang District',N'kim_bang',7,N'35' UNION ALL
select 266,N'351',N'Thanh Liêm',N'Thanh Liem',N'Huyện Thanh Liêm',N'Thanh Liem District',N'thanh_liem',7,N'35' UNION ALL
select 267,N'352',N'Bình Lục',N'Binh Luc',N'Huyện Bình Lục',N'Binh Luc District',N'binh_luc',7,N'35' UNION ALL
select 268,N'353',N'Lý Nhân',N'Ly Nhan',N'Huyện Lý Nhân',N'Ly Nhan District',N'ly_nhan',7,N'35' UNION ALL
select 269,N'356',N'Nam Định',N'Nam Dinh',N'Thành phố Nam Định',N'Nam Dinh City',N'nam_dinh',4,N'36' UNION ALL
select 270,N'358',N'Mỹ Lộc',N'My Loc',N'Huyện Mỹ Lộc',N'My Loc District',N'my_loc',7,N'36' UNION ALL
select 271,N'359',N'Vụ Bản',N'Vu Ban',N'Huyện Vụ Bản',N'Vu Ban District',N'vu_ban',7,N'36' UNION ALL
select 272,N'360',N'Ý Yên',N'Y Yen',N'Huyện Ý Yên',N'Y Yen District',N'y_yen',7,N'36' UNION ALL
select 273,N'361',N'Nghĩa Hưng',N'Nghia Hung',N'Huyện Nghĩa Hưng',N'Nghia Hung District',N'nghia_hung',7,N'36' UNION ALL
select 274,N'362',N'Nam Trực',N'Nam Truc',N'Huyện Nam Trực',N'Nam Truc District',N'nam_truc',7,N'36' UNION ALL
select 275,N'363',N'Trực Ninh',N'Truc Ninh',N'Huyện Trực Ninh',N'Truc Ninh District',N'truc_ninh',7,N'36' UNION ALL
select 276,N'364',N'Xuân Trường',N'Xuan Truong',N'Huyện Xuân Trường',N'Xuan Truong District',N'xuan_truong',7,N'36' UNION ALL
select 277,N'365',N'Giao Thủy',N'Giao Thuy',N'Huyện Giao Thủy',N'Giao Thuy District',N'giao_thuy',7,N'36' UNION ALL
select 278,N'366',N'Hải Hậu',N'Hai Hau',N'Huyện Hải Hậu',N'Hai Hau District',N'hai_hau',7,N'36' UNION ALL
select 279,N'369',N'Ninh Bình',N'Ninh Binh',N'Thành phố Ninh Bình',N'Ninh Binh City',N'ninh_binh',4,N'37' UNION ALL
select 280,N'370',N'Tam Điệp',N'Tam Diep',N'Thành phố Tam Điệp',N'Tam Diep City',N'tam_diep',4,N'37' UNION ALL
select 281,N'372',N'Nho Quan',N'Nho Quan',N'Huyện Nho Quan',N'Nho Quan District',N'nho_quan',7,N'37' UNION ALL
select 282,N'373',N'Gia Viễn',N'Gia Vien',N'Huyện Gia Viễn',N'Gia Vien District',N'gia_vien',7,N'37' UNION ALL
select 283,N'374',N'Hoa Lư',N'Hoa Lu',N'Huyện Hoa Lư',N'Hoa Lu District',N'hoa_lu',7,N'37' UNION ALL
select 284,N'375',N'Yên Khánh',N'Yen Khanh',N'Huyện Yên Khánh',N'Yen Khanh District',N'yen_khanh',7,N'37' UNION ALL
select 285,N'376',N'Kim Sơn',N'Kim Son',N'Huyện Kim Sơn',N'Kim Son District',N'kim_son',7,N'37' UNION ALL
select 286,N'377',N'Yên Mô',N'Yen Mo',N'Huyện Yên Mô',N'Yen Mo District',N'yen_mo',7,N'37' UNION ALL
select 287,N'380',N'Thanh Hóa',N'Thanh Hoa',N'Thành phố Thanh Hóa',N'Thanh Hoa City',N'thanh_hoa',4,N'38' UNION ALL
select 288,N'381',N'Bỉm Sơn',N'Bim Son',N'Thị xã Bỉm Sơn',N'Bim Son Town',N'bim_son',6,N'38' UNION ALL
select 289,N'382',N'Sầm Sơn',N'Sam Son',N'Thành phố Sầm Sơn',N'Sam Son City',N'sam_son',4,N'38' UNION ALL
select 290,N'384',N'Mường Lát',N'Muong Lat',N'Huyện Mường Lát',N'Muong Lat District',N'muong_lat',7,N'38' UNION ALL
select 291,N'385',N'Quan Hóa',N'Quan Hoa',N'Huyện Quan Hóa',N'Quan Hoa District',N'quan_hoa',7,N'38' UNION ALL
select 292,N'386',N'Bá Thước',N'Ba Thuoc',N'Huyện Bá Thước',N'Ba Thuoc District',N'ba_thuoc',7,N'38' UNION ALL
select 293,N'387',N'Quan Sơn',N'Quan Son',N'Huyện Quan Sơn',N'Quan Son District',N'quan_son',7,N'38' UNION ALL
select 294,N'388',N'Lang Chánh',N'Lang Chanh',N'Huyện Lang Chánh',N'Lang Chanh District',N'lang_chanh',7,N'38' UNION ALL
select 295,N'389',N'Ngọc Lặc',N'Ngoc Lac',N'Huyện Ngọc Lặc',N'Ngoc Lac District',N'ngoc_lac',7,N'38' UNION ALL
select 296,N'390',N'Cẩm Thủy',N'Cam Thuy',N'Huyện Cẩm Thủy',N'Cam Thuy District',N'cam_thuy',7,N'38' UNION ALL
select 297,N'391',N'Thạch Thành',N'Thach Thanh',N'Huyện Thạch Thành',N'Thach Thanh District',N'thach_thanh',7,N'38' UNION ALL
select 298,N'392',N'Hà Trung',N'Ha Trung',N'Huyện Hà Trung',N'Ha Trung District',N'ha_trung',7,N'38' UNION ALL
select 299,N'393',N'Vĩnh Lộc',N'Vinh Loc',N'Huyện Vĩnh Lộc',N'Vinh Loc District',N'vinh_loc',7,N'38' UNION ALL
select 300,N'394',N'Yên Định',N'Yen Dinh',N'Huyện Yên Định',N'Yen Dinh District',N'yen_dinh',7,N'38' UNION ALL
select 301,N'395',N'Thọ Xuân',N'Tho Xuan',N'Huyện Thọ Xuân',N'Tho Xuan District',N'tho_xuan',7,N'38' UNION ALL
select 302,N'396',N'Thường Xuân',N'Thuong Xuan',N'Huyện Thường Xuân',N'Thuong Xuan District',N'thuong_xuan',7,N'38' UNION ALL
select 303,N'397',N'Triệu Sơn',N'Trieu Son',N'Huyện Triệu Sơn',N'Trieu Son District',N'trieu_son',7,N'38' UNION ALL
select 304,N'398',N'Thiệu Hóa',N'Thieu Hoa',N'Huyện Thiệu Hóa',N'Thieu Hoa District',N'thieu_hoa',7,N'38' UNION ALL
select 305,N'399',N'Hoằng Hóa',N'Hoang Hoa',N'Huyện Hoằng Hóa',N'Hoang Hoa District',N'hoang_hoa',7,N'38' UNION ALL
select 306,N'400',N'Hậu Lộc',N'Hau Loc',N'Huyện Hậu Lộc',N'Hau Loc District',N'hau_loc',7,N'38' UNION ALL
select 307,N'401',N'Nga Sơn',N'Nga Son',N'Huyện Nga Sơn',N'Nga Son District',N'nga_son',7,N'38' UNION ALL
select 308,N'402',N'Như Xuân',N'Nhu Xuan',N'Huyện Như Xuân',N'Nhu Xuan District',N'nhu_xuan',7,N'38' UNION ALL
select 309,N'403',N'Như Thanh',N'Nhu Thanh',N'Huyện Như Thanh',N'Nhu Thanh District',N'nhu_thanh',7,N'38' UNION ALL
select 310,N'404',N'Nông Cống',N'Nong Cong',N'Huyện Nông Cống',N'Nong Cong District',N'nong_cong',7,N'38' UNION ALL
select 311,N'405',N'Đông Sơn',N'Dong Son',N'Huyện Đông Sơn',N'Dong Son District',N'dong_son',7,N'38' UNION ALL
select 312,N'406',N'Quảng Xương',N'Quang Xuong',N'Huyện Quảng Xương',N'Quang Xuong District',N'quang_xuong',7,N'38' UNION ALL
select 313,N'407',N'Nghi Sơn',N'Nghi Son',N'Thị xã Nghi Sơn',N'Nghi Son Town',N'nghi_son',6,N'38' UNION ALL
select 314,N'412',N'Vinh',N'Vinh',N'Thành phố Vinh',N'Vinh City',N'vinh',4,N'40' UNION ALL
select 315,N'413',N'Cửa Lò',N'Cua Lo',N'Thị xã Cửa Lò',N'Cua Lo Town',N'cua_lo',6,N'40' UNION ALL
select 316,N'414',N'Thái Hoà',N'Thai Hoa',N'Thị xã Thái Hoà',N'Thai Hoa Town',N'thai_hoa',6,N'40' UNION ALL
select 317,N'415',N'Quế Phong',N'Que Phong',N'Huyện Quế Phong',N'Que Phong District',N'que_phong',7,N'40' UNION ALL
select 318,N'416',N'Quỳ Châu',N'Quy Chau',N'Huyện Quỳ Châu',N'Quy Chau District',N'quy_chau',7,N'40' UNION ALL
select 319,N'417',N'Kỳ Sơn',N'Ky Son',N'Huyện Kỳ Sơn',N'Ky Son District',N'ky_son',7,N'40' UNION ALL
select 320,N'418',N'Tương Dương',N'Tuong Duong',N'Huyện Tương Dương',N'Tuong Duong District',N'tuong_duong',7,N'40' UNION ALL
select 321,N'419',N'Nghĩa Đàn',N'Nghia Dan',N'Huyện Nghĩa Đàn',N'Nghia Dan District',N'nghia_dan',7,N'40' UNION ALL
select 322,N'420',N'Quỳ Hợp',N'Quy Hop',N'Huyện Quỳ Hợp',N'Quy Hop District',N'quy_hop',7,N'40' UNION ALL
select 323,N'421',N'Quỳnh Lưu',N'Quynh Luu',N'Huyện Quỳnh Lưu',N'Quynh Luu District',N'quynh_luu',7,N'40' UNION ALL
select 324,N'422',N'Con Cuông',N'Con Cuong',N'Huyện Con Cuông',N'Con Cuong District',N'con_cuong',7,N'40' UNION ALL
select 325,N'423',N'Tân Kỳ',N'Tan Ky',N'Huyện Tân Kỳ',N'Tan Ky District',N'tan_ky',7,N'40' UNION ALL
select 326,N'424',N'Anh Sơn',N'Anh Son',N'Huyện Anh Sơn',N'Anh Son District',N'anh_son',7,N'40' UNION ALL
select 327,N'425',N'Diễn Châu',N'Dien Chau',N'Huyện Diễn Châu',N'Dien Chau District',N'dien_chau',7,N'40' UNION ALL
select 328,N'426',N'Yên Thành',N'Yen Thanh',N'Huyện Yên Thành',N'Yen Thanh District',N'yen_thanh',7,N'40' UNION ALL
select 329,N'427',N'Đô Lương',N'Do Luong',N'Huyện Đô Lương',N'Do Luong District',N'do_luong',7,N'40' UNION ALL
select 330,N'428',N'Thanh Chương',N'Thanh Chuong',N'Huyện Thanh Chương',N'Thanh Chuong District',N'thanh_chuong',7,N'40' UNION ALL
select 331,N'429',N'Nghi Lộc',N'Nghi Loc',N'Huyện Nghi Lộc',N'Nghi Loc District',N'nghi_loc',7,N'40' UNION ALL
select 332,N'430',N'Nam Đàn',N'Nam Dan',N'Huyện Nam Đàn',N'Nam Dan District',N'nam_dan',7,N'40' UNION ALL
select 333,N'431',N'Hưng Nguyên',N'Hung Nguyen',N'Huyện Hưng Nguyên',N'Hung Nguyen District',N'hung_nguyen',7,N'40' UNION ALL
select 334,N'432',N'Hoàng Mai',N'Hoang Mai',N'Thị xã Hoàng Mai',N'Hoang Mai Town',N'hoang_mai',6,N'40' UNION ALL
select 335,N'436',N'Hà Tĩnh',N'Ha Tinh',N'Thành phố Hà Tĩnh',N'Ha Tinh City',N'ha_tinh',4,N'42' UNION ALL
select 336,N'437',N'Hồng Lĩnh',N'Hong Linh',N'Thị xã Hồng Lĩnh',N'Hong Linh Town',N'hong_linh',6,N'42' UNION ALL
select 337,N'439',N'Hương Sơn',N'Huong Son',N'Huyện Hương Sơn',N'Huong Son District',N'huong_son',7,N'42' UNION ALL
select 338,N'440',N'Đức Thọ',N'Duc Tho',N'Huyện Đức Thọ',N'Duc Tho District',N'duc_tho',7,N'42' UNION ALL
select 339,N'441',N'Vũ Quang',N'Vu Quang',N'Huyện Vũ Quang',N'Vu Quang District',N'vu_quang',7,N'42' UNION ALL
select 340,N'442',N'Nghi Xuân',N'Nghi Xuan',N'Huyện Nghi Xuân',N'Nghi Xuan District',N'nghi_xuan',7,N'42' UNION ALL
select 341,N'443',N'Can Lộc',N'Can Loc',N'Huyện Can Lộc',N'Can Loc District',N'can_loc',7,N'42' UNION ALL
select 342,N'444',N'Hương Khê',N'Huong Khe',N'Huyện Hương Khê',N'Huong Khe District',N'huong_khe',7,N'42' UNION ALL
select 343,N'445',N'Thạch Hà',N'Thach Ha',N'Huyện Thạch Hà',N'Thach Ha District',N'thach_ha',7,N'42' UNION ALL
select 344,N'446',N'Cẩm Xuyên',N'Cam Xuyen',N'Huyện Cẩm Xuyên',N'Cam Xuyen District',N'cam_xuyen',7,N'42' UNION ALL
select 345,N'447',N'Kỳ Anh',N'Ky Anh',N'Huyện Kỳ Anh',N'Ky Anh District',N'ky_anh',7,N'42' UNION ALL
select 346,N'448',N'Lộc Hà',N'Loc Ha',N'Huyện Lộc Hà',N'Loc Ha District',N'loc_ha',7,N'42' UNION ALL
select 347,N'449',N'Kỳ Anh',N'Ky Anh',N'Thị xã Kỳ Anh',N'Ky Anh Town',N'ky_anh',6,N'42' UNION ALL
select 348,N'450',N'Đồng Hới',N'Dong Hoi',N'Thành phố Đồng Hới',N'Dong Hoi City',N'dong_hoi',4,N'44' UNION ALL
select 349,N'452',N'Minh Hóa',N'Minh Hoa',N'Huyện Minh Hóa',N'Minh Hoa District',N'minh_hoa',7,N'44' UNION ALL
select 350,N'453',N'Tuyên Hóa',N'Tuyen Hoa',N'Huyện Tuyên Hóa',N'Tuyen Hoa District',N'tuyen_hoa',7,N'44' UNION ALL
select 351,N'454',N'Quảng Trạch',N'Quang Trach',N'Huyện Quảng Trạch',N'Quang Trach District',N'quang_trach',7,N'44' UNION ALL
select 352,N'455',N'Bố Trạch',N'Bo Trach',N'Huyện Bố Trạch',N'Bo Trach District',N'bo_trach',7,N'44' UNION ALL
select 353,N'456',N'Quảng Ninh',N'Quang Ninh',N'Huyện Quảng Ninh',N'Quang Ninh District',N'quang_ninh',7,N'44' UNION ALL
select 354,N'457',N'Lệ Thủy',N'Le Thuy',N'Huyện Lệ Thủy',N'Le Thuy District',N'le_thuy',7,N'44' UNION ALL
select 355,N'458',N'Ba Đồn',N'Ba Don',N'Thị xã Ba Đồn',N'Ba Don Town',N'ba_don',6,N'44' UNION ALL
select 356,N'461',N'Đông Hà',N'Dong Ha',N'Thành phố Đông Hà',N'Dong Ha City',N'dong_ha',4,N'45' UNION ALL
select 357,N'462',N'Quảng Trị',N'Quang Tri',N'Thị xã Quảng Trị',N'Quang Tri Town',N'quang_tri',6,N'45' UNION ALL
select 358,N'464',N'Vĩnh Linh',N'Vinh Linh',N'Huyện Vĩnh Linh',N'Vinh Linh District',N'vinh_linh',7,N'45' UNION ALL
select 359,N'465',N'Hướng Hóa',N'Huong Hoa',N'Huyện Hướng Hóa',N'Huong Hoa District',N'huong_hoa',7,N'45' UNION ALL
select 360,N'466',N'Gio Linh',N'Gio Linh',N'Huyện Gio Linh',N'Gio Linh District',N'gio_linh',7,N'45' UNION ALL
select 361,N'467',N'Đa Krông',N'Da Krong',N'Huyện Đa Krông',N'Da Krong District',N'da_krong',7,N'45' UNION ALL
select 362,N'468',N'Cam Lộ',N'Cam Lo',N'Huyện Cam Lộ',N'Cam Lo District',N'cam_lo',7,N'45' UNION ALL
select 363,N'469',N'Triệu Phong',N'Trieu Phong',N'Huyện Triệu Phong',N'Trieu Phong District',N'trieu_phong',7,N'45' UNION ALL
select 364,N'470',N'Hải Lăng',N'Hai Lang',N'Huyện Hải Lăng',N'Hai Lang District',N'hai_lang',7,N'45' UNION ALL
select 365,N'471',N'Cồn Cỏ',N'Con Co',N'Huyện Cồn Cỏ',N'Con Co District',N'con_co',7,N'45' UNION ALL
select 366,N'474',N'Huế',N'Hue',N'Thành phố Huế',N'Hue City',N'hue',4,N'46' UNION ALL
select 367,N'476',N'Phong Điền',N'Phong Dien',N'Huyện Phong Điền',N'Phong Dien District',N'phong_dien',7,N'46' UNION ALL
select 368,N'477',N'Quảng Điền',N'Quang Dien',N'Huyện Quảng Điền',N'Quang Dien District',N'quang_dien',7,N'46' UNION ALL
select 369,N'478',N'Phú Vang',N'Phu Vang',N'Huyện Phú Vang',N'Phu Vang District',N'phu_vang',7,N'46' UNION ALL
select 370,N'479',N'Hương Thủy',N'Huong Thuy',N'Thị xã Hương Thủy',N'Huong Thuy Town',N'huong_thuy',6,N'46' UNION ALL
select 371,N'480',N'Hương Trà',N'Huong Tra',N'Thị xã Hương Trà',N'Huong Tra Town',N'huong_tra',6,N'46' UNION ALL
select 372,N'481',N'A Lưới',N'A Luoi',N'Huyện A Lưới',N'A Luoi District',N'a_luoi',7,N'46' UNION ALL
select 373,N'482',N'Phú Lộc',N'Phu Loc',N'Huyện Phú Lộc',N'Phu Loc District',N'phu_loc',7,N'46' UNION ALL
select 374,N'483',N'Nam Đông',N'Nam Dong',N'Huyện Nam Đông',N'Nam Dong District',N'nam_dong',7,N'46' UNION ALL
select 375,N'490',N'Liên Chiểu',N'Lien Chieu',N'Quận Liên Chiểu',N'Lien Chieu District',N'lien_chieu',5,N'48' UNION ALL
select 376,N'491',N'Thanh Khê',N'Thanh Khe',N'Quận Thanh Khê',N'Thanh Khe District',N'thanh_khe',5,N'48' UNION ALL
select 377,N'492',N'Hải Châu',N'Hai Chau',N'Quận Hải Châu',N'Hai Chau District',N'hai_chau',5,N'48' UNION ALL
select 378,N'493',N'Sơn Trà',N'Son Tra',N'Quận Sơn Trà',N'Son Tra District',N'son_tra',5,N'48' UNION ALL
select 379,N'494',N'Ngũ Hành Sơn',N'Ngu Hanh Son',N'Quận Ngũ Hành Sơn',N'Ngu Hanh Son District',N'ngu_hanh_son',5,N'48' UNION ALL
select 380,N'495',N'Cẩm Lệ',N'Cam Le',N'Quận Cẩm Lệ',N'Cam Le District',N'cam_le',5,N'48' UNION ALL
select 381,N'497',N'Hòa Vang',N'Hoa Vang',N'Huyện Hòa Vang',N'Hoa Vang District',N'hoa_vang',7,N'48' UNION ALL
select 382,N'498',N'Hoàng Sa',N'Hoang Sa',N'Huyện Hoàng Sa',N'Hoang Sa District',N'hoang_sa',7,N'48' UNION ALL
select 383,N'502',N'Tam Kỳ',N'Tam Ky',N'Thành phố Tam Kỳ',N'Tam Ky City',N'tam_ky',4,N'49' UNION ALL
select 384,N'503',N'Hội An',N'Hoi An',N'Thành phố Hội An',N'Hoi An City',N'hoi_an',4,N'49' UNION ALL
select 385,N'504',N'Tây Giang',N'Tay Giang',N'Huyện Tây Giang',N'Tay Giang District',N'tay_giang',7,N'49' UNION ALL
select 386,N'505',N'Đông Giang',N'Dong Giang',N'Huyện Đông Giang',N'Dong Giang District',N'dong_giang',7,N'49' UNION ALL
select 387,N'506',N'Đại Lộc',N'Dai Loc',N'Huyện Đại Lộc',N'Dai Loc District',N'dai_loc',7,N'49' UNION ALL
select 388,N'507',N'Điện Bàn',N'Dien Ban',N'Thị xã Điện Bàn',N'Dien Ban Town',N'dien_ban',6,N'49' UNION ALL
select 389,N'508',N'Duy Xuyên',N'Duy Xuyen',N'Huyện Duy Xuyên',N'Duy Xuyen District',N'duy_xuyen',7,N'49' UNION ALL
select 390,N'509',N'Quế Sơn',N'Que Son',N'Huyện Quế Sơn',N'Que Son District',N'que_son',7,N'49' UNION ALL
select 391,N'510',N'Nam Giang',N'Nam Giang',N'Huyện Nam Giang',N'Nam Giang District',N'nam_giang',7,N'49' UNION ALL
select 392,N'511',N'Phước Sơn',N'Phuoc Son',N'Huyện Phước Sơn',N'Phuoc Son District',N'phuoc_son',7,N'49' UNION ALL
select 393,N'512',N'Hiệp Đức',N'Hiep Duc',N'Huyện Hiệp Đức',N'Hiep Duc District',N'hiep_duc',7,N'49' UNION ALL
select 394,N'513',N'Thăng Bình',N'Thang Binh',N'Huyện Thăng Bình',N'Thang Binh District',N'thang_binh',7,N'49' UNION ALL
select 395,N'514',N'Tiên Phước',N'Tien Phuoc',N'Huyện Tiên Phước',N'Tien Phuoc District',N'tien_phuoc',7,N'49' UNION ALL
select 396,N'515',N'Bắc Trà My',N'Bac Tra My',N'Huyện Bắc Trà My',N'Bac Tra My District',N'bac_tra_my',7,N'49' UNION ALL
select 397,N'516',N'Nam Trà My',N'Nam Tra My',N'Huyện Nam Trà My',N'Nam Tra My District',N'nam_tra_my',7,N'49' UNION ALL
select 398,N'517',N'Núi Thành',N'Nui Thanh',N'Huyện Núi Thành',N'Nui Thanh District',N'nui_thanh',7,N'49' UNION ALL
select 399,N'518',N'Phú Ninh',N'Phu Ninh',N'Huyện Phú Ninh',N'Phu Ninh District',N'phu_ninh',7,N'49' UNION ALL
select 400,N'519',N'Nông Sơn',N'Nong Son',N'Huyện Nông Sơn',N'Nong Son District',N'nong_son',7,N'49' UNION ALL
select 401,N'522',N'Quảng Ngãi',N'Quang Ngai',N'Thành phố Quảng Ngãi',N'Quang Ngai City',N'quang_ngai',4,N'51' UNION ALL
select 402,N'524',N'Bình Sơn',N'Binh Son',N'Huyện Bình Sơn',N'Binh Son District',N'binh_son',7,N'51' UNION ALL
select 403,N'525',N'Trà Bồng',N'Tra Bong',N'Huyện Trà Bồng',N'Tra Bong District',N'tra_bong',7,N'51' UNION ALL
select 404,N'527',N'Sơn Tịnh',N'Son Tinh',N'Huyện Sơn Tịnh',N'Son Tinh District',N'son_tinh',7,N'51' UNION ALL
select 405,N'528',N'Tư Nghĩa',N'Tu Nghia',N'Huyện Tư Nghĩa',N'Tu Nghia District',N'tu_nghia',7,N'51' UNION ALL
select 406,N'529',N'Sơn Hà',N'Son Ha',N'Huyện Sơn Hà',N'Son Ha District',N'son_ha',7,N'51' UNION ALL
select 407,N'530',N'Sơn Tây',N'Son Tay',N'Huyện Sơn Tây',N'Son Tay District',N'son_tay',7,N'51' UNION ALL
select 408,N'531',N'Minh Long',N'Minh Long',N'Huyện Minh Long',N'Minh Long District',N'minh_long',7,N'51' UNION ALL
select 409,N'532',N'Nghĩa Hành',N'Nghia Hanh',N'Huyện Nghĩa Hành',N'Nghia Hanh District',N'nghia_hanh',7,N'51' UNION ALL
select 410,N'533',N'Mộ Đức',N'Mo Duc',N'Huyện Mộ Đức',N'Mo Duc District',N'mo_duc',7,N'51' UNION ALL
select 411,N'534',N'Đức Phổ',N'Duc Pho',N'Thị xã Đức Phổ',N'Duc Pho Town',N'duc_pho',6,N'51' UNION ALL
select 412,N'535',N'Ba Tơ',N'Ba To',N'Huyện Ba Tơ',N'Ba To District',N'ba_to',7,N'51' UNION ALL
select 413,N'536',N'Lý Sơn',N'Ly Son',N'Huyện Lý Sơn',N'Ly Son District',N'ly_son',7,N'51' UNION ALL
select 414,N'540',N'Quy Nhơn',N'Quy Nhon',N'Thành phố Quy Nhơn',N'Quy Nhon City',N'quy_nhon',4,N'52' UNION ALL
select 415,N'542',N'An Lão',N'An Lao',N'Huyện An Lão',N'An Lao District',N'an_lao',7,N'52' UNION ALL
select 416,N'543',N'Hoài Nhơn',N'Hoai Nhon',N'Thị xã Hoài Nhơn',N'Hoai Nhon Town',N'hoai_nhon',6,N'52' UNION ALL
select 417,N'544',N'Hoài Ân',N'Hoai An',N'Huyện Hoài Ân',N'Hoai An District',N'hoai_an',7,N'52' UNION ALL
select 418,N'545',N'Phù Mỹ',N'Phu My',N'Huyện Phù Mỹ',N'Phu My District',N'phu_my',7,N'52' UNION ALL
select 419,N'546',N'Vĩnh Thạnh',N'Vinh Thanh',N'Huyện Vĩnh Thạnh',N'Vinh Thanh District',N'vinh_thanh',7,N'52' UNION ALL
select 420,N'547',N'Tây Sơn',N'Tay Son',N'Huyện Tây Sơn',N'Tay Son District',N'tay_son',7,N'52' UNION ALL
select 421,N'548',N'Phù Cát',N'Phu Cat',N'Huyện Phù Cát',N'Phu Cat District',N'phu_cat',7,N'52' UNION ALL
select 422,N'549',N'An Nhơn',N'An Nhon',N'Thị xã An Nhơn',N'An Nhon Town',N'an_nhon',6,N'52' UNION ALL
select 423,N'550',N'Tuy Phước',N'Tuy Phuoc',N'Huyện Tuy Phước',N'Tuy Phuoc District',N'tuy_phuoc',7,N'52' UNION ALL
select 424,N'551',N'Vân Canh',N'Van Canh',N'Huyện Vân Canh',N'Van Canh District',N'van_canh',7,N'52' UNION ALL
select 425,N'555',N'Tuy Hoà',N'Tuy Hoa',N'Thành phố Tuy Hoà',N'Tuy Hoa City',N'tuy_hoa',4,N'54' UNION ALL
select 426,N'557',N'Sông Cầu',N'Song Cau',N'Thị xã Sông Cầu',N'Song Cau Town',N'song_cau',6,N'54' UNION ALL
select 427,N'558',N'Đồng Xuân',N'Dong Xuan',N'Huyện Đồng Xuân',N'Dong Xuan District',N'dong_xuan',7,N'54' UNION ALL
select 428,N'559',N'Tuy An',N'Tuy An',N'Huyện Tuy An',N'Tuy An District',N'tuy_an',7,N'54' UNION ALL
select 429,N'560',N'Sơn Hòa',N'Son Hoa',N'Huyện Sơn Hòa',N'Son Hoa District',N'son_hoa',7,N'54' UNION ALL
select 430,N'561',N'Sông Hinh',N'Song Hinh',N'Huyện Sông Hinh',N'Song Hinh District',N'song_hinh',7,N'54' UNION ALL
select 431,N'562',N'Tây Hoà',N'Tay Hoa',N'Huyện Tây Hoà',N'Tay Hoa District',N'tay_hoa',7,N'54' UNION ALL
select 432,N'563',N'Phú Hoà',N'Phu Hoa',N'Huyện Phú Hoà',N'Phu Hoa District',N'phu_hoa',7,N'54' UNION ALL
select 433,N'564',N'Đông Hòa',N'Dong Hoa',N'Thị xã Đông Hòa',N'Dong Hoa Town',N'dong_hoa',6,N'54' UNION ALL
select 434,N'568',N'Nha Trang',N'Nha Trang',N'Thành phố Nha Trang',N'Nha Trang City',N'nha_trang',4,N'56' UNION ALL
select 435,N'569',N'Cam Ranh',N'Cam Ranh',N'Thành phố Cam Ranh',N'Cam Ranh City',N'cam_ranh',4,N'56' UNION ALL
select 436,N'570',N'Cam Lâm',N'Cam Lam',N'Huyện Cam Lâm',N'Cam Lam District',N'cam_lam',7,N'56' UNION ALL
select 437,N'571',N'Vạn Ninh',N'Van Ninh',N'Huyện Vạn Ninh',N'Van Ninh District',N'van_ninh',7,N'56' UNION ALL
select 438,N'572',N'Ninh Hòa',N'Ninh Hoa',N'Thị xã Ninh Hòa',N'Ninh Hoa Town',N'ninh_hoa',6,N'56' UNION ALL
select 439,N'573',N'Khánh Vĩnh',N'Khanh Vinh',N'Huyện Khánh Vĩnh',N'Khanh Vinh District',N'khanh_vinh',7,N'56' UNION ALL
select 440,N'574',N'Diên Khánh',N'Dien Khanh',N'Huyện Diên Khánh',N'Dien Khanh District',N'dien_khanh',7,N'56' UNION ALL
select 441,N'575',N'Khánh Sơn',N'Khanh Son',N'Huyện Khánh Sơn',N'Khanh Son District',N'khanh_son',7,N'56' UNION ALL
select 442,N'576',N'Trường Sa',N'Truong Sa',N'Huyện Trường Sa',N'Truong Sa District',N'truong_sa',7,N'56' UNION ALL
select 443,N'582',N'Phan Rang-Tháp Chàm',N'Phan Rang-Thap Cham',N'Thành phố Phan Rang-Tháp Chàm',N'Phan Rang-Thap Cham City',N'phan_rang-thap_cham',4,N'58' UNION ALL
select 444,N'584',N'Bác Ái',N'Bac Ai',N'Huyện Bác Ái',N'Bac Ai District',N'bac_ai',7,N'58' UNION ALL
select 445,N'585',N'Ninh Sơn',N'Ninh Son',N'Huyện Ninh Sơn',N'Ninh Son District',N'ninh_son',7,N'58' UNION ALL
select 446,N'586',N'Ninh Hải',N'Ninh Hai',N'Huyện Ninh Hải',N'Ninh Hai District',N'ninh_hai',7,N'58' UNION ALL
select 447,N'587',N'Ninh Phước',N'Ninh Phuoc',N'Huyện Ninh Phước',N'Ninh Phuoc District',N'ninh_phuoc',7,N'58' UNION ALL
select 448,N'588',N'Thuận Bắc',N'Thuan Bac',N'Huyện Thuận Bắc',N'Thuan Bac District',N'thuan_bac',7,N'58' UNION ALL
select 449,N'589',N'Thuận Nam',N'Thuan Nam',N'Huyện Thuận Nam',N'Thuan Nam District',N'thuan_nam',7,N'58' UNION ALL
select 450,N'593',N'Phan Thiết',N'Phan Thiet',N'Thành phố Phan Thiết',N'Phan Thiet City',N'phan_thiet',4,N'60' UNION ALL
select 451,N'594',N'La Gi',N'La Gi',N'Thị xã La Gi',N'La Gi Town',N'la_gi',6,N'60' UNION ALL
select 452,N'595',N'Tuy Phong',N'Tuy Phong',N'Huyện Tuy Phong',N'Tuy Phong District',N'tuy_phong',7,N'60' UNION ALL
select 453,N'596',N'Bắc Bình',N'Bac Binh',N'Huyện Bắc Bình',N'Bac Binh District',N'bac_binh',7,N'60' UNION ALL
select 454,N'597',N'Hàm Thuận Bắc',N'Ham Thuan Bac',N'Huyện Hàm Thuận Bắc',N'Ham Thuan Bac District',N'ham_thuan_bac',7,N'60' UNION ALL
select 455,N'598',N'Hàm Thuận Nam',N'Ham Thuan Nam',N'Huyện Hàm Thuận Nam',N'Ham Thuan Nam District',N'ham_thuan_nam',7,N'60' UNION ALL
select 456,N'599',N'Tánh Linh',N'Tanh Linh',N'Huyện Tánh Linh',N'Tanh Linh District',N'tanh_linh',7,N'60' UNION ALL
select 457,N'600',N'Đức Linh',N'Duc Linh',N'Huyện Đức Linh',N'Duc Linh District',N'duc_linh',7,N'60' UNION ALL
select 458,N'601',N'Hàm Tân',N'Ham Tan',N'Huyện Hàm Tân',N'Ham Tan District',N'ham_tan',7,N'60' UNION ALL
select 459,N'602',N'Phú Quí',N'Phu Qui',N'Huyện Phú Quí',N'Phu Qui District',N'phu_qui',7,N'60' UNION ALL
select 460,N'608',N'Kon Tum',N'Kon Tum',N'Thành phố Kon Tum',N'Kon Tum City',N'kon_tum',4,N'62' UNION ALL
select 461,N'610',N'Đắk Glei',N'Dak Glei',N'Huyện Đắk Glei',N'Dak Glei District',N'dak_glei',7,N'62' UNION ALL
select 462,N'611',N'Ngọc Hồi',N'Ngoc Hoi',N'Huyện Ngọc Hồi',N'Ngoc Hoi District',N'ngoc_hoi',7,N'62' UNION ALL
select 463,N'612',N'Đắk Tô',N'Dak To',N'Huyện Đắk Tô',N'Dak To District',N'dak_to',7,N'62' UNION ALL
select 464,N'613',N'Kon Plông',N'Kon Plong',N'Huyện Kon Plông',N'Kon Plong District',N'kon_plong',7,N'62' UNION ALL
select 465,N'614',N'Kon Rẫy',N'Kon Ray',N'Huyện Kon Rẫy',N'Kon Ray District',N'kon_ray',7,N'62' UNION ALL
select 466,N'615',N'Đắk Hà',N'Dak Ha',N'Huyện Đắk Hà',N'Dak Ha District',N'dak_ha',7,N'62' UNION ALL
select 467,N'616',N'Sa Thầy',N'Sa Thay',N'Huyện Sa Thầy',N'Sa Thay District',N'sa_thay',7,N'62' UNION ALL
select 468,N'617',N'Tu Mơ Rông',N'Tu Mo Rong',N'Huyện Tu Mơ Rông',N'Tu Mo Rong District',N'tu_mo_rong',7,N'62' UNION ALL
select 469,N'618',N'Ia H'' Drai',N'Ia H'' Drai',N'Huyện Ia H'' Drai',N'Ia H'' Drai District',N'ia_h''_drai',7,N'62' UNION ALL
select 470,N'622',N'Pleiku',N'Pleiku',N'Thành phố Pleiku',N'Pleiku City',N'pleiku',4,N'64' UNION ALL
select 471,N'623',N'An Khê',N'An Khe',N'Thị xã An Khê',N'An Khe Town',N'an_khe',6,N'64' UNION ALL
select 472,N'624',N'Ayun Pa',N'Ayun Pa',N'Thị xã Ayun Pa',N'Ayun Pa Town',N'ayun_pa',6,N'64' UNION ALL
select 473,N'625',N'KBang',N'KBang',N'Huyện KBang',N'KBang District',N'kbang',7,N'64' UNION ALL
select 474,N'626',N'Đăk Đoa',N'Dak Doa',N'Huyện Đăk Đoa',N'Dak Doa District',N'dak_doa',7,N'64' UNION ALL
select 475,N'627',N'Chư Păh',N'Chu Pah',N'Huyện Chư Păh',N'Chu Pah District',N'chu_pah',7,N'64' UNION ALL
select 476,N'628',N'Ia Grai',N'Ia Grai',N'Huyện Ia Grai',N'Ia Grai District',N'ia_grai',7,N'64' UNION ALL
select 477,N'629',N'Mang Yang',N'Mang Yang',N'Huyện Mang Yang',N'Mang Yang District',N'mang_yang',7,N'64' UNION ALL
select 478,N'630',N'Kông Chro',N'Kong Chro',N'Huyện Kông Chro',N'Kong Chro District',N'kong_chro',7,N'64' UNION ALL
select 479,N'631',N'Đức Cơ',N'Duc Co',N'Huyện Đức Cơ',N'Duc Co District',N'duc_co',7,N'64' UNION ALL
select 480,N'632',N'Chư Prông',N'Chu Prong',N'Huyện Chư Prông',N'Chu Prong District',N'chu_prong',7,N'64' UNION ALL
select 481,N'633',N'Chư Sê',N'Chu Se',N'Huyện Chư Sê',N'Chu Se District',N'chu_se',7,N'64' UNION ALL
select 482,N'634',N'Đăk Pơ',N'Dak Po',N'Huyện Đăk Pơ',N'Dak Po District',N'dak_po',7,N'64' UNION ALL
select 483,N'635',N'Ia Pa',N'Ia Pa',N'Huyện Ia Pa',N'Ia Pa District',N'ia_pa',7,N'64' UNION ALL
select 484,N'637',N'Krông Pa',N'Krong Pa',N'Huyện Krông Pa',N'Krong Pa District',N'krong_pa',7,N'64' UNION ALL
select 485,N'638',N'Phú Thiện',N'Phu Thien',N'Huyện Phú Thiện',N'Phu Thien District',N'phu_thien',7,N'64' UNION ALL
select 486,N'639',N'Chư Pưh',N'Chu Puh',N'Huyện Chư Pưh',N'Chu Puh District',N'chu_puh',7,N'64' UNION ALL
select 487,N'643',N'Buôn Ma Thuột',N'Buon Ma Thuot',N'Thành phố Buôn Ma Thuột',N'Buon Ma Thuot City',N'buon_ma_thuot',4,N'66' UNION ALL
select 488,N'644',N'Buôn Hồ',N'Buon Ho',N'Thị xã Buôn Hồ',N'Buon Ho Town',N'buon_ho',6,N'66' UNION ALL
select 489,N'645',N'Ea H''leo',N'Ea H''leo',N'Huyện Ea H''leo',N'Ea H''leo District',N'ea_h''leo',7,N'66' UNION ALL
select 490,N'646',N'Ea Súp',N'Ea Sup',N'Huyện Ea Súp',N'Ea Sup District',N'ea_sup',7,N'66' UNION ALL
select 491,N'647',N'Buôn Đôn',N'Buon Don',N'Huyện Buôn Đôn',N'Buon Don District',N'buon_don',7,N'66' UNION ALL
select 492,N'648',N'Cư M''gar',N'Cu M''gar',N'Huyện Cư M''gar',N'Cu M''gar District',N'cu_m''gar',7,N'66' UNION ALL
select 493,N'649',N'Krông Búk',N'Krong Buk',N'Huyện Krông Búk',N'Krong Buk District',N'krong_buk',7,N'66' UNION ALL
select 494,N'650',N'Krông Năng',N'Krong Nang',N'Huyện Krông Năng',N'Krong Nang District',N'krong_nang',7,N'66' UNION ALL
select 495,N'651',N'Ea Kar',N'Ea Kar',N'Huyện Ea Kar',N'Ea Kar District',N'ea_kar',7,N'66' UNION ALL
select 496,N'652',N'M''Đrắk',N'M''Drak',N'Huyện M''Đrắk',N'M''Drak District',N'm''drak',7,N'66' UNION ALL
select 497,N'653',N'Krông Bông',N'Krong Bong',N'Huyện Krông Bông',N'Krong Bong District',N'krong_bong',7,N'66' UNION ALL
select 498,N'654',N'Krông Pắc',N'Krong Pac',N'Huyện Krông Pắc',N'Krong Pac District',N'krong_pac',7,N'66' UNION ALL
select 499,N'655',N'Krông A Na',N'Krong A Na',N'Huyện Krông A Na',N'Krong A Na District',N'krong_a_na',7,N'66' UNION ALL
select 500,N'656',N'Lắk',N'Lak',N'Huyện Lắk',N'Lak District',N'lak',7,N'66' UNION ALL
select 501,N'657',N'Cư Kuin',N'Cu Kuin',N'Huyện Cư Kuin',N'Cu Kuin District',N'cu_kuin',7,N'66' UNION ALL
select 502,N'660',N'Gia Nghĩa',N'Gia Nghia',N'Thành phố Gia Nghĩa',N'Gia Nghia City',N'gia_nghia',4,N'67' UNION ALL
select 503,N'661',N'Đăk Glong',N'Dak Glong',N'Huyện Đăk Glong',N'Dak Glong District',N'dak_glong',7,N'67' UNION ALL
select 504,N'662',N'Cư Jút',N'Cu Jut',N'Huyện Cư Jút',N'Cu Jut District',N'cu_jut',7,N'67' UNION ALL
select 505,N'663',N'Đắk Mil',N'Dak Mil',N'Huyện Đắk Mil',N'Dak Mil District',N'dak_mil',7,N'67' UNION ALL
select 506,N'664',N'Krông Nô',N'Krong No',N'Huyện Krông Nô',N'Krong No District',N'krong_no',7,N'67' UNION ALL
select 507,N'665',N'Đắk Song',N'Dak Song',N'Huyện Đắk Song',N'Dak Song District',N'dak_song',7,N'67' UNION ALL
select 508,N'666',N'Đắk R''Lấp',N'Dak R''Lap',N'Huyện Đắk R''Lấp',N'Dak R''Lap District',N'dak_r''lap',7,N'67' UNION ALL
select 509,N'667',N'Tuy Đức',N'Tuy Duc',N'Huyện Tuy Đức',N'Tuy Duc District',N'tuy_duc',7,N'67' UNION ALL
select 510,N'672',N'Đà Lạt',N'Da Lat',N'Thành phố Đà Lạt',N'Da Lat City',N'da_lat',4,N'68' UNION ALL
select 511,N'673',N'Bảo Lộc',N'Bao Loc',N'Thành phố Bảo Lộc',N'Bao Loc City',N'bao_loc',4,N'68' UNION ALL
select 512,N'674',N'Đam Rông',N'Dam Rong',N'Huyện Đam Rông',N'Dam Rong District',N'dam_rong',7,N'68' UNION ALL
select 513,N'675',N'Lạc Dương',N'Lac Duong',N'Huyện Lạc Dương',N'Lac Duong District',N'lac_duong',7,N'68' UNION ALL
select 514,N'676',N'Lâm Hà',N'Lam Ha',N'Huyện Lâm Hà',N'Lam Ha District',N'lam_ha',7,N'68' UNION ALL
select 515,N'677',N'Đơn Dương',N'Don Duong',N'Huyện Đơn Dương',N'Don Duong District',N'don_duong',7,N'68' UNION ALL
select 516,N'678',N'Đức Trọng',N'Duc Trong',N'Huyện Đức Trọng',N'Duc Trong District',N'duc_trong',7,N'68' UNION ALL
select 517,N'679',N'Di Linh',N'Di Linh',N'Huyện Di Linh',N'Di Linh District',N'di_linh',7,N'68' UNION ALL
select 518,N'680',N'Bảo Lâm',N'Bao Lam',N'Huyện Bảo Lâm',N'Bao Lam District',N'bao_lam',7,N'68' UNION ALL
select 519,N'681',N'Đạ Huoai',N'Da Huoai',N'Huyện Đạ Huoai',N'Da Huoai District',N'da_huoai',7,N'68' UNION ALL
select 520,N'682',N'Đạ Tẻh',N'Da Teh',N'Huyện Đạ Tẻh',N'Da Teh District',N'da_teh',7,N'68' UNION ALL
select 521,N'683',N'Cát Tiên',N'Cat Tien',N'Huyện Cát Tiên',N'Cat Tien District',N'cat_tien',7,N'68' UNION ALL
select 522,N'688',N'Phước Long',N'Phuoc Long',N'Thị xã Phước Long',N'Phuoc Long Town',N'phuoc_long',6,N'70' UNION ALL
select 523,N'689',N'Đồng Xoài',N'Dong Xoai',N'Thành phố Đồng Xoài',N'Dong Xoai City',N'dong_xoai',4,N'70' UNION ALL
select 524,N'690',N'Bình Long',N'Binh Long',N'Thị xã Bình Long',N'Binh Long Town',N'binh_long',6,N'70' UNION ALL
select 525,N'691',N'Bù Gia Mập',N'Bu Gia Map',N'Huyện Bù Gia Mập',N'Bu Gia Map District',N'bu_gia_map',7,N'70' UNION ALL
select 526,N'692',N'Lộc Ninh',N'Loc Ninh',N'Huyện Lộc Ninh',N'Loc Ninh District',N'loc_ninh',7,N'70' UNION ALL
select 527,N'693',N'Bù Đốp',N'Bu Dop',N'Huyện Bù Đốp',N'Bu Dop District',N'bu_dop',7,N'70' UNION ALL
select 528,N'694',N'Hớn Quản',N'Hon Quan',N'Huyện Hớn Quản',N'Hon Quan District',N'hon_quan',7,N'70' UNION ALL
select 529,N'695',N'Đồng Phú',N'Dong Phu',N'Huyện Đồng Phú',N'Dong Phu District',N'dong_phu',7,N'70' UNION ALL
select 530,N'696',N'Bù Đăng',N'Bu Dang',N'Huyện Bù Đăng',N'Bu Dang District',N'bu_dang',7,N'70' UNION ALL
select 531,N'697',N'Chơn Thành',N'Chon Thanh',N'Thị xã Chơn Thành',N'Chon Thanh Town',N'chon_thanh',6,N'70' UNION ALL
select 532,N'698',N'Phú Riềng',N'Phu Rieng',N'Huyện Phú Riềng',N'Phu Rieng District',N'phu_rieng',7,N'70' UNION ALL
select 533,N'703',N'Tây Ninh',N'Tay Ninh',N'Thành phố Tây Ninh',N'Tay Ninh City',N'tay_ninh',4,N'72' UNION ALL
select 534,N'705',N'Tân Biên',N'Tan Bien',N'Huyện Tân Biên',N'Tan Bien District',N'tan_bien',7,N'72' UNION ALL
select 535,N'706',N'Tân Châu',N'Tan Chau',N'Huyện Tân Châu',N'Tan Chau District',N'tan_chau',7,N'72' UNION ALL
select 536,N'707',N'Dương Minh Châu',N'Duong Minh Chau',N'Huyện Dương Minh Châu',N'Duong Minh Chau District',N'duong_minh_chau',7,N'72' UNION ALL
select 537,N'708',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'72' UNION ALL
select 538,N'709',N'Hòa Thành',N'Hoa Thanh',N'Thị xã Hòa Thành',N'Hoa Thanh Town',N'hoa_thanh',6,N'72' UNION ALL
select 539,N'711',N'Bến Cầu',N'Ben Cau',N'Huyện Bến Cầu',N'Ben Cau District',N'ben_cau',7,N'72' UNION ALL
select 540,N'712',N'Trảng Bàng',N'Trang Bang',N'Thị xã Trảng Bàng',N'Trang Bang Town',N'trang_bang',6,N'72' UNION ALL
select 541,N'718',N'Thủ Dầu Một',N'Thu Dau Mot',N'Thành phố Thủ Dầu Một',N'Thu Dau Mot City',N'thu_dau_mot',4,N'74' UNION ALL
select 542,N'719',N'Bàu Bàng',N'Bau Bang',N'Huyện Bàu Bàng',N'Bau Bang District',N'bau_bang',7,N'74' UNION ALL
select 543,N'720',N'Dầu Tiếng',N'Dau Tieng',N'Huyện Dầu Tiếng',N'Dau Tieng District',N'dau_tieng',7,N'74' UNION ALL
select 544,N'721',N'Bến Cát',N'Ben Cat',N'Thị xã Bến Cát',N'Ben Cat Town',N'ben_cat',6,N'74' UNION ALL
select 545,N'722',N'Phú Giáo',N'Phu Giao',N'Huyện Phú Giáo',N'Phu Giao District',N'phu_giao',7,N'74' UNION ALL
select 546,N'723',N'Tân Uyên',N'Tan Uyen',N'Thị xã Tân Uyên',N'Tan Uyen Town',N'tan_uyen',6,N'74' UNION ALL
select 547,N'724',N'Dĩ An',N'Di An',N'Thành phố Dĩ An',N'Di An City',N'di_an',4,N'74' UNION ALL
select 548,N'726',N'Bắc Tân Uyên',N'Bac Tan Uyen',N'Huyện Bắc Tân Uyên',N'Bac Tan Uyen District',N'bac_tan_uyen',7,N'74' UNION ALL
select 549,N'731',N'Biên Hòa',N'Bien Hoa',N'Thành phố Biên Hòa',N'Bien Hoa City',N'bien_hoa',4,N'75' UNION ALL
select 550,N'732',N'Long Khánh',N'Long Khanh',N'Thành phố Long Khánh',N'Long Khanh City',N'long_khanh',4,N'75' UNION ALL
select 551,N'734',N'Tân Phú',N'Tan Phu',N'Huyện Tân Phú',N'Tan Phu District',N'tan_phu',7,N'75' UNION ALL
select 552,N'735',N'Vĩnh Cửu',N'Vinh Cuu',N'Huyện Vĩnh Cửu',N'Vinh Cuu District',N'vinh_cuu',7,N'75' UNION ALL
select 553,N'736',N'Định Quán',N'Dinh Quan',N'Huyện Định Quán',N'Dinh Quan District',N'dinh_quan',7,N'75' UNION ALL
select 554,N'737',N'Trảng Bom',N'Trang Bom',N'Huyện Trảng Bom',N'Trang Bom District',N'trang_bom',7,N'75' UNION ALL
select 555,N'738',N'Thống Nhất',N'Thong Nhat',N'Huyện Thống Nhất',N'Thong Nhat District',N'thong_nhat',7,N'75' UNION ALL
select 556,N'739',N'Cẩm Mỹ',N'Cam My',N'Huyện Cẩm Mỹ',N'Cam My District',N'cam_my',7,N'75' UNION ALL
select 557,N'740',N'Long Thành',N'Long Thanh',N'Huyện Long Thành',N'Long Thanh District',N'long_thanh',7,N'75' UNION ALL
select 558,N'741',N'Xuân Lộc',N'Xuan Loc',N'Huyện Xuân Lộc',N'Xuan Loc District',N'xuan_loc',7,N'75' UNION ALL
select 559,N'742',N'Nhơn Trạch',N'Nhon Trach',N'Huyện Nhơn Trạch',N'Nhon Trach District',N'nhon_trach',7,N'75' UNION ALL
select 560,N'747',N'Vũng Tàu',N'Vung Tau',N'Thành phố Vũng Tàu',N'Vung Tau City',N'vung_tau',4,N'77' UNION ALL
select 561,N'748',N'Bà Rịa',N'Ba Ria',N'Thành phố Bà Rịa',N'Ba Ria City',N'ba_ria',4,N'77' UNION ALL
select 562,N'750',N'Châu Đức',N'Chau Duc',N'Huyện Châu Đức',N'Chau Duc District',N'chau_duc',7,N'77' UNION ALL
select 563,N'751',N'Xuyên Mộc',N'Xuyen Moc',N'Huyện Xuyên Mộc',N'Xuyen Moc District',N'xuyen_moc',7,N'77' UNION ALL
select 564,N'752',N'Long Điền',N'Long Dien',N'Huyện Long Điền',N'Long Dien District',N'long_dien',7,N'77' UNION ALL
select 565,N'753',N'Đất Đỏ',N'Dat Do',N'Huyện Đất Đỏ',N'Dat Do District',N'dat_do',7,N'77' UNION ALL
select 566,N'754',N'Phú Mỹ',N'Phu My',N'Thị xã Phú Mỹ',N'Phu My Town',N'phu_my',6,N'77' UNION ALL
select 567,N'755',N'Côn Đảo',N'Con Dao',N'Huyện Côn Đảo',N'Con Dao District',N'con_dao',7,N'77' UNION ALL
select 568,N'764',N'Gò Vấp',N'Go Vap',N'Quận Gò Vấp',N'Go Vap District',N'go_vap',5,N'79' UNION ALL
select 569,N'765',N'Bình Thạnh',N'Binh Thanh',N'Quận Bình Thạnh',N'Binh Thanh District',N'binh_thanh',5,N'79' UNION ALL
select 570,N'766',N'Tân Bình',N'Tan Binh',N'Quận Tân Bình',N'Tan Binh District',N'tan_binh',5,N'79' UNION ALL
select 571,N'767',N'Tân Phú',N'Tan Phu',N'Quận Tân Phú',N'Tan Phu District',N'tan_phu',5,N'79' UNION ALL
select 572,N'768',N'Phú Nhuận',N'Phu Nhuan',N'Quận Phú Nhuận',N'Phu Nhuan District',N'phu_nhuan',5,N'79' UNION ALL
select 573,N'777',N'Bình Tân',N'Binh Tan',N'Quận Bình Tân',N'Binh Tan District',N'binh_tan',5,N'79' UNION ALL
select 574,N'783',N'Củ Chi',N'Cu Chi',N'Huyện Củ Chi',N'Cu Chi District',N'cu_chi',7,N'79' UNION ALL
select 575,N'784',N'Hóc Môn',N'Hoc Mon',N'Huyện Hóc Môn',N'Hoc Mon District',N'hoc_mon',7,N'79' UNION ALL
select 576,N'785',N'Bình Chánh',N'Binh Chanh',N'Huyện Bình Chánh',N'Binh Chanh District',N'binh_chanh',7,N'79' UNION ALL
select 577,N'786',N'Nhà Bè',N'Nha Be',N'Huyện Nhà Bè',N'Nha Be District',N'nha_be',7,N'79' UNION ALL
select 578,N'787',N'Cần Giờ',N'Can Gio',N'Huyện Cần Giờ',N'Can Gio District',N'can_gio',7,N'79' UNION ALL
select 579,N'794',N'Tân An',N'Tan An',N'Thành phố Tân An',N'Tan An City',N'tan_an',4,N'80' UNION ALL
select 580,N'795',N'Kiến Tường',N'Kien Tuong',N'Thị xã Kiến Tường',N'Kien Tuong Town',N'kien_tuong',6,N'80' UNION ALL
select 581,N'796',N'Tân Hưng',N'Tan Hung',N'Huyện Tân Hưng',N'Tan Hung District',N'tan_hung',7,N'80' UNION ALL
select 582,N'797',N'Vĩnh Hưng',N'Vinh Hung',N'Huyện Vĩnh Hưng',N'Vinh Hung District',N'vinh_hung',7,N'80' UNION ALL
select 583,N'798',N'Mộc Hóa',N'Moc Hoa',N'Huyện Mộc Hóa',N'Moc Hoa District',N'moc_hoa',7,N'80' UNION ALL
select 584,N'799',N'Tân Thạnh',N'Tan Thanh',N'Huyện Tân Thạnh',N'Tan Thanh District',N'tan_thanh',7,N'80' UNION ALL
select 585,N'800',N'Thạnh Hóa',N'Thanh Hoa',N'Huyện Thạnh Hóa',N'Thanh Hoa District',N'thanh_hoa',7,N'80' UNION ALL
select 586,N'801',N'Đức Huệ',N'Duc Hue',N'Huyện Đức Huệ',N'Duc Hue District',N'duc_hue',7,N'80' UNION ALL
select 587,N'802',N'Đức Hòa',N'Duc Hoa',N'Huyện Đức Hòa',N'Duc Hoa District',N'duc_hoa',7,N'80' UNION ALL
select 588,N'803',N'Bến Lức',N'Ben Luc',N'Huyện Bến Lức',N'Ben Luc District',N'ben_luc',7,N'80' UNION ALL
select 589,N'804',N'Thủ Thừa',N'Thu Thua',N'Huyện Thủ Thừa',N'Thu Thua District',N'thu_thua',7,N'80' UNION ALL
select 590,N'805',N'Tân Trụ',N'Tan Tru',N'Huyện Tân Trụ',N'Tan Tru District',N'tan_tru',7,N'80' UNION ALL
select 591,N'806',N'Cần Đước',N'Can Duoc',N'Huyện Cần Đước',N'Can Duoc District',N'can_duoc',7,N'80' UNION ALL
select 592,N'807',N'Cần Giuộc',N'Can Giuoc',N'Huyện Cần Giuộc',N'Can Giuoc District',N'can_giuoc',7,N'80' UNION ALL
select 593,N'808',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'80' UNION ALL
select 594,N'815',N'Mỹ Tho',N'My Tho',N'Thành phố Mỹ Tho',N'My Tho City',N'my_tho',4,N'82' UNION ALL
select 595,N'816',N'Gò Công',N'Go Cong',N'Thị xã Gò Công',N'Go Cong Town',N'go_cong',6,N'82' UNION ALL
select 596,N'817',N'Cai Lậy',N'Cai Lay',N'Thị xã Cai Lậy',N'Cai Lay Town',N'cai_lay',6,N'82' UNION ALL
select 597,N'818',N'Tân Phước',N'Tan Phuoc',N'Huyện Tân Phước',N'Tan Phuoc District',N'tan_phuoc',7,N'82' UNION ALL
select 598,N'819',N'Cái Bè',N'Cai Be',N'Huyện Cái Bè',N'Cai Be District',N'cai_be',7,N'82' UNION ALL
select 599,N'820',N'Cai Lậy',N'Cai Lay',N'Huyện Cai Lậy',N'Cai Lay District',N'cai_lay',7,N'82' UNION ALL
select 600,N'821',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'82' UNION ALL
select 601,N'822',N'Chợ Gạo',N'Cho Gao',N'Huyện Chợ Gạo',N'Cho Gao District',N'cho_gao',7,N'82' UNION ALL
select 602,N'823',N'Gò Công Tây',N'Go Cong Tay',N'Huyện Gò Công Tây',N'Go Cong Tay District',N'go_cong_tay',7,N'82' UNION ALL
select 603,N'824',N'Gò Công Đông',N'Go Cong Dong',N'Huyện Gò Công Đông',N'Go Cong Dong District',N'go_cong_dong',7,N'82' UNION ALL
select 604,N'825',N'Tân Phú Đông',N'Tan Phu Dong',N'Huyện Tân Phú Đông',N'Tan Phu Dong District',N'tan_phu_dong',7,N'82' UNION ALL
select 605,N'829',N'Bến Tre',N'Ben Tre',N'Thành phố Bến Tre',N'Ben Tre City',N'ben_tre',4,N'83' UNION ALL
select 606,N'831',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'83' UNION ALL
select 607,N'832',N'Chợ Lách',N'Cho Lach',N'Huyện Chợ Lách',N'Cho Lach District',N'cho_lach',7,N'83' UNION ALL
select 608,N'833',N'Mỏ Cày Nam',N'Mo Cay Nam',N'Huyện Mỏ Cày Nam',N'Mo Cay Nam District',N'mo_cay_nam',7,N'83' UNION ALL
select 609,N'834',N'Giồng Trôm',N'Giong Trom',N'Huyện Giồng Trôm',N'Giong Trom District',N'giong_trom',7,N'83' UNION ALL
select 610,N'835',N'Bình Đại',N'Binh Dai',N'Huyện Bình Đại',N'Binh Dai District',N'binh_dai',7,N'83' UNION ALL
select 611,N'836',N'Ba Tri',N'Ba Tri',N'Huyện Ba Tri',N'Ba Tri District',N'ba_tri',7,N'83' UNION ALL
select 612,N'837',N'Thạnh Phú',N'Thanh Phu',N'Huyện Thạnh Phú',N'Thanh Phu District',N'thanh_phu',7,N'83' UNION ALL
select 613,N'838',N'Mỏ Cày Bắc',N'Mo Cay Bac',N'Huyện Mỏ Cày Bắc',N'Mo Cay Bac District',N'mo_cay_bac',7,N'83' UNION ALL
select 614,N'842',N'Trà Vinh',N'Tra Vinh',N'Thành phố Trà Vinh',N'Tra Vinh City',N'tra_vinh',4,N'84' UNION ALL
select 615,N'844',N'Càng Long',N'Cang Long',N'Huyện Càng Long',N'Cang Long District',N'cang_long',7,N'84' UNION ALL
select 616,N'845',N'Cầu Kè',N'Cau Ke',N'Huyện Cầu Kè',N'Cau Ke District',N'cau_ke',7,N'84' UNION ALL
select 617,N'846',N'Tiểu Cần',N'Tieu Can',N'Huyện Tiểu Cần',N'Tieu Can District',N'tieu_can',7,N'84' UNION ALL
select 618,N'847',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'84' UNION ALL
select 619,N'848',N'Cầu Ngang',N'Cau Ngang',N'Huyện Cầu Ngang',N'Cau Ngang District',N'cau_ngang',7,N'84' UNION ALL
select 620,N'849',N'Trà Cú',N'Tra Cu',N'Huyện Trà Cú',N'Tra Cu District',N'tra_cu',7,N'84' UNION ALL
select 621,N'850',N'Duyên Hải',N'Duyen Hai',N'Huyện Duyên Hải',N'Duyen Hai District',N'duyen_hai',7,N'84' UNION ALL
select 622,N'851',N'Duyên Hải',N'Duyen Hai',N'Thị xã Duyên Hải',N'Duyen Hai Town',N'duyen_hai',6,N'84' UNION ALL
select 623,N'855',N'Vĩnh Long',N'Vinh Long',N'Thành phố Vĩnh Long',N'Vinh Long City',N'vinh_long',4,N'86' UNION ALL
select 624,N'857',N'Long Hồ',N'Long Ho',N'Huyện Long Hồ',N'Long Ho District',N'long_ho',7,N'86' UNION ALL
select 625,N'858',N'Mang Thít',N'Mang Thit',N'Huyện Mang Thít',N'Mang Thit District',N'mang_thit',7,N'86' UNION ALL
select 626,N'859',N'Vũng Liêm',N'Vung Liem',N'Huyện Vũng Liêm',N'Vung Liem District',N'vung_liem',7,N'86' UNION ALL
select 627,N'860',N'Tam Bình',N'Tam Binh',N'Huyện Tam Bình',N'Tam Binh District',N'tam_binh',7,N'86' UNION ALL
select 628,N'861',N'Bình Minh',N'Binh Minh',N'Thị xã Bình Minh',N'Binh Minh Town',N'binh_minh',6,N'86' UNION ALL
select 629,N'862',N'Trà Ôn',N'Tra On',N'Huyện Trà Ôn',N'Tra On District',N'tra_on',7,N'86' UNION ALL
select 630,N'863',N'Bình Tân',N'Binh Tan',N'Huyện Bình Tân',N'Binh Tan District',N'binh_tan',7,N'86' UNION ALL
select 631,N'866',N'Cao Lãnh',N'Cao Lanh',N'Thành phố Cao Lãnh',N'Cao Lanh City',N'cao_lanh',4,N'87' UNION ALL
select 632,N'867',N'Sa Đéc',N'Sa Dec',N'Thành phố Sa Đéc',N'Sa Dec City',N'sa_dec',4,N'87' UNION ALL
select 633,N'868',N'Hồng Ngự',N'Hong Ngu',N'Thành phố Hồng Ngự',N'Hong Ngu City',N'hong_ngu',4,N'87' UNION ALL
select 634,N'869',N'Tân Hồng',N'Tan Hong',N'Huyện Tân Hồng',N'Tan Hong District',N'tan_hong',7,N'87' UNION ALL
select 635,N'870',N'Hồng Ngự',N'Hong Ngu',N'Huyện Hồng Ngự',N'Hong Ngu District',N'hong_ngu',7,N'87' UNION ALL
select 636,N'871',N'Tam Nông',N'Tam Nong',N'Huyện Tam Nông',N'Tam Nong District',N'tam_nong',7,N'87' UNION ALL
select 637,N'872',N'Tháp Mười',N'Thap Muoi',N'Huyện Tháp Mười',N'Thap Muoi District',N'thap_muoi',7,N'87' UNION ALL
select 638,N'873',N'Cao Lãnh',N'Cao Lanh',N'Huyện Cao Lãnh',N'Cao Lanh District',N'cao_lanh',7,N'87' UNION ALL
select 639,N'874',N'Thanh Bình',N'Thanh Binh',N'Huyện Thanh Bình',N'Thanh Binh District',N'thanh_binh',7,N'87' UNION ALL
select 640,N'875',N'Lấp Vò',N'Lap Vo',N'Huyện Lấp Vò',N'Lap Vo District',N'lap_vo',7,N'87' UNION ALL
select 641,N'876',N'Lai Vung',N'Lai Vung',N'Huyện Lai Vung',N'Lai Vung District',N'lai_vung',7,N'87' UNION ALL
select 642,N'877',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'87' UNION ALL
select 643,N'883',N'Long Xuyên',N'Long Xuyen',N'Thành phố Long Xuyên',N'Long Xuyen City',N'long_xuyen',4,N'89' UNION ALL
select 644,N'884',N'Châu Đốc',N'Chau Doc',N'Thành phố Châu Đốc',N'Chau Doc City',N'chau_doc',4,N'89' UNION ALL
select 645,N'886',N'An Phú',N'An Phu',N'Huyện An Phú',N'An Phu District',N'an_phu',7,N'89' UNION ALL
select 646,N'887',N'Tân Châu',N'Tan Chau',N'Thị xã Tân Châu',N'Tan Chau Town',N'tan_chau',6,N'89' UNION ALL
select 647,N'888',N'Phú Tân',N'Phu Tan',N'Huyện Phú Tân',N'Phu Tan District',N'phu_tan',7,N'89' UNION ALL
select 648,N'889',N'Châu Phú',N'Chau Phu',N'Huyện Châu Phú',N'Chau Phu District',N'chau_phu',7,N'89' UNION ALL
select 649,N'890',N'Tịnh Biên',N'Tinh Bien',N'Huyện Tịnh Biên',N'Tinh Bien District',N'tinh_bien',7,N'89' UNION ALL
select 650,N'891',N'Tri Tôn',N'Tri Ton',N'Huyện Tri Tôn',N'Tri Ton District',N'tri_ton',7,N'89' UNION ALL
select 651,N'892',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'89' UNION ALL
select 652,N'893',N'Chợ Mới',N'Cho Moi',N'Huyện Chợ Mới',N'Cho Moi District',N'cho_moi',7,N'89' UNION ALL
select 653,N'894',N'Thoại Sơn',N'Thoai Son',N'Huyện Thoại Sơn',N'Thoai Son District',N'thoai_son',7,N'89' UNION ALL
select 654,N'899',N'Rạch Giá',N'Rach Gia',N'Thành phố Rạch Giá',N'Rach Gia City',N'rach_gia',4,N'91' UNION ALL
select 655,N'900',N'Hà Tiên',N'Ha Tien',N'Thành phố Hà Tiên',N'Ha Tien City',N'ha_tien',4,N'91' UNION ALL
select 656,N'902',N'Kiên Lương',N'Kien Luong',N'Huyện Kiên Lương',N'Kien Luong District',N'kien_luong',7,N'91' UNION ALL
select 657,N'903',N'Hòn Đất',N'Hon Dat',N'Huyện Hòn Đất',N'Hon Dat District',N'hon_dat',7,N'91' UNION ALL
select 658,N'904',N'Tân Hiệp',N'Tan Hiep',N'Huyện Tân Hiệp',N'Tan Hiep District',N'tan_hiep',7,N'91' UNION ALL
select 659,N'905',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'91' UNION ALL
select 660,N'906',N'Giồng Riềng',N'Giong Rieng',N'Huyện Giồng Riềng',N'Giong Rieng District',N'giong_rieng',7,N'91' UNION ALL
select 661,N'907',N'Gò Quao',N'Go Quao',N'Huyện Gò Quao',N'Go Quao District',N'go_quao',7,N'91' UNION ALL
select 662,N'908',N'An Biên',N'An Bien',N'Huyện An Biên',N'An Bien District',N'an_bien',7,N'91' UNION ALL
select 663,N'909',N'An Minh',N'An Minh',N'Huyện An Minh',N'An Minh District',N'an_minh',7,N'91' UNION ALL
select 664,N'910',N'Vĩnh Thuận',N'Vinh Thuan',N'Huyện Vĩnh Thuận',N'Vinh Thuan District',N'vinh_thuan',7,N'91' UNION ALL
select 665,N'911',N'Phú Quốc',N'Phu Quoc',N'Thành phố Phú Quốc',N'Phu Quoc City',N'phu_quoc',4,N'91' UNION ALL
select 666,N'912',N'Kiên Hải',N'Kien Hai',N'Huyện Kiên Hải',N'Kien Hai District',N'kien_hai',7,N'91' UNION ALL
select 667,N'913',N'U Minh Thượng',N'U Minh Thuong',N'Huyện U Minh Thượng',N'U Minh Thuong District',N'u_minh_thuong',7,N'91' UNION ALL
select 668,N'914',N'Giang Thành',N'Giang Thanh',N'Huyện Giang Thành',N'Giang Thanh District',N'giang_thanh',7,N'91' UNION ALL
select 669,N'916',N'Ninh Kiều',N'Ninh Kieu',N'Quận Ninh Kiều',N'Ninh Kieu District',N'ninh_kieu',5,N'92' UNION ALL
select 670,N'917',N'Ô Môn',N'O Mon',N'Quận Ô Môn',N'O Mon District',N'o_mon',5,N'92' UNION ALL
select 671,N'918',N'Bình Thuỷ',N'Binh Thuy',N'Quận Bình Thuỷ',N'Binh Thuy District',N'binh_thuy',5,N'92' UNION ALL
select 672,N'919',N'Cái Răng',N'Cai Rang',N'Quận Cái Răng',N'Cai Rang District',N'cai_rang',5,N'92' UNION ALL
select 673,N'923',N'Thốt Nốt',N'Thot Not',N'Quận Thốt Nốt',N'Thot Not District',N'thot_not',5,N'92' UNION ALL
select 674,N'924',N'Vĩnh Thạnh',N'Vinh Thanh',N'Huyện Vĩnh Thạnh',N'Vinh Thanh District',N'vinh_thanh',7,N'92' UNION ALL
select 675,N'925',N'Cờ Đỏ',N'Co Do',N'Huyện Cờ Đỏ',N'Co Do District',N'co_do',7,N'92' UNION ALL
select 676,N'926',N'Phong Điền',N'Phong Dien',N'Huyện Phong Điền',N'Phong Dien District',N'phong_dien',7,N'92' UNION ALL
select 677,N'927',N'Thới Lai',N'Thoi Lai',N'Huyện Thới Lai',N'Thoi Lai District',N'thoi_lai',7,N'92' UNION ALL
select 678,N'930',N'Vị Thanh',N'Vi Thanh',N'Thành phố Vị Thanh',N'Vi Thanh City',N'vi_thanh',4,N'93' UNION ALL
select 679,N'931',N'Ngã Bảy',N'Nga Bay',N'Thành phố Ngã Bảy',N'Nga Bay City',N'nga_bay',4,N'93' UNION ALL
select 680,N'932',N'Châu Thành A',N'Chau Thanh A',N'Huyện Châu Thành A',N'Chau Thanh A District',N'chau_thanh_a',7,N'93' UNION ALL
select 681,N'933',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'93' UNION ALL
select 682,N'934',N'Phụng Hiệp',N'Phung Hiep',N'Huyện Phụng Hiệp',N'Phung Hiep District',N'phung_hiep',7,N'93' UNION ALL
select 683,N'935',N'Vị Thuỷ',N'Vi Thuy',N'Huyện Vị Thuỷ',N'Vi Thuy District',N'vi_thuy',7,N'93' UNION ALL
select 684,N'936',N'Long Mỹ',N'Long My',N'Huyện Long Mỹ',N'Long My District',N'long_my',7,N'93' UNION ALL
select 685,N'937',N'Long Mỹ',N'Long My',N'Thị xã Long Mỹ',N'Long My Town',N'long_my',6,N'93' UNION ALL
select 686,N'941',N'Sóc Trăng',N'Soc Trang',N'Thành phố Sóc Trăng',N'Soc Trang City',N'soc_trang',4,N'94' UNION ALL
select 687,N'942',N'Châu Thành',N'Chau Thanh',N'Huyện Châu Thành',N'Chau Thanh District',N'chau_thanh',7,N'94' UNION ALL
select 688,N'943',N'Kế Sách',N'Ke Sach',N'Huyện Kế Sách',N'Ke Sach District',N'ke_sach',7,N'94' UNION ALL
select 689,N'944',N'Mỹ Tú',N'My Tu',N'Huyện Mỹ Tú',N'My Tu District',N'my_tu',7,N'94' UNION ALL
select 690,N'945',N'Cù Lao Dung',N'Cu Lao Dung',N'Huyện Cù Lao Dung',N'Cu Lao Dung District',N'cu_lao_dung',7,N'94' UNION ALL
select 691,N'946',N'Long Phú',N'Long Phu',N'Huyện Long Phú',N'Long Phu District',N'long_phu',7,N'94' UNION ALL
select 692,N'947',N'Mỹ Xuyên',N'My Xuyen',N'Huyện Mỹ Xuyên',N'My Xuyen District',N'my_xuyen',7,N'94' UNION ALL
select 693,N'948',N'Ngã Năm',N'Nga Nam',N'Thị xã Ngã Năm',N'Nga Nam Town',N'nga_nam',6,N'94' UNION ALL
select 694,N'949',N'Thạnh Trị',N'Thanh Tri',N'Huyện Thạnh Trị',N'Thanh Tri District',N'thanh_tri',7,N'94' UNION ALL
select 695,N'950',N'Vĩnh Châu',N'Vinh Chau',N'Thị xã Vĩnh Châu',N'Vinh Chau Town',N'vinh_chau',6,N'94' UNION ALL
select 696,N'951',N'Trần Đề',N'Tran De',N'Huyện Trần Đề',N'Tran De District',N'tran_de',7,N'94' UNION ALL
select 697,N'954',N'Bạc Liêu',N'Bac Lieu',N'Thành phố Bạc Liêu',N'Bac Lieu City',N'bac_lieu',4,N'95' UNION ALL
select 698,N'956',N'Hồng Dân',N'Hong Dan',N'Huyện Hồng Dân',N'Hong Dan District',N'hong_dan',7,N'95' UNION ALL
select 699,N'957',N'Phước Long',N'Phuoc Long',N'Huyện Phước Long',N'Phuoc Long District',N'phuoc_long',7,N'95' UNION ALL
select 700,N'958',N'Vĩnh Lợi',N'Vinh Loi',N'Huyện Vĩnh Lợi',N'Vinh Loi District',N'vinh_loi',7,N'95' UNION ALL
select 701,N'959',N'Giá Rai',N'Gia Rai',N'Thị xã Giá Rai',N'Gia Rai Town',N'gia_rai',6,N'95' UNION ALL
select 702,N'960',N'Đông Hải',N'Dong Hai',N'Huyện Đông Hải',N'Dong Hai District',N'dong_hai',7,N'95' UNION ALL
select 703,N'961',N'Hoà Bình',N'Hoa Binh',N'Huyện Hoà Bình',N'Hoa Binh District',N'hoa_binh',7,N'95' UNION ALL
select 704,N'964',N'Cà Mau',N'Ca Mau',N'Thành phố Cà Mau',N'Ca Mau City',N'ca_mau',4,N'96' UNION ALL
select 705,N'966',N'U Minh',N'U Minh',N'Huyện U Minh',N'U Minh District',N'u_minh',7,N'96' UNION ALL
select 706,N'967',N'Thới Bình',N'Thoi Binh',N'Huyện Thới Bình',N'Thoi Binh District',N'thoi_binh',7,N'96' UNION ALL
select 707,N'968',N'Trần Văn Thời',N'Tran Van Thoi',N'Huyện Trần Văn Thời',N'Tran Van Thoi District',N'tran_van_thoi',7,N'96' UNION ALL
select 708,N'969',N'Cái Nước',N'Cai Nuoc',N'Huyện Cái Nước',N'Cai Nuoc District',N'cai_nuoc',7,N'96' UNION ALL
select 709,N'970',N'Đầm Dơi',N'Dam Doi',N'Huyện Đầm Dơi',N'Dam Doi District',N'dam_doi',7,N'96' UNION ALL
select 710,N'971',N'Năm Căn',N'Nam Can',N'Huyện Năm Căn',N'Nam Can District',N'nam_can',7,N'96' UNION ALL
select 711,N'972',N'Phú Tân',N'Phu Tan',N'Huyện Phú Tân',N'Phu Tan District',N'phu_tan',7,N'96' UNION ALL
select 712,N'973',N'Ngọc Hiển',N'Ngoc Hien',N'Huyện Ngọc Hiển',N'Ngoc Hien District',N'ngoc_hien',7,N'96' UNION ALL
select 713,N'769',N'Thủ Đức',N'Thu Duc',N'Thành phố Thủ Đức',N'Thu Duc City',N'thu_duc',3,N'79' UNION ALL
select 714,N'282',N'Mỹ Đức',N'My Duc',N'Huyện Mỹ Đức',N'My Duc District',N'my_duc',7,N'01' UNION ALL
select 790,N'024',N'Hà Giang',N'Ha Giang',N'Thành phố Hà Giang',N'Ha Giang City',N'ha_giang',4,N'02' UNION ALL
select 791,N'026',N'Đồng Văn',N'Dong Van',N'Huyện Đồng Văn',N'Dong Van District',N'dong_van',7,N'02' UNION ALL
select 792,N'027',N'Mèo Vạc',N'Meo Vac',N'Huyện Mèo Vạc',N'Meo Vac District',N'meo_vac',7,N'02' UNION ALL
select 793,N'028',N'Yên Minh',N'Yen Minh',N'Huyện Yên Minh',N'Yen Minh District',N'yen_minh',7,N'02' UNION ALL
select 794,N'029',N'Quản Bạ',N'Quan Ba',N'Huyện Quản Bạ',N'Quan Ba District',N'quan_ba',7,N'02' UNION ALL
select 795,N'030',N'Vị Xuyên',N'Vi Xuyen',N'Huyện Vị Xuyên',N'Vi Xuyen District',N'vi_xuyen',7,N'02' UNION ALL
select 796,N'031',N'Bắc Mê',N'Bac Me',N'Huyện Bắc Mê',N'Bac Me District',N'bac_me',7,N'02' UNION ALL
select 797,N'032',N'Hoàng Su Phì',N'Hoang Su Phi',N'Huyện Hoàng Su Phì',N'Hoang Su Phi District',N'hoang_su_phi',7,N'02' UNION ALL
select 798,N'033',N'Xín Mần',N'Xin Man',N'Huyện Xín Mần',N'Xin Man District',N'xin_man',7,N'02' UNION ALL
select 799,N'034',N'Bắc Quang',N'Bac Quang',N'Huyện Bắc Quang',N'Bac Quang District',N'bac_giang',7,N'02' UNION ALL
select 800,N'035',N'Quang Bình',N'Quang Binh',N'Huyện Quang Bình',N'Quang Binh District',N'quang_binh',7,N'02' UNION ALL
select 801,N'040',N'Cao Bằng',N'Cao Bang',N'Thành phố Cao Bằng',N'Cao Bang City',N'cao_bang',4,N'04' UNION ALL
select 802,N'042',N'Bảo Lâm',N'Bao Lam',N'Huyện Bảo Lâm',N'Bao Lam District',N'bao_lam',7,N'04' UNION ALL
select 803,N'043',N'Bảo Lạc',N'Bao Lac',N'Huyện Bảo Lạc',N'Bao Lac District',N'bao_lac',7,N'04' UNION ALL
select 804,N'045',N'Hà Quảng',N'Ha Quang',N'Huyện Hà Quảng',N'Ha Quang District',N'ha_quang',7,N'04' UNION ALL
select 805,N'047',N'Trùng Khánh',N'Trung Khanh',N'Huyện Trùng Khánh',N'Trung Khanh District',N'trung_khanh',7,N'04' UNION ALL
select 806,N'048',N'Hạ Lang',N'Ha Lang',N'Huyện Hạ Lang',N'Ha Lang District',N'ha_lang',7,N'04' UNION ALL
select 807,N'049',N'Quảng Hòa',N'Quang Hoa',N'Huyện Quảng Hòa',N'Quang Hoa District',N'quang_hoa',7,N'04' UNION ALL
select 808,N'051',N'Hoà An',N'Hoa An',N'Huyện Hoà An',N'Hoa An District',N'hoa_an',7,N'04';

set identity_insert dbo.districts off;