// test linked :

// principal Matrix :
//var Matrix=[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]
// input variable :
var x =$("sudoku")



//function makeSudoku cases :
var arr = []
var arr2 =[] 
function makeSudoku (){

    for (var i=1;i<=9;i++){
        for (var j=1 ; j<=9;j++){
            var cas=document.createElement("input")
            cas.id= i
            cas.id2= j 
            var x =cas.id
        var z = cas.id2
            cas.classList.add("cube")
            $(".sudoku").append(cas)
        arr.push(x)
        arr2.push(z)
        }
        
    }
}




 function clicked (){
    var h = arr2.splice(0,1)
   
  //t= $("input").val(arr2[0])
  for(var i = 0 ; i<h.length;i++){
 console.log(t= $("input").val(arr2[0]));
 
   
    
  }
 
  
   }
   



            
makeSudoku()

//function verif Line :
function verifline(){}

//function verif column :
function verifcolumn(){}

//function verif 3*3 box :
function verifmat(){}
///////function to get my cas id which is selected by user onclick

clicked()