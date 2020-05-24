const mySpinner = () => {
    let x = 1024;
    let y = 10204;
    // let deg = Math.floor(Math.random() * (x - y)) + y;
    let deg = Math.floor(100000 + Math.random() * 90000);
    document.getElementById('pie').style.transform = "rotate(" + deg + "deg)";
}


let names, colors;

const createPie = (slices) => {
    let item, name, itemName, rotateAngle, sliceAngle, skewValue;
    shuffle(names)
    sliceAngle = 360 / slices;
    skewValue = sliceAngle + 90;
    for (let i = 0; i < slices; i++) {
        name = names[i];

        let nameTXT = document.createTextNode(name);

        itemName = document.createElement('div');
        itemName.setAttribute('class', 'text');
        itemName.style.cssText = "position: absolute;color: #fff;font-size: large; font-weight: bold; font-family: Arial, Helvetica, sans-serif; left: -100%;width: 200%;height: 200%;text-align: center;transform: skewY(" + (180 - skewValue) + "deg) rotate(" + sliceAngle / 2 + "deg);padding-top: 200px;;"
        itemName.append(nameTXT);

        item = document.createElement('li');
        rotateAngle = sliceAngle * i;

        item.style.cssText = "transform:rotate(" + rotateAngle + "deg) skewY(" + skewValue + "deg);background:" + colors[i];
        item.appendChild(itemName);
        item.setAttribute('class','slice')
        document.getElementById('pie').appendChild(item);
    }
}

const createList = (nameList) => {
    let nameCX, labelForName, nameDisplay, cxItem, br;

    for (let i = 0; i < nameList.length; i++) {
        name = nameList[i];
        nameCX = document.createElement('input');
        nameCX.setAttribute('type', 'checkbox');
        nameCX.setAttribute('id', name);
        nameCX.setAttribute('value', name);
        nameCX.setAttribute('checked', true);
        nameCX.setAttribute('class','nameCX');
        nameCX.setAttribute('onClick', `reCreatePie(this)`);
        // console.log(name);
        labelForName = document.createElement('label');
        labelForName.setAttribute('for', name);

        nameDisplay = document.createTextNode(name);
        labelForName.appendChild(nameDisplay);

        br = document.createElement('br');

        cxItem = document.getElementById('namebox');

        cxItem.appendChild(nameCX);
        cxItem.appendChild(labelForName);
        cxItem.append(br);
    }
}


const reCreatePie = (ele) => {

    let value = ele.value;
    if (!ele.checked) {
        if (names.length > 3) {
            const newNames = names.filter(e => e != value);
            names = newNames;
            document.getElementById('pie').innerHTML = '';
            createPie(names.length);
            console.log('this is new: ' + newNames)
        } else {
            alert('No less than 3 options');
            ele.checked = true;
            console.log(ele);
        }
    } else {
        names[names.length] = value;
        document.getElementById('pie').innerHTML = '';
        createPie(names.length);
    }
}

colors = [
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

names = [
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
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

createList(names);
createPie(names.length);

