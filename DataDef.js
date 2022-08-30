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
VillaDataBase.VillaList.push(new VillaDataBase("5PN700K","HÓT HÓT NGUYÊN CĂN RIÊNG 5PN 7100K/20ng ",6,1,"Villa/BaVi/ST700K","Villa/BaVi/ST700K/FilePicture/5PN7100K.jpg",1000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BA VII","Vì mây không vội vã nên trời xanh 1 màu<br>Nếu anh k vội vã mình có kịp gặp nhau",10,1,"Villa/BaVi/BAVII","Villa/BaVi/BAVII/BAVII_files/image025.jpg",4500000)); 
VillaDataBase.VillaList.push(new VillaDataBase("Villa không xác định","",0,-1,"/Villa/BaVi/villaluongson","",1000000)); 
//* LAPK
LocationList.push("Hoà Bình");
LocationList.push("Ba Vì");
LocationList.push("Lương Sơn");
LocationList.push("Tam Đảo");
LocationList.push("Hạ Long");
