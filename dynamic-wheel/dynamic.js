const mySpinner = () => {
    let x = 1024;
    let y = 9999;
    let deg = Math.floor(Math.random() * (x - y)) + y;
    document.getElementById('pie').style.transform = "rotate(" + deg + "deg)";
}



const createPie = (slices) => {
    let item, itemName, rotateAngle, sliceAngle, skewValue;
    sliceAngle=360 / slices;
    skewValue = sliceAngle + 90;
    for (let i = 0; i < slices; i++) {

        let nameTXT = document.createTextNode(names[i]);
        console.log(name);

        itemName = document.createElement('div');
        itemName.setAttribute('class', 'text');
        itemName.style.cssText="position: absolute;color: #fff;font-size: large; font-weight: bold; font-family: Arial, Helvetica, sans-serif; left: -100%;width: 200%;height: 200%;text-align: center;transform: skewY("+ (180-skewValue)+"deg) rotate("+sliceAngle/2+"deg);padding-top: 200px;;"
        itemName.append(nameTXT);

        item = document.createElement('li');
        rotateAngle =sliceAngle * i;
        
        item.style.cssText = "transform:rotate(" + rotateAngle + "deg) skewY(" + skewValue + "deg);background:"+colors[i];
        item.appendChild(itemName);
        document.getElementById('pie').appendChild(item);
    }
}



let colors = [
    '#fd6363',
    '#fa9d5f',
    '#fac248',
    '#f8de6b',
    '#cbf779',
    '#73fdad',
    '#60c8f8',
    '#60a7f8',
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
    'Rod',
    'xyz'
]

createPie(11);