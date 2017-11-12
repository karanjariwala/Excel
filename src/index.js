import Modle from './Modle/Modle';
import View from './View/View';
import Controller from './Controller/Controller';

class App{
    constructor(num){
        this.modle = new Modle(num);
        this.view = new View(this.modle);
        this.controller =  new Controller(this.modle, this.view)
    }

}

let excel= new App(6);

console.log(excel);

excel.view.render();

window.addEventListener("keyup", (e)=>{
    console.log('here');
    excel.controller.handleEvent(e);
});

window.addEventListener("change", (e)=>{
    console.log('here');
    excel.controller.handleChange(e);
});





