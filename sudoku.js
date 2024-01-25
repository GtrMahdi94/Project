var score = 0
var mistakes = 0
// make the sudoku table
function makeSudoku() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            var cas = document.createElement("input")
            cas.classList.add("cube")
            cas.setAttribute("type", "text")
            $(".sudoku").append(cas)
        }
    }
}
//get the value of selected case
function clicked() {
    $(".cube").on("input", function () {
        var enteredValue = $(this).val()
        console.log("Typed Value: " + enteredValue)

        if (enteredValue) {
            var isMistake = checkMistakes(this)
            if (!isMistake) {
                updateScore()
            } else {
                // Clear the input value for mistakes
                $(this).val("")
            }
            updateMistakes()
        }
    })
}
//check the input and call the function duplicates to check rows and columns
function checkMistakes(clickedInput) {
    var rowValues = []
    var columnValues = []

    var rowIndex = $(clickedInput).index() % 9
    var colIndex = Math.floor($(clickedInput).index() / 9)

    $(".cube").each(function (index) {
        var value = $(this).val();
        var currentRowIndex = index % 9
        var currentColIndex = Math.floor(index / 9)

        if (value && value !== "" && currentRowIndex === rowIndex) {
            rowValues.push(value)
        }

        if (value && value !== "" && currentColIndex === colIndex) {
            columnValues.push(value)
        }
    })

    var mistakeDetected = hasDuplicates(rowValues) || hasDuplicates(columnValues)

    if (mistakeDetected) {
        console.log("Mistake detected")
        mistakes++
    } else {
        console.log("No mistakes")
    }

    return mistakeDetected
}
//check the arrays of rows and columns
function hasDuplicates(array) {
    var seen = {}
    for (var i = 0; i < array.length; i++) {
        if (seen[array[i]]) {
            return true
        }
        seen[array[i]] = true
    }
    return false
}
//count score
function updateScore() {
    score++
    $("#score").text("SCORE " + score)
}
// count mistake
function updateMistakes() {
    $("#mistakes").text("MISTAKES " + mistakes)
}
// reset the sudoku
function resetSudoku() {
    $(".cube").val("")
    score = 0
    mistakes = 0
    updateScore()
    updateMistakes()
}
// button Reset
$(".btn").on("click", function () {
    resetSudoku()
})

makeSudoku()
clicked()