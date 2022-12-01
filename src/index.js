import _ from 'lodash';



function component() {
    const element = document.createElement('div');
    
  
    //Lodash, now imorted byt his script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    
    return element;
  }
  
  document.body.appendChild(component());