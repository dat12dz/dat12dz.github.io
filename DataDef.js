
const HoaBinh = 1,BaVi = 2,LuongSon=3,TamDao=4,HaLong = 5;
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
     static VillaList =  [new VillaDataBase("5PN 7100K"," Villa này ở hà nội",5,LuongSon,"/Villa/BaVi/5PN 7100K")] 

}




