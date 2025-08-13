//  Math.random() возвращает десятичное число от 0 до 1
//Math.trunc(value) - отбрасывает
// let max = 100;
// let x = Math.random()*max; //формула для генерации числа от 0 до max
// x = Math.trunc(x);
// console.log(x);

// let min = 15;
// max = 25;
// x = min + Math.random()*(max - min)
// console.log(Math.trunc(x));
// x = Math.trunc(min + Math.random()*(max - min)); //формула для генерации числа от min до max

// let x = Math.random()
// console.log(x)
// let max = 10
// x = Math.random()*max //дробное число от 0 до max
// x = Math.trunc(x); //отбросить дробную часть
// console.log(x)

// max = 100
// let min = -10
// // от -10 до 100
// x = Math.trunc(min + Math.random()*(max - min));
// console.log(x)

// //Math.round(x) - округление по обычным правилам
// //Math.ceil(x) - в большую сторону
// //Math.floor(x) - в меньшую сторону

// let arr = [] // объявление пустого
// for(let i=0; i<=9; i++) {
//     arr[i] = Math.trunc(min + Math.random()*(max - min))
// }
// console.log(arr)

// let matrix = []
// for (let i=0; i<=9; i++) {
//     matrix[i]=[]
//     for (let j=0; j<=2; j++) {
//         matrix[i][j] = Math.trunc(min + Math.random()*(max - min))
//     }
// }
// matrix[4][1] = 0
// console.log(matrix)

// out: for (let i=0; i<matrix.length; i++) {   
//     let line = ''
//     for (let j=0; j<matrix[i].length; j++) {        
//         if (matrix[i][j]==0) {
//             break out
//         } 
//         else {
//             line += matrix[i][j]+" "            
//         }
//     }
//     console.log(line + "\n")
// }

let lines = 15
for (let i = 1; i<=lines; i++){
    let line = ""
    for (let j=1; j<=i; j++) {
        line +="*"
    }
    console.log(line + '\n')
}

let arr = [-7,8,15,-32,99,-777]
let min = arr[0]
for(let i=1;i<arr.length;i++) {
    if (arr[i]<min) {
        min = arr[i]
    }
}
console.log(min)