let navigation = 0; //navigating the months - track month
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events;')) : []; //conditional operator checking if events exists

const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load(){
    const date = new Date();
    console.log(date);
}

load();