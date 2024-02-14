// function getRectangleInput(){
//     // const rectangleValue = document.getElementById('input-hight');
//     // const inputValue = rectangleValue.value;
//     // const base = parseFloat(inputValue);
//     // console.log(base);


//     const base = commonFunction();
//     console.log(base);

// }



// function commonFunction(){
//     const rectangleValue = document.getElementById('input-hight');
//     const inputValue = rectangleValue.value;
//     const base = parseFloat(inputValue);
//     return base;

// }


// ----------------উপরের ফাংশন লিখা যে কথা নিচেরটা লিখা  একই কথা--------------


// সকল কমন ফাংশন করার জন্য এইটা ব্যবহার করা হয়-------

function getRectangleInput(){
    const hight = commonInputById('input-hight');
    console.log('This is a rectangle hight:', hight);


    const width = commonInputById('input-width');
    console.log('This is a rectangle width:', width);

// Calculate function
    const area = hight * width;
    console.log('Area is here:', area);

    // ------------Set area function------

    setInnerText('rectangle-area', area);
}

// ----------Common function---------

function commonInputById(inputId){
    const commonId = document.getElementById(inputId);
    const inputValue = commonId.value;
    const base = parseFloat(inputValue);
    return base;

}

// ----------Area function------

function setInnerText(elementId, area){
    const set = document.getElementById(elementId);
    set.innerText = area;

}