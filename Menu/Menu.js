/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function menuCreate(menuList){
    let divElement = document.createElement('div');
    let ulElement = document.createElement('ul');
    let menuSelector = document.querySelector('.menu-button');
    divElement.classList.add('menu');
    for(let a = 0; a < menuList.length; a++){
        let liElement = document.createElement('li');
        liElement.textContent = menuList[a];
         ulElement.appendChild(liElement);
    }
    
    //let divMenu = document.querySelector('.menu');
    menuSelector.addEventListener('click', (e) => {
        divElement.classList.toggle('menu--open');
    })
    divElement.appendChild(ulElement);

    return divElement;
}

let menuSelector = document.querySelector('.header');

// menuSelector.addEventListener('click', (e) => {
//     e.target.classList.toggle('menu--open');
// })
const allTheMenu = menuCreate(menuItems);
menuSelector.appendChild(allTheMenu);

// let divMenu = document.querySelector('.menu');
// divMenu.addEventListener('click', (e) => {
//     e.target.classList.toggle('menu--open');
// })

// function menuCreate(menuList){
//     let divElement = document.createElement('div');
//     let ulElement = document.createElement('ul');
//     let menuSelector = document.querySelector('.menu-button');

//     divElement.classList.add('menu');
//     divElement.appendChild(ulElement);

//     let menuStuff = [];

//     menuStuff = menuList.map(
//         (item) => {
//             let liElement = document.createElement('li');
//             liElement.textContent = item[a];
//             return liElement;
//         }
//     )

//     for(let a = 0; a < menuStuff.length; a++){
//         ulElement.appendChild(menuStuff[a]);
//     }
//     // for(let a = 0; a < menuItems.length; a++){
//     //     const liElement = menuItems[a];
//     // }

//     menuSelector.addEventListener('click', (e) => {
//         e.target.classList.toggle('menu--open');
//     })
//     return
// }
/////////////////////////////////////////////////////
// let theMenuList = [];

// theMenuList = menuItems.map(
//     (item) => {
//         //let aComponent = componentCreate(item.title,item.date,item.firstParagraph,item.secondParagraph,item.thirdParagraph);
//         //return aComponent;

//         return menuCreate(item.title,item.date,item.firstParagraph,item.secondParagraph,item.thirdParagraph);
//     }
// )

// const theMenu = document.querySelector('.menu');

// for(let a = 0; a < menuItems.length; a++){
//     theMenu.appendChild(menuItems[a]);
// }
////////////////////////////////////////////////////////
//theMenu.appendChild(menuCreate(menuItems));



