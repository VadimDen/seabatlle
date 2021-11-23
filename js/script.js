'use strict';

const table = document.createElement('table'),
      tbody = document.createElement('tbody');

let rowList = [],
    numList = [],
    common = [],
    num = 0;

for (let i = 0; i < 10; i++) {                        // создали таблицу с помощью джаваскрип и загрузили неё в ДОМ
  let row = document.createElement('tr');
  row.id = `row${i}`;

  for (let l = 0; l < 10; l++) {
    let data = document.createElement('td');
    data.id = `row${i}data${l}`;
    row.appendChild(data);
    rowList.push(data);
  }
  tbody.appendChild(row);
}

table.appendChild(tbody);
document.body.appendChild(table);

rowList.forEach(element => {                          // указали ивент для наведения на элементы таблицы
  element.addEventListener('mouseover', event => {
    if (event.target.style.backgroundColor !== 'green' && event.target.style.backgroundColor !== 'red') {
      event.target.style.backgroundColor = 'orange';
    }
  });

  element.addEventListener('mouseout', event => {
    if (event.target.style.backgroundColor !== 'green' && event.target.style.backgroundColor !== 'red') {
      event.target.style.backgroundColor = '';
    }
  });
});

function getRandomInt(max) {                          // прописали функцию подбора случайных чисел
  return Math.floor(Math.random() * max);
}

for(let i = 0; i < 10; i++) {
  num = getRandomInt(rowList.length);

  if (numList.includes(num) == true && num < rowList.length) {
    ++num;
    numList.push(num);
  } else if (numList.includes(num) == true && num == rowList.length) {
    --num;
    numList.push(num);
  } else {
    numList.push(num);
  }
}

numList.forEach(element => {
  common.push(rowList[element]);
});

console.log(common);


rowList.forEach(element => {
  element.addEventListener('click', event => {
    if (common.includes(element)) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'red';
    }
  });  
});

console.log(numList);