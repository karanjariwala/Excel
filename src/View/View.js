import {createCellView} from '../utils/pureFunctions'
class View{


    constructor(modle){
        this.modle=modle;
    }



    render(){
        console.log(this)
        let node= document.getElementById('main');
        let html= createCellView(this.modle);
        node.innerHTML=html;
        

    }

}

export default View;