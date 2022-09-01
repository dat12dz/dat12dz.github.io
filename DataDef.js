
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
VillaDataBase.VillaList.push(new VillaDataBase("5PN700K","HÓT HÓT NGUYÊN CĂN RIÊNG 5PN 7100K/20ng;",6,1,"Villa/BaVi/ST700K","Villa/BaVi/ST700K/FilePicture/5PN7100K.jpg",1000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BA VII","Vì mây không vội vã nên trời xanh 1 màu<br>Nếu anh k vội vã mình có kịp gặp nhau",10,1,"Villa/BaVi/BAVII","Villa/BaVi/BAVII/BAVII_files/image025.jpg",4500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Sơn Tây","Villa Sơn Tây cho đoàn 1530 người",15,1,"/Villa/BaVi/VILLASONTAY","/Villa/BaVi/VILLASONTAY/VILLASonTay/image015.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Thôn Muỗi Ba Vì","Tuyệt tác homestay nghỉ dưỡng MỚI tại Ba Vì<br>Là căn homestay BIỆT LẬP được thiết kế và xây dựng bằng công nghệ Nhà lắp ghép tiên tiến và hiện đại bao quanh bởi những đồi chè xanh mát bồng bềnh chắc chắn home sẽ là một trải nghiệm thật đặc biệt.<br>",16,1,"/Villa/BaVi/MoitaiBaVi","/Villa/BaVi/MoitaiBaVi/MoitaiBaVi/image034.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("SUN HILL VILLA","Xách Balo lên và đi <br>SUN HILL VILLA Ba Vì<br>Noi mang đen trai nghiem thu vi  <br>",8,1,"/Villa/BaVi/SUNHILLVILLA","/Villa/BaVi/SUNHILLVILLA/SUNHILLVILLABaVì/image022.jpg",6000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("GLORY RESORT","GLORY RESORT SƠN TÂY<br>Khu nghỉ dưỡng mới tinh dành cho cả gia đình ngay gần Hà Nội <br><br>",10,1,"/Villa/BaVi/GLORYRESORT","/Villa/BaVi/GLORYRESORT/GLORYRESORT/image024.jpg",8000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Việt Hòa Ba Vì","Nơi dừng chân cho ngày nghỉ thảnh thơi<br>Cách Hn 45km  ra mắt căn villa xinh xắn mang phong cách Nhật Bản hiện đại với nhiều góc check in chanh sả. <br>",10,1,"/Villa/BaVi/Noidungchannghingoithanhthoi","/Villa/BaVi/Noidungchannghingoithanhthoi/Noidungchanchonhungngaynghithanhthoi/image019.jpg",7500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Thôn Bơn Ba Vì","CHỈ TỪ 500K/NGƯỜI CHIẾC VILLA SIÊU TO KHUÔN VIÊN RỘNG 10000M2. BỂ BƠI SIÊU TO 200M2 FREE NHIỀU TIỆN ÍCH<br>Cả khu hơn 1 ha chỉ phục một đoàn khách bảo đảm nghỉ dưỡng riêng tư sử dụng dịch vụ Ko phải chờ đợi.<br>",20,1,"/Villa/BaVi/THÔNBƠNBAVÌ","/Villa/BaVi/THÔNBƠNBAVÌ/THÔNBONBAVÌ/image017.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Vân Hòa Ba Vì","Toạ lạc ở gần chân núi Ba Vì  Xã Vân Hoà  Ba Vì  Hà Nội <br>",20,1,"/Villa/BaVi/ToalacoganchannuiBaVi","/Villa/BaVi/ToalacoganchannuiBaVi/ToalacoganchannuiBaVì/image014.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Việt Yên Ba Vì","CÓ MỘT MỘC CHÂU NGAY GIỮA LÒNG HÀ NỘI<br> Khách đến The May Garden đặc biệt ấn tượng với không gian bao phủ bởi đồi chè xanh mát những ngôi nhà sắc màu ẩn hiện nhấp nhô trong đồi chè xanh ấy tạo cảm giác như chính bạn đang ở Mộc Châu vậy đó.",15,1,"/Villa/BaVi/ViệtYênBaVì","/Villa/BaVi/ViệtYênBaVì/ViệtYênBaVì/image029.jpg",10000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("THANG MÂY VILLAGE","Nho ngâm lâu sẽ thành men rượu<br>Thích anh nhiều liệu có thành người yêu...",5,1,"/Villa/BaVi/villabavi","/Villa/BaVi/villabavi/villabavi/image027.jpg",7000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Yên Bài Ba Vì","Bavi Nơi dừng chân cho ngày nghỉ thảnh thơi  <br>Địa chỉ xã Yên Bài huyện Ba Vì chỉ cách Hà Nội 35km",10,1,"/Villa/BaVi/YênBài","huyệnBaVì3PN2PN",1000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("MAP1","MAP1 căn siêu rộng<br>bể bơi bia phòng karaoke riêng sân chơi trẻ em",15,1,"/Villa/BaVi/MAP1ca","/Villa/BaVi/MAP1ca/Map  1ca/image019.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("VILLA DECORE","VILLA DECORE ĐẸP NHẤT KHU BIỆT THỰ ĐỒI MONACO CÓ BỂ BƠI RIÊNG ĐỈNH NHẤT HẠ LONG. ",10,0,"/Villa/BaVi/VILLADECORE","/Villa/BaVi/VILLADECORE/VILLADECORE/image017.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa Ba Vì","Villa Ba Vì<br>chốn bình yên và tĩnh lặng để cho ta tận hưởng cuộc sống yên ả với chi phí tiết kiệm<br> Villa nhỏ xinh trong khuôn viên 1000mchỉ cách 50km so với trung tâm thành phố. Villa có 3 phòng ngủ và 1 bungalow rộng kê nhiều giường  có tầng sân thượng thưởng trà và cà phê nhìn dãy núi Ba vì xa xa một địa điểm chill cuối tuần cho hội bạn bè lâu ngày không tụ tập <br>",16,0,"/Villa/BaVi/VILLABAVÌ","/Villa/BaVi/VILLABAVÌ/VILLABAVÌ/image025.jpg",5000000)); 
//* LAPK
LocationList.push("Ba Vì");
LocationList.push("Hòa Bình");
LocationList.push("Lương Sơn");
LocationList.push("Tam Đảo");
LocationList.push("Hạ Long");
