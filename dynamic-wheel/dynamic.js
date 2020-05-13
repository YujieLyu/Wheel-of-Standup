const mySpinner = () => {
  let x = 1024;
  let y = 9999;
  let deg = Math.floor(Math.random() * (x - y)) + y;
  // let deg=Math.floor(10000 + Math.random() * 9000);
  document.getElementById('pie').style.transform = "rotate(" + deg + "deg)";
}

let startAngle, midAngle, endAngle,
  startCX, startCY,
  endCX, endCY, container,
  path, text, d;

function createPie(cx, cy, r, slices) {
  for (let i = 0; i < slices; i++) {
    startAngle = i * 360 / slices;
    console.log(startAngle);
    endAngle = (i + 1) * 360 / slices;
    midAngle = (startAngle + endAngle) / 2;
    console.log(midAngle);
    //console.log(fromAngle + ' ' + toAngle);
    startCX = cx + (r * Math.cos(startAngle * Math.PI / 180));
    startCY = cy + (r * Math.sin(startAngle * Math.PI / 180));
    endCX = cx + (r * Math.cos(endAngle * Math.PI / 180));
    endCY = cy + (r * Math.sin(endAngle * Math.PI / 180));
    //console.log(fromCoord + ' ' + toCoord);
    d = 'M' + cx + ',' + cy + ' L' + startCX + ',' + startCY + ' A' + r + ',' + r + ' 0 0,1 ' + endCX + ',' + endCY + 'z';
    //console.log(d);
    container = document.createElementNS("http://www.w3.org/2000/svg", "g");
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", d);
    var color = colors[i];
    var name = names[i];
    console.log(name);
    text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute('transform', `rotate(${midAngle}deg)translate(${r / 2}px)`);
    text.setAttribute("text-anchor", "end");
    text.setAttribute("x", cx);
    text.setAttribute("y", cy);
    var nameText = document.createTextNode(name);
    text.appendChild(nameText);
    path.style.cssText = 'fill:' + color;
    container.append(path);
    container.append(text);
    document.getElementById('pie').appendChild(container);
  }
}
let colors = [
  '#fd6363',
  '#fa9d5f',
  '#fac248',
  '#f8de6b',
  '#cbf779',
  '#73fdad',
  '#60a7f8',
  '#60c8f8',
  '#6f71f8',
  '#a27dfa',
  '#f391fc',
  '#f860be'
];

let names = [
  'Adi',
  'Alex',
  'Brady',
  'DD',
  'Jason',
  'Jessie',
  'Marty',
  'Matt',
  'Pras',
  'Rena',
  'Rod'
]

createPie(55, 55, 50, 6);


