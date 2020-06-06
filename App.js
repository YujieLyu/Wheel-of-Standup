let names, candidate, colors;

const createPie = (candidate) => {
    slices = candidate.length;
    // console.log(slices);
    let slice, name, sliceName, rotateAngle, sliceAngle, skewValue;
    shuffle(candidate);
    sliceAngle = 360 / slices;
    skewValue = sliceAngle + 90;
    for (let i = 0; i < slices; i++) {
        name = candidate[i];

        let nameTXT = document.createTextNode(name);

        sliceName = document.createElement('div');
        sliceName.setAttribute('class', 'pie_sliceName');
        sliceName.style.cssText = "position: absolute;color: #fff;font-size: large; font-weight: bold; font-family: Arial, Helvetica, sans-serif; left: -100%;width: 200%;height: 200%;text-align: center;transform: skewY(" + (180 - skewValue) + "deg) rotate(" + sliceAngle / 2 + "deg);padding-top: 200px;"
        sliceName.append(nameTXT);

        slice = document.createElement('li');
        rotateAngle = sliceAngle * i;

        slice.style.cssText = "transform:rotate(" + rotateAngle + "deg) skewY(" + skewValue + "deg);background:" + colors[i];
        slice.appendChild(sliceName);
        slice.setAttribute('class', 'pie_slice')
        document.getElementById('pie').appendChild(slice);
    }
}

const createList = (nameList) => {
    let nameCX, labelForName, nameDisplay, today, cxItem, br;
    today = getWeekDay();

    for (let i = 0; i < nameList.length; i++) {
        name = nameList[i];
        // console.log(name)
        nameCX = document.createElement('input');
        nameCX.setAttribute('type', 'checkbox');
        nameCX.setAttribute('id', name);
        nameCX.setAttribute('value', name);
        labelForName = document.createElement('label');

        if (name === "Jessie" && (today === 3 || today === 4)) {
            nameDisplay = document.createTextNode(name + ' (Will not work on Thu & Fri)');
            names = names.filter(e => e !== "Jessie");

        } else {
            nameCX.setAttribute('checked', true);
            labelForName.setAttribute('for', name);
            nameDisplay = document.createTextNode(name);
        }
        labelForName.setAttribute('for', name);
        nameCX.setAttribute('class', 'nameCX');
        nameCX.setAttribute('onClick', `reCreatePie(this)`);
        // console.log(name);

        labelForName.appendChild(nameDisplay);


        br = document.createElement('br');

        cxItem = document.getElementById('leftBox');

        cxItem.appendChild(nameCX);
        cxItem.appendChild(labelForName);
        cxItem.append(br);
    }
}


const reCreatePie = (ele) => {

    let value = ele.value;
    console.log(value);
    if (!ele.checked) {
        if (names.length > 3) {
            names = names.filter(e => e !== value);
            document.getElementById('pie').innerHTML = '';
            createPie(names);
        } else {
            alert('No less than 3 options');
            ele.checked = true;
            console.log(ele);
        }
    } else {
        names[names.length] = value;
        document.getElementById('pie').innerHTML = '';
        createPie(names);
    }
}

const mySpinner = () => {
    let x = 1024;
    let y = 10204;
    let deg = Math.floor(Math.random() * (x - y)) + y;
    // let deg = Math.floor(100000 + Math.random()  * 90000);
    document.getElementById('pie').style.transform = "rotate(" + deg + "deg)";
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
} 

const getWeekDay = () => {
    let d = new Date();
    return d.getDay();
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

createList(names);
createPie(names);

