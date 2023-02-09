// 16+18=214

function add(num1, num2) {
    num1 = num1.toString().split('').reverse();
    num2 = num2.toString().split('').reverse();
    let max = Math.max(num1.length, num2.length)
    let array = [];
    for (let i = max - 1; i >= 0; i--) {
        array.push(Number(num1[i] || 0) + Number(num2[i] || 0));
    }
    let result = array.reduce((acc, all) => acc.toString() + all.toString())
    return Number(result);
}

add(1, 2);
