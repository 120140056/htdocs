function UbahJudul(){
    let baru = document.getElementById("1").value;
    document.getElementById("judul").innerHTML = baru;
}

function NormalJudul(){
    document.getElementById("judul").innerHTML = "Tugas Minggu 9 : Praktik Memanipulasi DOM";
}

function Fibonacci(){
    let hasil = document.getElementById("hasil");
    let num = [];
    let num1 = document.getElementById("2.1").value;
    let num2 = document.getElementById("2.2").value;
    num[0] = parseInt(num1);
    num[1] = parseInt(num2);
    let text = "";
    
    for(let i=2; i<=15; i++){
        num[i] = num[i-2] + num[i-1];
    }
    for(let i=0; i<=15; i++){
        let temp = num[i] + " ";
        text += temp;
        temp = " ";
    }

    let x = document.createTextNode(text);
    let p = document.createElement("p");
    p.appendChild(x);
    hasil.appendChild(p);
}

function GantiTema(){
    let change = document.getElementById("3").value;
    if(change == "terang"){
        ModeTerang()
    }else if(change == "gelap"){
        ModeGelap()
    }else{
        WarnaRandom()
    }
}

function ModeTerang(){
    let bagDiv = document.getElementById("div");
    let bagBody = document.getElementById("body");
    bagBody.style.background = "#ffffff";
    bagBody.style.color = "#000000";
    bagDiv.style.backgroundColor = "#ffffff";
    bagDiv.style.color = "#000000";
}

function ModeGelap(){
    let bagDiv = document.getElementById("div");
    let bagBody = document.getElementById("body");
    bagBody.style.background = "#000000";
    bagBody.style.color = "#ffffff";
    bagDiv.style.backgroundColor = "#000000";
    bagDiv.style.color = "#ffffff";
}

function WarnaRandom(){
    let color1 = Math.floor(Math.random()*16777215).toString(16);
    let color2 = Math.floor(Math.random()*16777215).toString(16);
    let bagDiv = document.getElementById("div");
    let bagBody = document.getElementById("body");
    bagBody.style.background = "#" + color1;
    bagBody.style.color = "#" + color2;
    bagDiv.style.backgroundColor = "#" + color1;
    bagDiv.style.color = "#" + color2;
}