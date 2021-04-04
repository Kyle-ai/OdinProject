
//1.a <p> with red text that says “Hey I’m red!”
//2.an <h3> with blue text that says “I’m a blue h3!”
//3.a <div> with a black border and pink background color with the following elements inside of it:
//4.another <h1> that says “I’m in a div”
//5.a <p> that says “ME TOO!”
//  Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
const container = document.querySelector('#container');
let content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey I\'m red!';
container.appendChild(content);
content.style.color='red';

let newContent = document.createElement('h3');
newContent.classList.add('newContent');
newContent.textContent = 'I\'m a blue h3!'
container.appendChild(newContent);
newContent.style.color='blue';

let div1 = document.createElement('div');
div1.classList.add('div1');
div1.style.borderStyle = 'solid';
div1.style.backgroundColor = 'pink';
container.appendChild(div1);

let newH = document.createElement('h1')
newH.classList.add('newH');
newH.textContent = 'I\'m in a div!!';
div1.appendChild(newH);


let newP = document.createElement('p');
newP.classList.add('newP');
newP.textContent = 'Me To!!!';
div1.appendChild(newP);
