
import createCells from '../utils/pureFunctions';

class Modle{
    constructor(num){
        this.cells= createCells(num);
        this.num=num;
    }

    update(row,col,val){
        this.cells[row][col].val=val;
        console.log(this)
    }
}


export default Modle;