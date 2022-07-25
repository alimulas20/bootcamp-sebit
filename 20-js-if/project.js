
//12den büyükse güçlü şifre
//8-12 arsı yeterli
//küçükse yetersiz


const yeniSifre='asdasdasdasd123';
if(yeniSifre.length>12)
{
    console.log("Şifre Güçlü");
}
else if(yeniSifre.length>=8&&yeniSifre.length<12)
{
    console.log('sifre yeterli')    
}
else{
    console.log('Şifreyi yeniden giriniz');
}