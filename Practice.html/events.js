// Method 1:
//<button onclick="alert('Hello World')">Click Me</button>
// Method 2:
//const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");
//Method 3:
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

//btn.addEventListener('click', function (e) {
  //console.log(e);
//});
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
