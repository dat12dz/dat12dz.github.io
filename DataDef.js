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
VillaDataBase.VillaList.push(new VillaDataBase("Đạt Đậu","Tôi tên kalf đaua<br>dsfdasfsffdasfafsadf",6,1,"/villa/BaVi/5PN7100K.htm","/villa/BaVi/5PN7100K_files/image013.jpg",1000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BaVi","Khách sạn này ở ba vì và có rất nhiều cảnh đẹp",6,1,"/villa/BaVi/BAVII.htm","/villa/BaVi/5PN7100K_files/image014.jpg",5000000));
VillaDataBase.VillaList.push(new VillaDataBase("BaVi","Khách sạn này ở ba vì và có rất nhiều cảnh đẹp",6,1,"/villa/BaVi/BAVII.htm","/villa/BaVi/5PN7100K_files/image014.jpg",5000000)); 
VillaDataBase.VillaList.push(new VillaDataBase("BaVi","Đạt Đẹp zai",6,5,"/villa/BaVi/BAVII.htm","/villa/BaVi/5PN7100K_files/image014.jpg",5000000));  

//* LAPK
LocationList.push("Hoà Bình");
LocationList.push("Ba Vì");
LocationList.push("Lương Sơn");
LocationList.push("Tam Đảo");
LocationList.push("Hạ Long");
LocationList.push("Đà Lạt");

