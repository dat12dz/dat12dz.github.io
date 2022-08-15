
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
     static VillaList = [];
}

//*
VillaDataBase.VillaList.push(new VillaDataBase("3213","QWERQWRE",20,0,"/5PN7100K.htm")); 
VillaDataBase.VillaList.push(new VillaDataBase("123123123","312312",6,2,"/villa/BaVi/5PN7100K.htm")); 
