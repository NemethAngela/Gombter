/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-02-07
* Github: https://github.com/NemethAngela/Elipkup
* Licenc: GNU GPL
*/

const diameterElem = document.querySelector("#diameter");
const calcButton = document.querySelector("#calcButton");
const terfogatElem = document.querySelector("#terfogat");
const felszinElem = document.querySelector("#felszin");

calcButton.addEventListener('click', () => {
    var diameter = Number(diameterElem.value);
    var terfogat = calcVolume(diameter);
    var felszin = calcSurface(diameter);
    terfogatElem.value = terfogat.toFixed(3);  
    felszinElem.value = felszin.toFixed(3);
});

function calcVolume(d) {
    let r = d / 2;
    return (((4 * Math.PI) * (r * r * r)) / 3);
}

function calcSurface(d) {
    let r = d / 2;
    return ((4 * Math.PI) * r * r);
}
