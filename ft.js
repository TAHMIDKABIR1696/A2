// fortune 
const fortunes = [
    "You will find great success soon.",
    "A surprise is waiting for you.",
    "Stay positive, good things are coming.",
    "An opportunity will knock on your door.",
    "Someone will bring joy into your life.",
    "You will accomplish great things today.",
    "Happiness is around the corner.",
    "A big change is coming.",
    "You will make a new friend soon.",
    "Expect good news in the coming days."
];


function displayFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById('fortuneBox').innerText = fortunes[randomIndex];
}


function changeFontColor() {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('fortuneBox').style.color = randomColor;
}


function changeBgColor() {
    const bgColors = ["lightyellow", "lightblue", "lightpink", "lightgreen", "lightgrey"];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    document.getElementById('fortuneBox').style.backgroundColor = randomBgColor;
}


function changeBorderColor() {
    const borderColors = ["black", "red", "blue", "green", "purple"];
    const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    document.getElementById('fortuneBox').style.borderColor = randomBorderColor;
}


function changeFont() {
    const fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById('fortuneBox').style.fontFamily = randomFont;
    const randomFontSize = Math.floor(Math.random() * 10 + 16) + "px";
    document.getElementById('fortuneBox').style.fontSize = randomFontSize;
}


window.onload = displayFortune;

// stop watch
let timer;
let time = 0;
let isRunning = false;


function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (time < 30) {
                time += 3;
                document.getElementById('timerDisplay').textContent = time;
            } else {
                stopTimer();  
            }
        }, 3000);  
    }
}


function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}


function resetTimer() {
    stopTimer();
    time = 0;
    document.getElementById('timerDisplay').textContent = time;
}

//todo
const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task.');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }
    inputBox.value = '';
    save();
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        
        let checkIcon = e.target.querySelector('i');

        if (!checkIcon) {
            
            let icon = document.createElement('i');
            icon.className = 'bi bi-check-square-fill';
            icon.id = 'checked';
            e.target.insertBefore(icon, e.target.firstChild);
        } else {
            
            checkIcon.remove();
        }
        save();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.style.display = 'none';
        save();
    }
}, false);

function save() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function display() {
    listContainer.innerHTML = localStorage.getItem('data');
}
display();