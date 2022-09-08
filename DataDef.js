///*
const HoaBinh = 0,BaVi = 1,LuongSon=2,TamDao=3,HaLong = 4;



var LocationList = [];
///*
class VillaDataBase {
    constructor (VillaName, description, SoNguoi,Location,WebLink,MainPicLink,GiaTien)
    {
        this.VillaName = VillaName;
        this.description = description;
        this.SoNguoi = SoNguoi;
        this.Location = Location;
        this.WebLink = WebLink;
        this.MainPicLink = MainPicLink;
        this.GiaTien = GiaTien;
        
    }   
    static Filter()
    {
        
    }
     static VillaList = [];
}

//*
VillaDataBase.VillaList.push(new VillaDataBase("5PN","HÓT HÓT NGUYÊN CĂN RIÊNG 5PN 7100K/20ng ",20,1,"Villa/BaVi/ST700K","Villa/BaVi/ST700K/FilePicture/5PN7100K.jpg",7100000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BA VII","Vì mây không vội vã nên trời xanh 1 màu<br>Nếu anh k vội vã mình có kịp gặp nhau",10,1,"Villa/BaVi/BAVII","Villa/BaVi/BAVII/BAVII_files/image025.jpg",4500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Sơn Tây","Villa Sơn Tây cho đoàn 1530 người",15,1,"/Villa/BaVi/VILLASONTAY","/Villa/BaVi/VILLASONTAY/VILLASonTay/image015.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Thôn Muỗi","Tuyệt tác homestay nghỉ dưỡng MỚI tại Ba Vì<br>Là căn homestay BIỆT LẬP được thiết kế và xây dựng bằng công nghệ Nhà lắp ghép tiên tiến và hiện đại bao quanh bởi những đồi chè xanh mát bồng bềnh chắc chắn home sẽ là một trải nghiệm thật đặc biệt.<br>",16,1,"/Villa/BaVi/MoitaiBaVi","/Villa/BaVi/MoitaiBaVi/MoitaiBaVi/image034.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("SUN HILL VILLA","Xách Balo lên và đi <br>SUN HILL VILLA Ba Vì<br>Noi mang đen trai nghiem thu vi  <br>",8,1,"/Villa/BaVi/SUNHILLVILLA","/Villa/BaVi/SUNHILLVILLA/SUNHILLVILLABaVì/image022.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("GLORY RESORT","GLORY RESORT SƠN TÂY<br>Khu nghỉ dưỡng mới tinh dành cho cả gia đình ngay gần Hà Nội <br><br>",10,1,"/Villa/BaVi/GLORYRESORT","/Villa/BaVi/GLORYRESORT/GLORYRESORT/image024.jpg",8000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Việt Hòa","Nơi dừng chân cho ngày nghỉ thảnh thơi<br>Cách Hn 45km  ra mắt căn villa xinh xắn mang phong cách Nhật Bản hiện đại với nhiều góc check in chanh sả. <br>",10,1,"/Villa/BaVi/Noidungchannghingoithanhthoi","/Villa/BaVi/Noidungchannghingoithanhthoi/Noidungchanchonhungngaynghithanhthoi/image019.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Thôn Bơn","CHỈ TỪ500K/NGƯỜI CHIẾC VILLA SIÊU TO KHUÔN VIÊN RỘNG 10000M2. BỂ BƠI SIÊU TO 200M2 FREE NHIỀU TIỆN ÍCH<br>Cả khu hơn 1 ha chỉ phục một đoàn khách bảo đảm nghỉ dưỡng riêng tư sử dụng dịch vụ Ko phải chờ đợi.<br>",20,1,"/Villa/BaVi/THÔNBƠNBAVÌ","/Villa/BaVi/THÔNBƠNBAVÌ/THÔNBONBAVÌ/image017.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Vân Hòa","Toạ lạc ở gần chân núi Ba Vì  Xã Vân Hoà  Ba Vì  Hà Nội <br>",20,1,"/Villa/BaVi/ToalacoganchannuiBaVi","/Villa/BaVi/ToalacoganchannuiBaVi/ToalacoganchannuiBaVì/image014.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Việt Yên","CÓ MỘT MỘC CHÂU NGAY GIỮA LÒNG HÀ NỘI<br> Khách đến The May Garden đặc biệt ấn tượng với không gian bao phủ bởi đồi chè xanh mát những ngôi nhà sắc màu ẩn hiện nhấp nhô trong đồi chè xanh ấy tạo cảm giác như chính bạn đang ở Mộc Châu vậy đó.",15,1,"/Villa/BaVi/ViệtYênBaVì","/Villa/BaVi/ViệtYênBaVì/ViệtYênBaVì/image029.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("THANG MÂY VILLAGE","Nho ngâm lâu sẽ thành men rượu<br>Thích anh nhiều liệu có thành người yêu...",5,1,"/Villa/BaVi/villabavi","/Villa/BaVi/villabavi/villabavi/image027.jpg",7000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Yên Bài","Bavi Nơi dừng chân cho ngày nghỉ thảnh thơi  <br>Địa chỉ xã Yên Bài huyện Ba Vì chỉ cách Hà Nội 35km",10,1,"/Villa/BaVi/YênBài","huyệnBaVì3PN2PN",1000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("MAP1","MAP1 căn siêu rộng<br>bể bơi bia phòng karaoke riêng sân chơi trẻ em",15,1,"/Villa/BaVi/MAP1ca","/Villa/BaVi/MAP1ca/Map1ca/image019.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("VILLA DECORE","VILLA DECORE ĐẸP NHẤT KHU BIỆT THỰ ĐỒI MONACO CÓ BỂ BƠI RIÊNG ĐỈNH NHẤT HẠ LONG. ",10,4,"/Villa/BaVi/VILLADECORE","/Villa/BaVi/VILLADECORE/VILLADECORE/image017.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Ba Vì","Villa Ba Vì<br>chốn bình yên và tĩnh lặng để cho ta tận hưởng cuộc sống yên ả với chi phí tiết kiệm<br> Villa nhỏ xinh trong khuôn viên 1000mchỉ cách 50km so với trung tâm thành phố. Villa có 3 phòng ngủ và 1 bungalow rộng kê nhiều giường  có tầng sân thượng thưởng trà và cà phê nhìn dãy núi Ba vì xa xa một địa điểm chill cuối tuần cho hội bạn bè lâu ngày không tụ tập <br>",16,1,"/Villa/BaVi/VILLABAVÌ","/Villa/BaVi/VILLABAVÌ/VILLABAVÌ/image025.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("HESTIA LUXURY VILLA","HESTIA LUXURY VILLA  Bếp lửa nồng ấm.<br>Hestia Luxury Villa nam trong quan the 10.000m2 voi khuon vien rong rai view ho tua may nui Ba Vì. <br>Thiet ke noi that tinh te hien đai mau sac tre trung tao cam giac moi me cung vo van dich vu đa dang hien đai cho ban trai nghiem sang chảnh va hai long nhat. ",6,1,"/Villa/BaVi/HESTIA","/Villa/BaVi/HESTIA/HESTIA/image016.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("LOTUS VILLA","LOTUS VILLA BA VÌ<br> Villa 22 2 phòng dorm 3 phòng đôi 6 nhà vệ sinh phòng khách và bếp. Có thể thêm tối đa 4 người lớn ",20,1,"/Villa/BaVi/LOTUS","/Villa/BaVi/LOTUS/LOTUS.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("PN5","Mời khách đặt villa nhà em nhé.<br>Trình làng em villa siêu xịn sò mới ra lò luôn nhé.",10,5,"/Villa/ĐàNẵng/PN5","/Villa/ĐàNẵng/PN5/PN5/image016.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("TIA WELLNESS RESORT","TIA WELLNESS RESORT 5 SAO SANG CHẢNH BẬC NHẤT ĐÀ NẴNG",10,5,"/Villa/ĐàNẵng/TIA","/Villa/ĐàNẵng/TIA/TIAWELLNESS/image025.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("2PN","Căn villa 2PN tại Hoà Bình xịn sò con bò vàng mà giá siêu cute <br>Với khuôn viên tổng thể rộng lớn nơi núi đồi xanh mát soi bóng dưới mặt hồ khí hậu mát mẻ trong lành quanh năm tổ hợp nghỉ dưỡng đầy đủ tiện ích giải trí thư giãn là một điểm đến hấp dẫn cho mỗi kì nghỉ cuối tuần của gia đình",4,0,"/Villa/HòaBình/2PN","/Villa/HòaBình/2PN/2PN/image025.jpg",3000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Chăm mắt","HÀNG NÓNG HOT HIT SÓT <br>Cách Hà Nội chỉ hơn 60km xuất hiện 1 căn villa theo phong cách hiện đại đẳng cấp sang trọng với đầy đủ tiện nghi. Thiết kế không gian mở đem lại cảm giác thoải mái trong chuyến đi nghỉ dưỡng cùng gia đình bạn bè và những người xung quanh. Diện tích rộng 1500m2 3 tang với 450m2 su dung.<br>",16,0,"/Villa/HòaBình/Chammat","/Villa/HòaBình/Chammat/Chammat/image014.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("LAKESIDE","LAKESIDE VILLA Chạm để nhớ<br>Chỉ với một cái chạm để được nhớ ghi từng khoảnh khắc.<br>",10,0,"/Villa/HòaBình/LAKESIDE","/Villa/HòaBình/LAKESIDE/LAKESIDEVILLA/image007.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Flamingo Đại Lải Resort","Villa 3pn flamingo Đại Lải Resort",10,6,"/Villa/VĩnhPhucs/Flamingo","/Villa/VĩnhPhucs/Flamingo/Flamingo/image005.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("3PN","ĐỊA ĐIỂM NGHỈ DƯỠNG KHÔNG THỂ BỎ LỠ TẠI AMAZING HOME  VILLA THÁC NƯỚC VIEW HỒ VIP TẠI VENUS FLAMINGO. VILLA ĐƯỢC CHỦ ĐẦU TƯ TỈ MỈ TỪNG CHI TIẾT NỘI THẤT ROYAL NHẬP KHẨU 100",10,6,"/Villa/VĩnhPhucs/3PN","/Villa/VĩnhPhucs/3PN/3PN/image031.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Khu làng Nhật Bản","Chỉ 300k/vé/người du ngoạn tại khu làng Nhật Bản ",20,2,"/Villa/LươngSon/Japan","/Villa/LươngSon/Japan/Japan/image041.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Ninh Van Bay","Trông rất Six Senses Ninh Van Bay nhưng mà lại là Villa ở ngay Lương Sơn Hoà Bình có cầu trượt từ phòng ngủ thẳng ra bể bơi",15,2,"/Villa/LươngSon/NinhVanBay","",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Gò Trạng Homestay","Điểm nhấn của Homestay chính là view cánh đồng lúa và dãy núi trước bể bơi làm cho quý khách như được thả hồn vào không gian hùng vĩ mà ko cần phải đi quá xa Hà Nội mới có được.",20,2,"/Villa/LươngSon/GòTrang","/Villa/LươngSon/GòTrang/GòTrang/image027.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("E58 Villa","Mỗi sáng thức dậy tôi lại mỉm cười và hai mươi tư tiếng hạnh phúc sẽ ở ngay trước mắt tôi. Tôi nguyện sống trọn vẹn ý nghĩa cho từng giây và nhìn mọi điều bằng ánh mắt nhân ái. <br>",20,3,"/Villa/TamĐảo/E58Villa","/Villa/TamĐảo/E58Villa/Picture/image080.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("PRAHA VILLA","PRAHA VILLA<br>Đia chi C79 Sân Golf Tam Đảo ",15,3,"/Villa/TamĐảo/PRAHAVILLA","/Villa/TamĐảo/PRAHAVILLA/Picture/image018.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa sân Golf","VILLA GIÁ RẺ NHẤT SÂN GOLF TAM ĐẢO<br>Địa chỉ Sân golf Tam Đảo",18,3,"/Villa/TamĐảo/SânGolfTamĐảo","",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Tam Đảo trên mây","Phát hiện 1 chiếc phòng xinh giá chỉ từ 250k/ người",16,3,"/Villa/TamĐảo/TamDao","/Villa/TamĐảo/TamDao/Picture/image042.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("USPACE VILLA","USPACE VILLA<br>Nam trong khu san golf Tam Đao",10,3,"/Villa/TamĐảo/USPACEVILLA","/Villa/TamĐảo/USPACEVILLA/Picture/image011.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa trung tâm Tam Đảo","Villa ngay trung tâm thị trấn Tam Đảo",15,3,"/Villa/TamĐảo/VillangaytrungtâmthịtrấnTamĐảo","/Villa/TamĐảo/VillangaytrungtâmthịtrấnTamĐảo/Picture/image017.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("VILLA TAM ĐẢO HT160","THIÊN ĐƯỜNG EM AO ƯỚC<br>VILLA NHÀ KÍNH TAM ĐẢO HT160<br>",20,3,"/Villa/TamĐảo/VILLANHÀKÍNHTAMĐẢO","/Villa/TamĐảo/VILLANHÀKÍNHTAMĐẢO/Picture/image022.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("VILLA TAM ĐẢO HT112","VILLA HT112 CÓ 5PN TẠI SÂN GOL TAM ĐẢO VỚI SỨC CHỨA 1425 NGƯỜI",12,3,"/Villa/TamĐảo/VILLATAMĐẢO","/Villa/TamĐảo/VILLATAMĐẢO/Picture/image015.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("An Viên Villa","An Viên Villa<br>Villa bên hồ với lối thiết kế mở hoà mình với thiên nhiên trước mặt là hồ nước xanh bao quanh bởi núi rừng",12,7,"/Villa/SócSơn/AnViênVilla","/Villa/SócSơn/AnViênVilla/Picture/image022.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Bobby Villa"," Biệt thự Bobby Villa view núi 10PN",20,7,"/Villa/SócSơn/BobbyVilla","/Villa/SócSơn/BobbyVilla/Picture/image013.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("COSY HOUSE","COSY HOUSE  VILLA<br>Riêng tư và hiện đại kiến trúc tưởng chừng đơn giản nhưng lại thơ mộng không ngờ và tiện nghi bậc nhất.",20,7,"/Villa/SócSơn/COSYHOUSE","/Villa/SócSơn/COSYHOUSE/Picture/image008.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Lâm Trường Villa","VILLA<br>Địa chỉ thôn Lâm Trường  xã Minh Phú  Sóc Sơn  HN",12,7,"/Villa/SócSơn/LâmTruong","/Villa/SócSơn/LâmTruong/Picture/image032.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Hồ Đồng Đò","CĂN VILLA VIEW HỒ 15 PHONG NGỦ SIÊU TỎ KHỔNG LỒ CHO ĐOÀN ĐÔNG<br>Mô tả  <br>Tổng quan khuôn viên 2 Khu villa riêng biệt với 15 phòng ngủ 02 khu bếp  1 phòng khách lớn trên khuôn viên m2 View Hồ và Sân cỏ m2 thiết kế nhìn thẳng ra hồ bao quanh nhà là các loại hoa nở quanh năm có các điểm selfie siêu đẹp.Đến đây bạn sẽ có 102 bức ảnh tuyệt vời nhất",20,7,"/Villa/SócSơn/HồĐồngĐò","/Villa/SócSơn/HồĐồngĐò/Picture/image054.jpg",20000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Island House","Chỉ 40km di chuyển từ trung tâm Hà Nội cách sân bay Nội Bài 15km các bạn đã có thể đến một không gian biệt lập cách xa ồn ào khói bụi thả hồn vào không gian xanh mướt hòa mình với thiên nhiên hồ nước núi non nơi đây ",12,7,"/Villa/SócSơn/IslandHouse","/Villa/SócSơn/IslandHouse/Picture/image017.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("KAO Homestay","KAO Homestay 6PN<br>Địa chỉ Xóm Núi cổng 1 xã Minh Phú Sóc Sơn Hà Nội ",20,7,"/Villa/SócSơn/KAOHomestay","",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("LAKEVIEW VILLA","LAKEVIEW VILLA <br>Đia chi thon Lam Truong  xa Minh Phu  Soc Son  HN ",16,7,"/Villa/SócSơn/LAKEVIEWVILLA","/Villa/SócSơn/LAKEVIEWVILLA/Picture/image022.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Lavita 2","Lavita Villa nằm trọn tại trung tâm của hồ Đồng Đò trong xanh quanh năm ",20,7,"/Villa/SócSơn/Lavita2","/Villa/SócSơn/Lavita2/Picture/image029.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Hồ Phú Nghĩa Sóc Sơn Villa","CĂN BIỆT THỰ VIEW HỒ SIÊU LUNG LINH BỂ BƠI CỰC LỚN  SÓC SƠN<br>Toạ lạc Minh Phú  Sóc Sơn",20,7,"/Villa/SócSơn/SOCSON","/Villa/SócSơn/SOCSON/Picture/image016.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Minh Phú Sóc Sơn Villa","Tọa lạc tại Minh Phú Sóc sơn. Cho thuê nguyên căn phù hợp cho nhóm 2035 người. Với nhiều tiện ích giải trí đa dạng.",20,7,"/Villa/SócSơn/TọalạctạiMinhPhúSócSơn","/Villa/SócSơn/TọalạctạiMinhPhúSócSơn/Picture/image017.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("5PN Sóc Sơn","VILLA 5PN  ",20,7,"/Villa/SócSơn/VILLA5PN","",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Sóc Sơn 4PN","Villa Sóc Sơn 4PN<br>Tọa lạc ngay Hồ Đồng Đò Sóc Sơn villa sóc Sơn là 1 Khu sinh thái hấp dẫn du khách bởi khi đến đây ta như được sống lại với tích truyện nổi tiếng gắn liền với vị anh hùng Tứ bất tử.",20,7,"/Villa/SócSơn/VillaSócSơn4PN","/Villa/SócSơn/VillaSócSơn4PN/Picture/image025.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("AN BOOKING VILLA","GÓC GIÀNH CHO 4  8 NGƯỜI CĂN VILLA SÓC SƠN SIÊU XINH <br>Anh có yêu em không<br>Anh có muốn về nhà với em không<br>Một ngôi nhà đầy mộng mơ bao phủ cây xanh lâu năm với không gian đầy chất thơ",8,7,"/Villa/SócSơn/ANBOOKINGVILLA","/Villa/SócSơn/ANBOOKINGVILLA/Picture/image011.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa hồ Đồng Đò Sóc Sơn","Villa hồ Đồng Đò Sóc Sơn ",15,7,"/Villa/SócSơn/VILLAĐỒNGĐÒSÓCSƠN","/Villa/SócSơn/VILLAĐỒNGĐÒSÓCSƠN/Picture/image031.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa hồ Đồng Đò 2","Villa nằm yên bình ngay bên hồ Đồng Đò thơ mộng",20,7,"/Villa/SócSơn/VillahồĐồngĐò2","/Villa/SócSơn/VillahồĐồngĐò2/Picture/image016.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa hồ Đồng Đò Sóc Sơn 6PN","VILLA HỒ ĐỒNG ĐÒ SÓC SƠN <br>Cách trung tâm Hà Nội khoảng 40km mot đia điem nghi duong cuc Chill vừa hiện đại tiện nghi hoà mình vào thiên nhiên cảnh sắc tại Hồ Đồng Đò tạo nên một nơi gắn kết gia đình bạn bè lý tưởng",15,7,"/Villa/SócSơn/VILLAHỒĐỒNGĐÒSÓCSƠN","/Villa/SócSơn/VILLAHỒĐỒNGĐÒSÓCSƠN/Picture/image020.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BENN VILLA","SIÊU BIỆT THỰ BENN VILLA  TUẦN CHÂU ",20,4,"/Villa/HạLong/BENNVILLA","/Villa/HạLong/BENNVILLA/Picture/image018.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Sóc Sơn","VILLA SÓC SƠN",20,7,"/Villa/SócSơn/VILLASÓCSƠN","/Villa/SócSơn/VILLASÓCSƠN/Picture/image011.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("B23 Greenbay Village","Villa 05 Phòng Ngủ Toạ Lạc Giữa Trung Tâm TP Hạ Long ",12,4,"/Villa/HạLong/B23GreenbayVillage","/Villa/HạLong/B23GreenbayVillage/Picture/image018.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BEVERLY HILLS","BEVERLY HILLS HẠ LONG. TLuxury Villa",20,4,"/Villa/HạLong/BEVERLYHILLS","/Villa/HạLong/BEVERLYHILLS/Picture/image039.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Bãi Cháy","VILLA BÃI CHÁY VIEW BIỂN BỂ BƠI RIÊNG<br>Trình làng 1 căn villa bể bơi riêng 5 phòng ngủ mới tinh thuộc Bevely Hill Bãi Cháy view biển. Có phòng xông hơi bàn bia xịn sò hết nút.",20,4,"/Villa/HạLong/BEVERLYHILLSRESORT","/Villa/HạLong/BEVERLYHILLSRESORT/Picture/image019.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa 5PN","Căn Villa 5 PN với View siêu hót hít nội thất sang trọng",20,4,"/Villa/HạLong/CănVilla5PN","/Villa/HạLong/CănVilla5PN/Picture/image009.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Đảo Rều Villa","Căn Villa đi bộ 3 phút là tới biến bể bơi riêng siêu sang xịn mịn...<br>VILLA 7 phong ngu. Phu hop cho đai gia đinh so luong nguoi đi du lich đoàn.",20,4,"/Villa/HạLong/ĐảoRều","/Villa/HạLong/ĐảoRều/Picture/image011.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("DLIORO HOTEL RESORT","DLIORO HOTEL RESORT  HẠ LONG",5,4,"/Villa/HạLong/DLIOROHOTEL","/Villa/HạLong/D'LIOROHOTEL/Picture/image018.jpg",8000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("ĐỒI BEVERLY HILLS","CĂN VILLA NGỰ TRÊN ĐỒI BEVERLY HILLS<br>ÔM TRỌN CẦU BÃI CHÁY  VỊNH HẠ LONG",16,4,"/Villa/HạLong/ĐỒIBEVERLYHILLS","/Villa/HạLong/ĐỒIBEVERLYHILLS/Picture/image033.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("PN5 FLC","",10,4,"/Villa/HạLong/FLC","/Villa/HạLong/FLC/Picture/image045.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("GRANDBAY VILLA","6PN GRANDBAY VILLA",20,4,"/Villa/HạLong/GRANDBAYVILLA","/Villa/HạLong/GRANDBAYVILLA/Picture/image017.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("HA 75 Little Việt Nam","Một căn Homestay hòa mình vào thiên nhiên nằm giữa Trung Tâm TP.Hạ Long sẽ khiến các bạn có những kỷ niệm không bao giờ quên",15,4,"/Villa/HạLong/HA75LittleVietNam","/Villa/HạLong/HA75LittleVietNam/Picture/image027.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("HA 55 Little Việt Nam","Căn Villa hoà mình cùng thiên nhiên là một sự lựa chọn hoàn hảo để bạn có trải nghiệm tuyệt vời cùng gia đình bạn bè tại Hạ Long  kỳ quan thiên nhiên thế giới. ",10,4,"/Villa/HạLong/LittleViệtNam","/Villa/HạLong/LittleViệtNam/Picture/image019.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Movenpick Villa","Movenpick Villa Tuần Châu Hạ Long  10 P.Ngủ  BỂ BƠI RIÊNG BÃI BIỂN RIÊNG <br>VỊ TRÍ Đảo Tuần Châu  Hạ Long  QN<br>Tổ chức pool party thì chỉ có đỉnh của đỉnh thôi ạ",20,4,"/Villa/HạLong/MovenpickVilla","/Villa/HạLong/MovenpickVilla/Picture/image008.jpg",18000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("PENTHOUSE","Bay về đâu hỡi chim trời trắng<br>Penthouse một chút có màng chăng<br>PENTHOUSE  ĐẲNG CẤP NHẤT HẠ LONG",20,4,"/Villa/HạLong/PENTHOUSE","/Villa/HạLong/PENTHOUSE/Picture/image028.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("ROSALIA VILLA","Căn biệt thự bể bơi tầng thượng của bà chủ Spa trẻ lớn nhất Hạ Long<br>ROSALIA VILLA 6PN BỂ BƠI RIÊNG TRUNG TÂM HẠ LONG",18,4,"/Villa/HạLong/ROSALIAVILLAS","/Villa/HạLong/ROSALIAVILLAS/Picture/image008.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("S  HILL VILLA","S  HILL VILLA  Sunset on the Hill",20,4,"/Villa/HạLong/SHILLVILLA","/Villa/HạLong/SHILLVILLA/Picture/image018.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("The Maris Ha Long","Phải Check In ở Villa Củ Nghệ mới được. Mình thèm không chịu nổi không thể chịu nổi nữa rồi<br>The Maris Ha Long  Villa Củ Nghệ",15,4,"/Villa/HạLong/TheMarisHaLong","/Villa/HạLong/TheMarisHaLong/Picture/image022.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Trung tâm TP.Hạ Long","Villa hòa mình vào thiên nhiên mới toanh tại Hạ Long view biển sang chảnh cực đẹp",15,4,"/Villa/HạLong/TrungtâmHạLong","/Villa/HạLong/TrungtâmHạLong/Picture/image031.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Hạ Long","Mang theo 1 chút nắng về tới Hạ Long...<br>Khách mình check in cực xinh tại Villa.",10,4,"/Villa/HạLong/villa","/Villa/HạLong/villa/Picture/image016.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("9 PN TT407 Beverly Hills","Villa 9 PN TT407 có bể bơi 80m tại Beverly Hill Hạ Long . ",18,4,"/Villa/HạLong/Villa9PNTT4BEVERLYHILLS","/Villa/HạLong/Villa9PNTT4BEVERLYHILLS/Picture/image024.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa FLC 101","VILLA 5PN BỂ BƠI RIÊNG VỚI NỘI THẤT MỚI SIÊU XỊN MỊN<br>Mã Villa FLC 101",15,4,"/Villa/HạLong/VILLAFLC101","/Villa/HạLong/VILLAFLC101/Picture/image023.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BT912 FLC Villa","Nội thất thiết kế sang trọng đặc biệt có phòng Karaoke riêng Mã BT912",19,4,"/Villa/HạLong/VILLAFLCBT912","/Villa/HạLong/VILLAFLCBT912/Picture/image015.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BT6A01 FLC Villa","Toa lac o vi tri đac đia đuoc coi la manh đat đat đo nhat noi tinh hoa nui troi noi hoi tu đang cap bac nhat cua gioi thuong luu. BT6A01 chắc chắn là lựa chọn tuyệt vời nhất đẳng cấp nhất cho kì nghỉ của quý khách tại mảnh đất Hạ Long xinh đep.<br>Mã Villa BT6A01",19,4,"/Villa/HạLong/VILLAFLCBT6A01","/Villa/HạLong/VILLAFLCBT6A01/Picture/image024.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BT6B28 FLC Villa","BT6B28 VILLA FLC HẠ LONG 6PN BỂ BƠI RIÊNG",17,4,"/Villa/HạLong/VILLAFLCHALONG6PN","/Villa/HạLong/VILLAFLCHALONG6PN/Picture/image012.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Homestay Khách Sạn Hạ Long Quảng Ninh","Mùa Đông đến rồi các bạn đã lên kế hoạch cho gia đình bạn bè người thân mình đi chơi và chill ở đâu chưa.<br>Hãy để hệ thống Villa Homestay Khách Sạn Hạ Long Quảng Ninh làm điều đó cùng các bạn nhé.",10,4,"/Villa/HạLong/VillaHomestayKháchSạnHạLongQuảngNinh","/Villa/HạLong/VillaHomestayKháchSạnHạLongQuảngNinh/Picture/image013.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Ocean View Villa","Một bước chân tới biển villa có bể bơi trong nhà đẹp nhất Hạ Long <br>Villa OceanView Ha Long ",20,4,"/Villa/HạLong/VillaOceanViewHaLong","/Villa/HạLong/VillaOceanViewHaLong/Picture/image043.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Tuần Châu"," Villa Tuần Châu 7 Phòng ngủ bể bơi riêng View biển.",20,4,"/Villa/HạLong/VillaTuầnChâu","/Villa/HạLong/VillaTuầnChâu/Picture/image010.jpg",10000000)); 
//* LAPK
LocationList.push("Hòa Bình");
LocationList.push("Ba Vì");
LocationList.push("Lương Sơn");
LocationList.push("Tam Đảo");
LocationList.push("Hạ Long");
LocationList.push("Đà Nẵng");
LocationList.push("Phúc Yên");
LocationList.push("Sóc Sơn");
