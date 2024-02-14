function calculateTriangle(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseInputText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseInputText);
    // console.log(base);

    // triangle hight value---
    const hight = document.getElementById('hight-value');
    const hightInput = hight.value;
    const hightInputText = parseFloat(hightInput);
    // console.log(hightInputText);

    // Calculate triangle area--------
    const autoMan = .5;
    const area = autoMan * base * hightInputText;
    console.log('This is a Triangle area:', area);


//  display area------
    const areaManSate = document.getElementById('sate-man');
    areaManSate.innerText = area;








}