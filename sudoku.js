// test linked :
console.log("Linked")
// principal Matrix :
//var Matrix=[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]
// input variable :
//var x ;



//function makeSudoku cases :
function makeSudoku (){
    
    for (var i=0;i<9;i++){
        for (var j=0 ; j<9;j++){
            var cas=document.createElement("input")
            cas.id= (i,j)
            cas.classList.add("cube")
            $(".sudoku").append(cas)

        }
    
    }
}

//function verif Line :
function verifline(){}

//function verif column :
function verifcolumn(){}

//function verif 3*3 box :
function verifmat(){}