'use strict';

//Преобразование типов

let a ="" + 1 + 0 // 10
let b = "" - 1 + 0 // -1
let c = true + false // 1
let d = 6 / "3" // 2
let e = "2" * "3" // 6
let f = 4 + 5 + "px" // 9px
let g = "$" + 4 + 5 // $45
let j = "4" - 2 // 2
let k = "4px" - 2 // NaN
let l = "  -9  " + 5 // -9  5
let p = "  -9  " - 5 // -14
let q = null + 1 // 1
let v = undefined + 1 // NaN
let m = " \t \n" - 2 // -2

