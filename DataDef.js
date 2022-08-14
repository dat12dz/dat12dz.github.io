
const HoaBinh = 0,BaVi = 1,LuongSon=2,TamDao=3,HaLong = 4;
class VillaDataBase {
    constructor (VillaName, description, SoNguoi,Location,hrefLink)
    {
        this.VillaName = VillaName;
        this.description = description;
        this.SoNguoi = SoNguoi;
        this.Location = Location;
        this.hrefLink = hrefLink;
    }   
    static Filter()
    {
        
    }
     static VillaList =  [new VillaDataBase("5PN7100K","Villa này ở hà nội",5,BaVi,"/Villa/BaVi/5PN 7100K"),
                          new VillaDataBase("BAVII"," Villa này ở ba vì",5,BaVi,"/Villa/BaVi/5PN 7100K")] 
}

//*
VillaList.pop(new VillaDataBase("234234","QWERQWRE",6,0,"/villa/BaVi/5PN7100K.htm")); 
VillaList.pop(new VillaDataBase("123123123","312312",6,2,"/villa/BaVi/5PN7100K.htm")); 
