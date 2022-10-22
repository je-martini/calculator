const output = document.querySelector('.out_put');
const clear = document.querySelector('.clear');
const division = document.querySelector('.division');
const mult = document.querySelector('.mult');
const delet = document.querySelector('.delete');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const minus = document.querySelector('.minus');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const plus = document.querySelector('.plus');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const equal_buttom = document.querySelector('.equal_buttom');
const percentage = document.querySelector('.percentage');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');

let previus_number_display = document.createElement('p')
let next_number_display = document.createElement('p')
let previus_number = 0;
let next_number = 0;
let is_previus_number_available = true;


output.append(previus_number_display, next_number_display)

zero.addEventListener('click', math_zero)
one.addEventListener('click', math_one) 
two.addEventListener('click', math_two) 
three.addEventListener('click', math_three) 
four.addEventListener('click', math_four) 
five.addEventListener('click', math_five) 
six.addEventListener('click', math_six) 
seven.addEventListener('click', math_seven) 
eight.addEventListener('click', math_eight) 
nine.addEventListener('click', math_nine) 


function math_zero() {
    let zero_display = zero.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + zero_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + zero_display;
    }
}
function math_one() {
    let one_display = one.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + one_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + one_display;
    }
}

function math_two() {
    let two_display = two.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + two_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + two_display;
    }
}
function math_three() {
    let three_display = three.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + three_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + three_display;
    }
}
function math_four() {
    let four_display = four.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + four_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + four_display;
    }
}
function math_five() {
    let five_display = five.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + five_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + five_display;
    }
}
function math_six() {
    let six_display = six.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + six_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + six_display;
    }
}
function math_seven() {
    let seven_display = seven.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + seven_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + seven_display;
    }
}
function math_eight() {
    let eight_display = eight.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + eight_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + eight_display;
    }
}
function math_nine() {
    let nine_display = nine.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + nine_display;
    } else {
        next_number_display.innerHTML = next_number_display.textContent + nine_display;
    }
}


plus.addEventListener('click', adding)
function adding(){
    let plus_display = plus.textContent;
    previus_number_display.innerHTML = previus_number_display.textContent + plus_display;
    is_previus_number_available = false
}

equal_buttom.addEventListener('click', final_result)

function final_result(){
    
}



// two.addEventListener('click', math) 

// function math(number) {
//     console.log('hi')
//     if(is_previus_number){
//         console.log('no')
//         let uno = number
//         console.log(uno)
//         previus_number = Number(number.textContent)
//         is_previus_number = false
//         console.log(previus_number)
//     } else {
//         console.log('yes')
//         let dos = number
//         console.log(dos)
//         next_number = Number(number.textContent)
//         is_previus_number = true
//         console.log(next_number)

//     }

// }


// function number () {
//     math = Number(one.textContent) 
//     plus.addEventListener('click', operations)

//     function operations(){
//         math = math + ' + '
//         console.log(math)
//         return math
//     }

//     two.addEventListener('click', adding)

//     function adding(){
//         math = math + two.textContent
//         console.log(math)
//         math = Number(math)
//         console.log(math)
//     }

//     console.log(math)
//     return math
// }




