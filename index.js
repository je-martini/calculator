const output = document.querySelector('.out_put');
const clear_button = document.querySelector('.clear');
const division_button = document.querySelector('.division');
const mult = document.querySelector('.mult');
const delet_button = document.querySelector('.delete');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const minus_button = document.querySelector('.minus');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const plus = document.querySelector('.plus');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const equal_buttom = document.querySelector('.equal_buttom');
const percentage_button = document.querySelector('.percentage');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');

let previus_number_display = document.createElement('p')
let current_number_display = document.createElement('p')
let previus_number = 0;
let current_number = 0;
let result = 0
let is_previus_number_available = false;


output.append(previus_number_display, current_number_display)

zero.addEventListener('click', math_zero)
point.addEventListener('click', math_point)
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
        current_number_display.innerHTML = current_number_display.textContent + zero_display;
    }
}

function math_point(){
    let point_display = point.textContent;
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + point_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + point_display;
    }
}

function math_one() {
    let one_display = one.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }
    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + one_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + one_display;
    }
}

function math_two() {
    let two_display = two.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + two_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + two_display;
    }
}
function math_three() {
    let three_display = three.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + three_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + three_display;
    }
}
function math_four() {
    let four_display = four.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + four_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + four_display;
    }
}
function math_five() {
    let five_display = five.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + five_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + five_display;
    }
}
function math_six() {
    let six_display = six.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + six_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + six_display;
    }
}
function math_seven() {
    let seven_display = seven.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + seven_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + seven_display;
    }
}
function math_eight() {
    let eight_display = eight.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + eight_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + eight_display;
    }
}
function math_nine() {
    let nine_display = nine.textContent;
    if(current_number_display.textContent == '0'){
            delete_number()
    }

    if( is_previus_number_available) {
        previus_number_display.innerHTML = previus_number_display.textContent + nine_display;
    } else {
        current_number_display.innerHTML = current_number_display.textContent + nine_display;
    }
}


plus.addEventListener('click', adding)
function adding(){
    let plus_display = plus.textContent;
    previus_number_display.innerHTML = current_number_display.textContent + plus_display;
    current_number_display.innerHTML = ''; 
    is_previus_number_available = false
}
minus_button.addEventListener('click', minus)
function minus(){
    let minus_display = minus_button.textContent;
    previus_number_display.innerHTML = current_number_display.textContent + minus_display;
    current_number_display.innerHTML = ''; 
    is_previus_number_available = false
}
mult.addEventListener('click', times)
function times(){
    let times_display = mult.textContent;
    previus_number_display.innerHTML = current_number_display.textContent + times_display;
    current_number_display.innerHTML = ''; 
    is_previus_number_available = false
}
division_button.addEventListener('click', division)
function division(){
    let division_display = division_button.textContent;
    previus_number_display.innerHTML = current_number_display.textContent + division_display;
    current_number_display.innerHTML = ''; 
    is_previus_number_available = false
}
percentage_button.addEventListener('click', percentage)

function percentage(){
    let percentage_display = percentage_button.textContent;
    previus_number_display.innerHTML = current_number_display.textContent + percentage_display;
    current_number_display.innerHTML = ''; 
    is_previus_number_available = false
}

equal_buttom.addEventListener('click', final_result)

function final_result(){
    previus_number = Number(previus_number_display.innerText.slice(0, previus_number_display.innerText.length - 1))
    current_number = Number(current_number_display.innerText)
    just_sign = previus_number_display.innerText.slice(previus_number_display.innerText.length - 1)
    if(just_sign == '+'){
        result = previus_number + current_number
    }
    if ( just_sign == '-'){
        result = previus_number - current_number
    }
    if ( just_sign == 'x'){
        result = previus_number * current_number
    }
    if ( just_sign == '/'){
        result = previus_number / current_number
    }
    if( just_sign == '%'){
        result = (current_number * previus_number) / 100
    }
    clear_all()
    current_number_display.innerHTML = result

}

delet_button.addEventListener('click', delete_number)

function delete_number(){
    current_number_display.innerHTML = current_number_display.innerText.slice(0, current_number_display.innerText.length - 1,);
}

clear_button.addEventListener('click', clear_all)

function clear_all(){
    current_number_display.innerHTML = '';
    previus_number_display.innerHTML = '';
    is_previus_number_available = false

}








