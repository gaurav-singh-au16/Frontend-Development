// row-1
var box_1 = document.getElementById("b-1")
var box_2 = document.getElementById("b-2")
var box_3 = document.getElementById("b-3")
//row-2
var box_4 = document.getElementById("b-4")
var box_5 = document.getElementById("b-5")
var box_6 = document.getElementById("b-6")
//row-3
var box_7 = document.getElementById("b-7")
var box_8 = document.getElementById("b-8")
var box_9 = document.getElementById("b-9")

var winner = document.getElementById("res")
var player_1 = prompt("Enter Player X Name")
var player_2 = prompt("Enter Player O Name")

var row_1 = []
var row_2 = []
var row_3 = []

var col_1 = []
var col_2 = []
var col_3 = []

//diagnol 1 checker
var dig_row = []
var dig_col = []

//diagnol 2 checker
var dig_2_row = []
var dig_2_col = []

var last_entry = ""
// row 1
function select_box_1(){

    if (last_entry == ""){
        row_1.push("x")
        col_1.push("x")
        dig_row.push("x")
        dig_col.push("x")
        last_entry = "x"
        box_1.style.background = "rgb(221, 67, 61)"
        box_1.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_1.push("o")
        col_1.push("o")
        dig_row.push("o")
        dig_col.push("o")
        last_entry = "o"
        box_1.style.background = "rgb(221, 67, 61)"
        box_1.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_1.push("x")
        col_1.push("x")
        dig_row.push("x")
        dig_col.push("x")
        last_entry = "x"
        box_1.style.background = "rgb(221, 67, 61)"
        box_1.innerHTML = "x"
    }

    check_winner()
}
function select_box_2(){
    if (last_entry == ""){
        row_1.push("x")
        col_2.push("x")
        last_entry = "x"
        box_2.style.background = "rgb(221, 67, 61)"
        box_2.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_1.push("o")
        col_2.push("o")
        last_entry = "o"
        box_2.style.background = "rgb(221, 67, 61)"
        box_2.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_1.push("x")
        col_2.push("x")
        last_entry = "x"
        box_2.style.background = "rgb(221, 67, 61)"
        box_2.innerHTML = "x"
    }
    check_winner()
}
function select_box_3(){
    if (last_entry == ""){
        row_1.push("x")
        col_3.push("x")
        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_3.style.background = "rgb(221, 67, 61)"
        box_3.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_1.push("o")
        col_3.push("o")
        dig_2_row.push("o")
        dig_2_col.push("o")
        last_entry = "o"
        box_3.style.background = "rgb(221, 67, 61)"
        box_3.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_1.push("x")
        col_3.push("x")
        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_3.style.background = "rgb(221, 67, 61)"
        box_3.innerHTML = "x"
    }
    check_winner()
}
// row 2
function select_box_4(){
    if (last_entry == ""){
        row_2.push("x")
        col_1.push("x")
        last_entry = "x"
        box_4.style.background = "rgb(221, 67, 61)"
        box_4.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_2.push("o")
        col_1.push("o")
        last_entry = "o"
        box_4.style.background = "rgb(221, 67, 61)"
        box_4.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_2.push("x")
        col_1.push("x")
        last_entry = "x"
        box_4.style.background = "rgb(221, 67, 61)"
        box_4.innerHTML = "x"
    }
    check_winner()
}
function select_box_5(){
    if (last_entry == ""){
        row_2.push("x")
        col_2.push("x")
        dig_row.push("x")
        dig_col.push("x")

        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_5.style.background = "rgb(221, 67, 61)"
        box_5.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_2.push("o")
        col_2.push("o")
        dig_row.push("o")
        dig_col.push("o")

        dig_2_row.push("o")
        dig_2_col.push("o")
        last_entry = "o"
        box_5.style.background = "rgb(221, 67, 61)"
        box_5.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_2.push("x")
        col_2.push("x")
        dig_row.push("x")
        dig_col.push("x")

        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_5.style.background = "rgb(221, 67, 61)"
        box_5.innerHTML = "x"
    }
    console.log(row_2, col_2)
    check_winner()
}
function select_box_6(){
    if (last_entry == ""){
        row_2.push("x")
        col_3.push("x")
        last_entry = "x"
        box_6.style.background = "rgb(221, 67, 61)"
        box_6.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_2.push("o")
        col_3.push("o")
        last_entry = "o"
        box_6.style.background = "rgb(221, 67, 61)"
        box_6.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_2.push("x")
        col_3.push("x")
        last_entry = "x"
        box_6.style.background = "rgb(221, 67, 61)"
        box_6.innerHTML = "x"
    }
    check_winner()
}
//row 3

function select_box_7(){
    if (last_entry == ""){
        row_3.push("x")
        col_1.push("x")
        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_7.style.background = "rgb(221, 67, 61)"
        box_7.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_3.push("o")
        col_1.push("o")
        dig_2_row.push("o")
        dig_2_col.push("o")
        last_entry = "o"
        box_7.style.background = "rgb(221, 67, 61)"
        box_7.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_3.push("x")
        col_1.push("x")
        dig_2_row.push("x")
        dig_2_col.push("x")
        last_entry = "x"
        box_7.style.background = "rgb(221, 67, 61)"
        box_7.innerHTML = "x"
    }
    check_winner()
}
function select_box_8(){
    if (last_entry == ""){
        row_3.push("x")
        col_2.push("x")
        last_entry = "x"
        box_8.style.background = "rgb(221, 67, 61)"
        box_8.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_3.push("o")
        col_2.push("o")
        last_entry = "o"
        box_8.style.background = "rgb(221, 67, 61)"
        box_8.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_3.push("x")
        col_2.push("x")
        last_entry = "x"
        box_8.style.background = "rgb(221, 67, 61)"
        box_8.innerHTML = "x"
    }
    check_winner()
}
function select_box_9(){
    if (last_entry == ""){
        row_3.push("x")
        col_3.push("x")
        dig_row.push("x")
        dig_col.push("x")
        last_entry = "x"
        box_9.style.background = "rgb(221, 67, 61)"
        box_9.innerHTML = "x"
    }
    else if (last_entry == "x"){
        row_3.push("o")
        col_3.push("o")
        dig_row.push("o")
        dig_col.push("o")
        last_entry = "o"
        box_9.style.background = "rgb(221, 67, 61)"
        box_9.innerHTML = "o"
    }
    else if (last_entry == "o"){
        row_3.push("x")
        col_3.push("x")
        dig_row.push("x")
        dig_col.push("x")
        last_entry = "x"
        box_9.style.background = "rgb(221, 67, 61)"
        box_9.innerHTML = "x"
    }
    console.log(row_3, col_3)
    check_winner()
}
console.log(row_1)
console.log(row_2)
console.log(row_3)

