var score = 0;
var mistakes = 0;

function makeSudoku() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            var cas = document.createElement("input");
            cas.classList.add("cube");
            cas.setAttribute("type", "text");
            $(".sudoku").append(cas);
        }
    }
}

function clicked() {
    $(".cube").on("input", function () {
        var enteredValue = $(this).val();
        console.log("Typed Value: " + enteredValue);

        if (enteredValue) {
            var isMistake = checkMistakes(this);
            if (!isMistake) {
                updateScore();
            } else {
                // Clear the input value for mistakes
                $(this).val("");
            }
            updateMistakes();
        }
    });
}

function checkMistakes(clickedInput) {
    var rowValues = [];
    var columnValues = [];

    var rowIndex = $(clickedInput).index() % 9;
    var colIndex = Math.floor($(clickedInput).index() / 9);

    $(".cube").each(function (index) {
        var value = $(this).val();
        var currentRowIndex = index % 9;
        var currentColIndex = Math.floor(index / 9);

        if (value && value !== "" && currentRowIndex === rowIndex) {
            rowValues.push(value);
        }

        if (value && value !== "" && currentColIndex === colIndex) {
            columnValues.push(value);
        }
    });

    var mistakeDetected = hasDuplicates(rowValues) || hasDuplicates(columnValues);

    if (mistakeDetected) {
        console.log("Mistake detected!");
        mistakes++;
    } else {
        console.log("No mistakes.");
    }

    return mistakeDetected;
}

function hasDuplicates(array) {
    var seen = {};
    for (var i = 0; i < array.length; i++) {
        if (seen[array[i]]) {
            return true;
        }
        seen[array[i]] = true;
    }
    return false;
}

function updateScore() {
    score++;
    $("#score").text("SCORE " + score);
}

function updateMistakes() {
    $("#mistakes").text("MISTAKES " + mistakes);
}

function resetSudoku() {
    $(".cube").val("");
    score = 0;
    mistakes = 0;
    updateScore();
    updateMistakes();
}

$(".btn").on("click", function () {
    resetSudoku();
});

makeSudoku();
clicked();