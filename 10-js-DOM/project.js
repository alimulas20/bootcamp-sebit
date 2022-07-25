// const button = document.querySelector('button');
//const button = document.querySelector('.buttonClass');
//const button = document.querySelector('#buttonId');

const button=document.getElementById('buttonId');
//console.log(button);
// button.addEventListener('click',()=>{
//     console.log("tıklandı");
// })
//birinci yöntem
// function add(){
//     console.log('tıklandı');
// }
console.log(button);

const liElements=document.querySelectorAll('li');
liElements.forEach(element => {
    element.addEventListener('click',e=>{
        //console.log(e.target);
        //console.log(e);
        e.target.style.color='blue';
        
    })
});
const ulDeğerlerim=document.querySelector('ul');
// console.log(ulDeğerlerim);
// ulDeğerlerim.remove();

liElements.forEach(element => {
    element.addEventListener('click',e=>{
        //console.log(e.target);
        //console.log(e);
        //e.target.style.color='blue';
        e.target.remove();
    }) 
});

//append //sona eleman ekler
//prepend //başa eleman ekler

button.addEventListener('click',()=>{
    const liElemanım= document.createElement('li');
    liElemanım.textContent="JavaScript";
    ulDeğerlerim.append(liElemanım);
    //ulDeğerlerim.prepend(liElemanım);

})
