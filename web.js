setInterval(updateTime, 1000);

function updateTime(){
    let dt = new Date();
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();

    if (hr>12){
        hr = hr-12;
    }

    let x = sec * 6;

    let y = (min * 6) + (sec * 0.1);

    let z = (hr * 30) + (min * 0.5) + (sec * 0.1)

    let secondHand = document.querySelector('.sec');
    secondHand.style.transform = `rotate(${x}deg)`

    let minuteHand = document.querySelector('.minute');
    minuteHand.style.transform = `rotate(${y}deg)`

    let hourHand = document.querySelector('.hour');
    hourHand.style.transform = `rotate(${z}deg)`;
}


