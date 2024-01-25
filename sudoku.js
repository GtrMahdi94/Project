// test linked :

// principal Matrix :
//var Matrix=[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]
// input variable :
var x =$("sudoku")
clicked()


//function makeSudoku cases :
var arr = [];
 
    function makeSudoku() {
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= 9; j++) {
                var cas = document.createElement("input");
                cas.id =   i + " " + j;
                cas.classList.add("cube");
                $(".sudoku").append(cas);
                arr.push(cas.id);
            }
        }
    }


function clicked() {
    $(".cube").on("click", function () {
        var clickedId = this.id;
        console.log("Clicked ID: " + clickedId);
    });
    
}
   



            
makeSudoku()
// check input

 $( ".sudoku" ).on( "keyup", function(e) {
        var userInput = e.target.value;
console.log(userInput);
        
      } )

    

//function verif Line :
function verifline(){
  
}

//function verif column :
function verifcolumn(){}

//function verif 3*3 box :
function verifmat(){}
///////function to get my cas id which is selected by user onclick


