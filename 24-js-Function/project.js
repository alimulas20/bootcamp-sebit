function hello(){
    console.log("hello");
}

hello();
hello();
hello();


//fonsiyonalara parametre gönderme

const canboz=function (ad="Can",soyad="Boz"){
    console.log(`Ad Soyad ${ad} ${soyad}`);
}

canboz('alim','ulaş');
canboz();
//eski tip arrow geçişi
const karealani=function(kenar){
    return kenar*kenar;
}

let sonuc=karealani(6);
console.log(sonuc);

//arrow ilk versiyon
// const karealanim=(kenar)=>{
//     return kenar**2;
// }
//tek parametre ise
// const karealanim= kenar =>{
//     return kenar**2;
// }
//tek satır dönüş varsa
const karealanim= kenar=>kenar**2;
console.log(karealanim(7));
// const donus=()=>{
//     return "Burak";
// }
const stringDonus=()=>"Burak";
console.log(stringDonus());



//ürünleri ham fiyatı verilip vergili halini bulan hesaplama

const urunSatıs=function(urunler,vergi){
    let toplam=0;
    for(let i=0;i<urunler.length;i++){
        toplam+= urunler[i]+urunler[i]*vergi;
    }
    return toplam;
}


console.log(urunSatıs([10,20,30],0.25));

const urunSatıs2=(urunler,vergi)=>{
    let toplam=0;
    for(let i=0;i<urunler.length;i++){
        toplam+= urunler[i]+urunler[i]*vergi;
    }
    return toplam;
}

console.log(urunSatıs2([10,20,30],0.25));
