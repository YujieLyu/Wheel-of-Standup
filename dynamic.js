let names, colors;

const createPie = (candidates) => {
    slices = candidates.length;
    // console.log(slices);
    let slice, name, sliceName, rotateAngle, sliceAngle, skewValue;
    shuffle(candidates);
    sliceAngle = 360 / slices;
    skewValue = sliceAngle + 90;
    for (let i = 0; i < slices; i++) {
        name = candidates[i];

        let nameTXT = document.createTextNode(name);

        sliceName = document.createElement('div');
        sliceName.setAttribute('class', 'pie_sliceName');
        sliceName.style.cssText = "position: absolute;color: #fff;font-size: 20px; font-family: monospace;font-weight: bold; left: -100%;width: 200%;height: 200%;text-align: center;transform: skewY(" + (180 - skewValue) + "deg) rotate(" + sliceAngle / 2 + "deg);padding-top: 200px;"
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

        // if (name === "Jessie" && (today === 3 || today === 4)) {
        //     nameDisplay = document.createTextNode(name + ' (will not work on Thu & Fri)');
        //     // names = names.filter(e => e !== "Jessie");

        // } else 
        if(name==="Marty"||name==="Jessie"||name==="Matt"||name==="Rena"){
            nameDisplay = document.createTextNode(name + ' (alreay ran this round)');
            // names = names.filter(e => e !== "Jessie");
        } else{
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
        if (candidates.length > 3) {
            candidates = candidates.filter(e => e !== value);
            document.getElementById('pie').innerHTML = '';
            createPie(candidates);
        } else {
            alert('No less than 3 options');
            ele.checked = true;
            console.log(ele);
        }
    } else {
        candidates[candidates.length] = value;
        document.getElementById('pie').innerHTML = '';
        createPie(candidates);
    }
}

const mySpinner = () => {
    let x = 1024;
    let y = 60204;
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

candidates=[
    'Adi',
    'Alex',
    'Brady',
    'DD',
    'Jason',
    // 'Jessie',
    // 'Marty',
    // 'Matt',
    'Pras',
    // 'Rena',
    'Rod',
]

createList(names);
createPie(candidates);

