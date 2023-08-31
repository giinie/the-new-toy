/**
 * var, let, const
 */

/*
function jumpOut() {
    var array = [1, 2, 3];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        console.log(value);
    }
    console.log("Outside the loop: " + value); // 3 여기서도 value에 접근 가능
}
jumpOut();
*/


/*
function stayContained() {
    var array = [1, 2, 3];
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        console.log(value);
    }
    // console.log("Outside the loop: " + value); // ReferenceError: value is not defined
}
stayContained();
*/

/*
function redundantRepetition() {
    let x = "alpha";
    console.log(x); // alpha
    // let x = "beta"; // SyntaxError: Identifier 'x' has already been declared
    // console.log(x); // beta

    return x;
}
redundantRepetition();
*/

/**
 * Hoisting, Temporary Dead Zone.
 */
/*
function boringOldLinearTime() {
    answer = 42; // ReferenceError: answer is not defined
    console.log(answer);
    let answer;
}
boringOldLinearTime(); // ReferenceError: answer is not defined
*/

/*
let answer; // 외부 'answer' 변수
function hoisting() {
                 // 여기에 'answer' 변수를 예약해 둔다. (hoisting)
    // Temporal Dead Zone
    answer = 42; // ReferenceError: Cannot access 'answer' before initialization
    console.log(answer);
    // Temporal Dead Zone
    // TDZ는 공간적(위치 관련)인 것이 아니라 시간적(시간 관련)인 것.
    let answer; // 내부 'answer' 변수
}
hoisting(); // 42
*/

// Temporal Dead Zone의 시간적 특성을 보여주는 예제
function temporalExample() {
    const f = () => {
        console.log(value);
    };

    // 아래 두 줄의 순서가 바뀌면 오류 발생
    // ReferenceError: Cannot access 'value' before initialization
    let value = "test";
    f(); // test
}
temporalExample();

function blockExample(str) {
    let p = "prefix"; // 블록 외부의 변수
    if (str) {
        // 내부 변수 p의 shadowing 선언
        // p = p.toUpperCase(); // ReferenceError: Cannot access 'p' before initialization
        str = str.toUpperCase();
        let p = str.indexOf("X"); // 블록 내부의 변수
        if (p !== -1) {
            str = str.substring(0, p);
        }
    }
    return p + str;
}
console.log(blockExample("text"));

/**
 * problem of closure in loops
 */
function closuresInLoopsProblem() {
    for (var counter = 1; counter <= 3; ++counter) {
        setTimeout(function () {
            console.log(counter);
        }, 10);
    }
}
closuresInLoopsProblem(); // 4 4 4