console.log(col_1)
console.log(col_2)
console.log(col_3)

box_1.addEventListener("click", select_box_1)
box_2.addEventListener("click", select_box_2)
box_3.addEventListener("click", select_box_3)

box_4.addEventListener("click", select_box_4)
box_5.addEventListener("click", select_box_5)
box_6.addEventListener("click", select_box_6)

box_7.addEventListener("click", select_box_7)
box_8.addEventListener("click", select_box_8)
box_9.addEventListener("click", select_box_9)

function check_winner(){
    //row 1
    if (row_1.length==3 && row_1[0]=="x" && row_1[1]=="x" && row_1[2]=="x"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_2.style.background = "rgb(210, 157, 91)"
        box_3.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (row_1.length==3 && row_1[0]=="o" && row_1[1]=="o" && row_1[2]=="o"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_2.style.background = "rgb(210, 157, 91)"
        box_3.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    //row 2
    else if (row_2.length==3 && row_2[0]=="x" && row_2[1]=="x" && row_2[2]=="x"){
        box_4.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_6.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (row_2.length==3 && row_2[0]=="o" && row_2[1]=="o" && row_2[2]=="o"){
        box_4.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_6.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    //row 3
    else if (row_3.length==3 && row_3[0]=="x" && row_3[1]=="x" && row_3[2]=="x"){
        box_7.style.background = "rgb(210, 157, 91)"
        box_8.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (row_3.length==3 && row_3[0]=="o" && row_3[1]=="o" && row_3[2]=="o"){
        box_7.style.background = "rgb(210, 157, 91)"
        box_8.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    // col 1
    else if (col_1.length==3 && col_1[0]=="x" && col_1[1]=="x" && col_1[2]=="x"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_4.style.background = "rgb(210, 157, 91)"
        box_7.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (col_1.length==3 && col_1[0]=="o" && col_1[1]=="o" && col_1[2]=="o"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_4.style.background = "rgb(210, 157, 91)"
        box_7.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    //col 2
    else if (col_2.length==3 && col_2[0]=="x" && col_2[1]=="x" && col_2[2]=="x"){
        box_2.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_8.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (col_2.length==3 && col_2[0]=="o" && col_2[1]=="o" && col_2[2]=="o"){
        box_2.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_8.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    //col 3
    else if (col_3.length==3 && col_3[0]=="x" && col_3[1]=="x" && col_3[2]=="x"){
        box_3.style.background = "rgb(210, 157, 91)"
        box_6.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (col_3.length==3 && col_3[0]=="o" && col_3[1]=="o" && col_3[2]=="o"){
        box_3.style.background = "rgb(210, 157, 91)"
        box_6.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    // diagnol 1
    else if (dig_col.length==3 && dig_row.length==3 && dig_col[0]=="x" && dig_col[1]=="x" && dig_col[2]=="x" && dig_row[0]=="x" && dig_row[1]=="x" && dig_row[2]=="x"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (dig_col.length==3 && dig_row.length==3 && dig_col[0]=="o" && dig_col[1]=="o" && dig_col[2]=="o" && dig_row[0]=="o" && dig_row[1]=="o" && dig_row[2]=="o"){
        box_1.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
   
    // diagnol 2
    else if (dig_2_col.length==3 && dig_2_row.length==3 && dig_2_col[0]=="x" && dig_2_col[1]=="x" && dig_2_col[2]=="x" && dig_2_row[0]=="x" && dig_2_row[1]=="x" && dig_2_row[2]=="x"){
        box_3.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_7.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_1+" Win!!"
    }
    else if (dig_2_col.length==3 && dig_2_row.length==3 && dig_2_col[0]=="o" && dig_2_col[1]=="o" && dig_2_col[2]=="o" && dig_2_row[0]=="o" && dig_2_row[1]=="o" && dig_2_row[2]=="o"){
        box_3.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_7.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = player_2+" Win!!"
    }
    else if(row_1.length==3 && row_2.length ==3 && row_3.length == 3 && col_1.length==3 && col_2.length==3 && col_3.length==3){
        box_1.style.background = "rgb(210, 157, 91)"
        box_2.style.background = "rgb(210, 157, 91)"
        box_3.style.background = "rgb(210, 157, 91)"
        box_4.style.background = "rgb(210, 157, 91)"
        box_5.style.background = "rgb(210, 157, 91)"
        box_6.style.background = "rgb(210, 157, 91)"
        box_7.style.background = "rgb(210, 157, 91)"
        box_8.style.background = "rgb(210, 157, 91)"
        box_9.style.background = "rgb(210, 157, 91)"
        winner.innerHTML = "This Is Tie Match"
    }
    
    
}




