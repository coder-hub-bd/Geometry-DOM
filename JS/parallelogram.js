function parallelogram(){
    // hight section----
    const parallelogramInputHight = document.getElementById('parall-hight');
    const inputText = parallelogramInputHight.value;
    const base = parseFloat(inputText);
    // console.log(base);

//width function-----
const parallelogramInputWidth = document.getElementById('parall-width');
const widthInputText = parallelogramInputWidth.value;
const widthBase = parseFloat(widthInputText);
// console.log(widthBase);

// calculate function-----
const area = base * widthBase;
console.log('This is a Parallelogram area:', area);


// area function---
const areaSection = document.getElementById('parall');
areaSection.innerText = area;

}