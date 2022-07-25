let yarıçap=15;
const piSayısı=3.14;

let daireAlanı=piSayısı*yarıçap**2;
console.log(daireAlanı);

let kalan=yarıçap % 4;
console.log(kalan);
let sonuc=6*(15-4)**2;
console.log(sonuc);

//sayı arttırma sayı++ ile ++sayı farkı
let sayı =13;
// sayı++;
// ++sayı;
console.log(sayı);
let sayım=sayı++;
console.log("Sayım",sayım);
let sayımYeni= ++sayı;
console.log("sayım Yeni",sayımYeni);

//NaN

console.log(15/4);
console.log(15/"can");
console.log(15*"can");
 let birliştirme="dersi "+sayı+" kere tekrar ettim."
 console.log(birliştirme);