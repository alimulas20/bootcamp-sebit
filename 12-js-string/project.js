let ad="alim";
let soyad="ulaş";
let adsoyad=ad+" "+ soyad;
console.log(adsoyad);
console.log(adsoyad[1]);

console.log(adsoyad.length);

//string metodlar

console.log(adsoyad.toUpperCase());
console.log(adsoyad.toLowerCase());

//index number
let adsoyad2="zekariya duranel";
let index=adsoyad2.indexOf('a');
let indexlast=adsoyad2.lastIndexOf('a');
console.log(index);
console.log(indexlast);
//slicing
let ilkisim=adsoyad2.slice(0,8);
console.log(ilkisim);

//replace
let adsoyad3="alim ulaş 111"
let yerdeğiştir=adsoyad3.replace(" ","");
console.log(yerdeğiştir);
let yerdeğiştir2=adsoyad3.replaceAll(" ","");
console.log(yerdeğiştir2);
