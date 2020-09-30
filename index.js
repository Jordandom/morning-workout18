'use strict';

let counter = 4;

const btnMinus = document.querySelector('#minus');
const btnPlus = document.querySelector('#plus');

const counterElm = document.querySelector('#counter');
const knobElm = document.querySelector('#knob')

btnMinus.addEventListener('click', () => {
    counter--;
    if(counter === 0) {
        counterElm.textContent = '0';
        knobElm.className = 'knob0';
    } if(counter === 1) {
        counterElm.textContent = '1';
        knobElm.className = 'knob1';
    } if(counter === 2) {
        counterElm.textContent = '2';
        knobElm.className = 'knob2';
    } if(counter === 3) {
        counterElm.textContent = '3';
        knobElm.className = 'knob3';
    } if(counter === 4) {
        counterElm.textContent = '4';
        knobElm.className = 'knob4';
    } if(counter === 5) {
        counterElm.textContent = '5';
        knobElm.className = 'knob5';
    } if(counter === 6) {
        counterElm.textContent = '6';
        knobElm.className = 'knob6';
    } if(counter === 7) {
        counterElm.textContent = '7';
        knobElm.className = 'knob7';
    } if(counter === 8) {
        counterElm.textContent = '8';
        knobElm.className = 'knob8';
    } if(counter === 9) {
        counterElm.textContent = '9';
        knobElm.className = 'knob9';
    } if(counter === 10) {
        counterElm.textContent = '10';
        knobElm.className = 'knob10';
    } 
});

btnPlus.addEventListener('click', () => {
    counter++;
    if(counter === 0) {
        counterElm.textContent = '0';
        knobElm.className = 'knob0';
    } if(counter === 1) {
        counterElm.textContent = '1';
        knobElm.className = 'knob1';
    } if(counter === 2) {
        counterElm.textContent = '2';
        knobElm.className = 'knob2';
    } if(counter === 3) {
        counterElm.textContent = '3';
        knobElm.className = 'knob3';
    } if(counter === 4) {
        counterElm.textContent = '4';
        knobElm.className = 'knob4';
    } if(counter === 5) {
        counterElm.textContent = '5';
        knobElm.className = 'knob5';
    } if(counter === 6) {
        counterElm.textContent = '6';
        knobElm.className = 'knob6';
    } if(counter === 7) {
        counterElm.textContent = '7';
        knobElm.className = 'knob7';
    } if(counter === 8) {
        counterElm.textContent = '8';
        knobElm.className = 'knob8';
    } if(counter === 9) {
        counterElm.textContent = '9';
        knobElm.className = 'knob9';
    } if(counter === 10) {
        counterElm.textContent = '10';
        knobElm.className = 'knob10';
    } 
})



/*departures.forEach((row) => {
    const tableElm = document.createElement('tr');
    tableElm.innerHTML += `      
    <td class="board__time">${row.time.hrs}:${row.time.mins}</td>
    <td class="board__train">${row.train}</td>
    <td class="board__no">${row.no}</td>
    <td class="board__to">${row.to}</td>
    <td class="board__status red">${row.status}</td>
    <td class="board__track">${row.track}</td>
    <button class="btn-delay">Press me</button>
    `;
    const rowDelay = tableElm.querySelector('.red');
    const btnDelay = tableElm.querySelector('.btn-delay');
    let pressed = 0;
    btnDelay.addEventListener('click', () => {
      pressed++;
  
      if(pressed % 2 === 0){
        rowDelay.textContent = 'On time';
        rowDelay.className = 'red-off';
      } else {
        rowDelay.textContent = 'Delayed';
        rowDelay.className = 'red-on';
        departures.status = 'Delayed';
      }
      
    })
  
    tbody.appendChild(tableElm);
  
  });*/