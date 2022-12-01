import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Data from './sheet1.csv';


function component() {
    const element = document.createElement('div');
    const element2 = document.createElement('div');
  
    //Lodash, now imorted byt his script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element2.textContent = myName('Cody');
    element2.classList.add('hello');

    //Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(element2);
    element.appendChild(myIcon);

    console.log(Data);
    return element;
  }
  
  document.body.appendChild(component());