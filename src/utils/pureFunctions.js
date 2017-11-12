

const createCells=(num)=>{
    let cells=[];
    for(let i=0;i<num;i++){
        cells[i]=[];
        for(let j=0;j<num;j++){
            cells[i].push({
                x:i,
                y:j,
                val:'',
                sign:'+',
            })
        }
    }
    return cells;
}


const createCellView=(modle)=>{

const num=modle.num;
const cells=modle.cells;
let html='';
    for(let i=0;i<num;i++){
        
            html+=`<lable>${i}</lable>`
           
        
    
        for(let j=0;j<num;j++){
            if(i===0){
                html+=`<lable class='col-lable'>${j}</lable>`
                }
            console.log(i,j)
            html+=`<input data-row="${i}" data-col="${j}" class='row-${i} col-${j}' value='${getCellVal(cells,i,j)}'/>`
        }
        html+='<br>'
    }
    console.log(html)
return html;


}


const getCellVal=(cells,i,j)=>{
    if(parseFloat(cells[i][j].sign+cells[i][j].val)){
        return parseFloat(cells[i][j].sign+cells[i][j].val)
    }
    else{
        return '';

    }
}



export  {createCells as default, createCellView};