let FirstBoxNumber = prompt("Enter first box's number");
let SecondBoxNumber = prompt("Enter second box's number");

let Firstbox = document.querySelector(`#box${FirstBoxNumber}`);
let Secondbox = document.querySelector(`#box${SecondBoxNumber}`);

let tempecerBox = document.createElement('div');

Firstbox.style.transition= '30s';
Secondbox.style.opacity= '30s';

Firstbox.classList.add('box');
Secondbox.classList.add('box');

setTimeout(()=>{
     Firstbox.replaceWith(tempecerBox);
     Secondbox .replaceWith(Firstbox);
     tempecerBox.replaceWith(Secondbox);

     Firstbox.classList.remove('box');
     Secondbox.classList.remove('box');

},3000);