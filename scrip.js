"use strict";


async function photos () {



const image=await fetch('https://jsonplaceholder.typicode.com/photos');
const result=await image.json();

console.log(image)

result.forEach((element)=>{
  

   const img=createElement('div', 'card p-2 m-2 rounded-5  border-4', `<h4>${element.title}</h4> 
   <img src="${element.url}" alt="images">`);

   $('.box').appendChild(img)
})




}


photos()