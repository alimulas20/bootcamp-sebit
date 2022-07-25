for(let i=0;i<10;i++)
{
    console.log(i);
}

let adSoyad=['can','tugce','elif'];

for(let i=0;i<adSoyad.length;i++){
    console.log(adSoyad[i]);
}

adSoyad.forEach(element => {
    console.log(element);
});
//angular ngFor atası
const degerler=[10,20,30,40,50];
for(let deger of degerler)
{
    console.log(deger)
}