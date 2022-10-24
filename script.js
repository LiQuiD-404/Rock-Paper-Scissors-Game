let user = 0;
let cpu = 0;
document.getElementById("user").textContent = user;;
document.getElementById("cpu").textContent = cpu;

function reset_score() {
    user = 0;
    cpu = 0;
    document.getElementById("user").textContent = user;;
    document.getElementById("cpu").textContent = cpu;
}

function rock() {
    document.getElementById("paper").style.opacity = 0.5;
    document.getElementById("scissor").style.opacity = 0.5;
    document.getElementById("rock_disable").disabled = true;
    document.getElementById("paper_disable").disabled = true;
    document.getElementById("scissor_disable").disabled = true;
    compare("Rock");

}

function random_choice() {
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    if (rand == 1) {
        return "Rock";
    }
    else if (rand == 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
function paper() {
    document.getElementById("rock").style.opacity = 0.5;
    document.getElementById("scissor").style.opacity = 0.5;
    document.getElementById("rock_disable").disabled = true;
    document.getElementById("paper_disable").disabled = true;
    document.getElementById("scissor_disable").disabled = true;
    compare("Paper");
}
function scissor() {
    document.getElementById("paper").style.opacity = 0.5;
    document.getElementById("rock").style.opacity = 0.5;
    document.getElementById("rock_disable").disabled = true;
    document.getElementById("paper_disable").disabled = true;
    document.getElementById("scissor_disable").disabled = true;
    compare("Scissor");
}

function night_toggle() {
    let mode = document.body.style.backgroundColor;
    if (mode == "rgb(229, 231, 234)") {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#BB86FC";
        document.getElementById("sun").style.visibility = "visible";
        document.getElementById("night").style.visibility = "hidden";
    }
    else {
        document.body.style.backgroundColor = "#E5E7EA";
        document.body.style.color = "black";
        document.getElementById("sun").style.visibility = "hidden";
        document.getElementById("night").style.visibility = "visible";
    }
}

function display() {
    var x = document.getElementById("win");
    x.style.visibility = "visible";
}


async function compare(str) {

    let x = random_choice();
    let s = document.getElementById('gamestart');
    document.getElementById('gamestart').innerHTML = str + "\u00A0 \u00A0 \u00A0 VS \u00A0 \u00A0 \u00A0" + x
    await new Promise(r => setTimeout(r, 2000));
    if (str.toString() === "Rock") {
        if (x.toString() === "Scissor") {
            document.getElementById('gamestart').innerHTML = "You Won!";
            user++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;
        }
    }
    if (str.toString() === "Rock") {
        if (x.toString() === "Paper") {
            document.getElementById('gamestart').innerHTML = "You Lose!";
            cpu++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;
        }
    }
    if (str.toString() === "Rock") {
        if (x.toString() === "Rock") {
            document.getElementById('gamestart').innerHTML = "Match Tied!";
        }
    }
    if (str.toString() === "Paper") {
        if (x.toString() === "Scissor") {
            document.getElementById('gamestart').innerHTML = "You Lose!";
            cpu++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;

        }
    }
    if (str.toString() === "Paper") {
        if (x.toString() === "Paper") {
            document.getElementById('gamestart').innerHTML = "Match Tied!";
        }
    }
    if (str.toString() === "Paper") {
        if (x.toString() === "Rock") {
            document.getElementById('gamestart').innerHTML = "You Won!";
            user++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;
        }
    }
    if (str.toString() === "Scissor") {
        if (x.toString() === "Scissor") {
            document.getElementById('gamestart').innerHTML = "Match Tied!";
        }
    }
    if (str.toString() === "Scissor") {
        if (x.toString() === "Paper") {
            document.getElementById('gamestart').innerHTML = "You Won!";
            user++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;
        }
    }
    if (str.toString() === "Scissor") {
        if (x.toString() === "Rock") {
            document.getElementById('gamestart').innerHTML = "You Lose!";
            cpu++;
            document.getElementById("user").textContent = user;;
            document.getElementById("cpu").textContent = cpu;
        }
    }



    await new Promise(r => setTimeout(r, 1000));
    reset();



}
function reset() {
    document.getElementById("rock").style.opacity = 1;
    document.getElementById("scissor").style.opacity = 1;
    document.getElementById("paper").style.opacity = 1;
    document.getElementById('gamestart').innerHTML = " ";
    document.getElementById("rock_disable").disabled = false;
    document.getElementById("paper_disable").disabled = false;
    document.getElementById("scissor_disable").disabled = false;

}