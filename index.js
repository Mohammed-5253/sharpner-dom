// console.log(document);
//console.dir(document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.URL);
// console.log(document.domain);
// document.title = "MAterial Lister";
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
//
// var headerTitles = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//
// console.log(headerTitles);
// header.style.backgroundColor = 'red';
// headerTitles.textContent = 'hello';
// headerTitles.innerText = 'very good';
// header.style.border = 'solid 3px #000';

// var item = document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor = 'green';
// for(let i =0; i<item.length; i++) {
//     item[i].style.fontWeight = 'bold';
// }
//li --item 5 is bold using tag name but not with class name
// var item = document.getElementsByTagName('li');
// item[2].style.backgroundColor = 'green';
// for(let i =0; i<item.length; i++) {
//     item[i].style.fontWeight = 'bold';
// }
//QUERY SELECTOR WHO WILL GRAB ONLY FIRST ONE

// var header = document.querySelector('#main-header');

// QUERY SELECTOR ALL WILL TAKE ALL NOT ONLY ONE
// var header = document.querySelectorAll('.list-group-item');
// console.log(header);
// header[2].style.color = 'green';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i =0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }
var itemList = document.querySelector('#items');

//parent node
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);

// parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//chile nodes
console.log(itemList.childNodes);

//childern
console.log(itemList.children);
console.log(itemList.children[1].style.color);

//firstchile
console.log(itemList.firstChild);

//first element child
console.log(itemList.firstElementChild.textContent);

//last child element
console.log(itemList.lastElementChild);

//next sibbling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
///there should be sibbling in first place

//previous sibling
console.log(itemList.previousElementSibling);

//create element
var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','hello');
var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

const headerTitle = document.querySelector('#header-title');
headerTitle.insertAdjacentHTML('beforebegin', '<p>Hello</p>');

const itemsList = document.querySelector('#items');
const firstItem = itemsList.firstElementChild;
firstItem.insertAdjacentHTML('beforebegin', '<li class="list-group-item">Hello Item 1</li>');
