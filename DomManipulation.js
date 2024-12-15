//  DOM is JS (document object model)
// let div = document.getElementById('box');
// div.style.backgroundColor = 'lightblue';


// let para = document.getElementById('message');
// para.innerText = "Hello World!";

// let btn = document.getElementsByTagName('button');
// btn.visibility = 'hidden';

// selecting with class name 
// let card = document.getElementById('card');
// card.innerText = "This is box";


// let paras = document.querySelectorAll('.para');

// for(i of paras){
//     i.style.color= 'green';
// }


// let boxes = document.querySelectorAll('.box');
// boxes.forEach((box) =>{
//    box.style.border = "2px solid red";
// });


// let lists = document.querySelectorAll('.list-item');
// lists[0].style.backgroundColor = 'yellow';
// console.log(lists[0]);

// let headings = document.querySelectorAll('h1');
// headings.forEach((head) => {
//     head.style.border = '1px solid black';
// })


// let lists = document.querySelectorAll('li');
// lists.forEach((list) => {
//     list.style.backgroundColor = 'lightGrey';
// })


// Attributes 
// let bt = document.querySelector('button');
// console.log(bt.getAttribute('class'));
// console.log(bt.getAttribute('id'));

// let img = document.querySelector('img');
// console.log(img);
// console.log(img.setAttribute('src','new.jpg'));

// let para = document.querySelector('p');
// para.style.color="red";
// para.style.backgroundColor="yellow";

// let div = document.querySelector('.box');
// div.setAttribute('title','Hello World');

// let list = document.querySelector('li');
// list.style.color= "blue";
// list.style.fontSize ="20px";


// const images = document.querySelectorAll('.images img');
// images.forEach((img, idx) =>{
//    const altText = img.getAttribute('alt');
//    if (altText === ''){
//     img.setAttribute('alt','defultAlt');
//     console(`Image ${idx + 1}: Alt was missing, set to "Default Alt"`);
//    }
//    else{
//     console(`Image ${idx + 1}: Alt is "${altText}"`);
//    }
// });



// let el = document.createElement('li');
// el.innerText ='New List';
// let list = document.querySelector('li');
// list.prepend(el);


// body.append(el);
// el.innerText = 'Hello World';

// let li = document.querySelectorAll('li');

// let ul = document.querySelector('ul');
// ul.remove(li);


// let el = document.createElement('snap');
// el.innerText='SpanTag';
// heading.before(el);



// el.innerText= 'Click Me';
// div.append(el);

// el.innerText = "Heading";
// para.after(el);


// create elements

