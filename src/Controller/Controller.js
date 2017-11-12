class Controller{
    constructor(modle,view){
        this.modle=modle;
        this.view=view;
    }
    handleEvent(e){
        console.log(e, e.target.value, e.keyCode);
        if (event.keyCode === 13) {
         
            this.modle.update(e.target.dataset.row,e.target.dataset.col,e.target.value);
            
            this.view.render();
            return ;
        }
    }

    handleChange(e){
        if(e.keyCode!==13){
            this.modle.update(e.target.dataset.row,e.target.dataset.col,e.target.value);
        }
    }
      

    
}

export default Controller;  