const userAnswer = prompt("Введите текст для обрезки:");
let userString = userAnswer
userString = userString.trim()


const userAnswer2 = prompt("Введите индекс, с которого нужно начать обрезку строки:");
let startSliceIndex = userAnswer2
startSliceIndex = startSliceIndex.trim()
startSliceIndex = Number(startSliceIndex)

const userAnswer3 = prompt("Введите индекс, которым нужно закончить обрезку строки:");
let endSliceIndex = userAnswer3
endSliceIndex = endSliceIndex.trim()
endSliceIndex = Number(endSliceIndex)

string = userString.slice(startSliceIndex, endSliceIndex)

alert("Результат: " + string)