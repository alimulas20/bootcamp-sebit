const isimler=['can','rıdvan','elif'];
//kendisini değil içini değiştiriyoruz o yüzden const soru çıkarmıyor

console.log(isimler[0]);

//isimler[1]='osman';
console.log(isimler);


let yaslar =[ 43,5,6,30];
console.log(yaslar[3]);


let rasgele=['can','boz',10,15];
console.log(rasgele);

//eleman sayısı
console.log(rasgele.length);


let tireli=isimler.join('-');
console.log(tireli);

console.log(isimler.join(', '));

let sıra=isimler.indexOf('elif');
console.log(sıra);

//concat ana diziyi değiştirmiyor

let eklenmiş=isimler.concat(['osman','merve']);
console.log(eklenmiş);
console.log(isimler);

isimler.push('leyla');
console.log(isimler);
isimler.pop();
console.log(isimler);