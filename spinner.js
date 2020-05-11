const mySpinner = () => {
    let x = 1024;
    let y = 9999;
    let deg = Math.floor(Math.random() * (x - y)) + y;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

    // let ele = document.getElementById('mainbox');
    // ele.classList.remove('animate');
    // setTimeout(() => {
    //     ele.classList.add('animate');
    // }, 5000);

}

const teamMembers=()=>{
    let file=require("fs");
    let text=file.readFileSync("./input.txt");
    text.split("\n");
}