const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
    function init(){
        //document.getElementById


    }
    
    

        let selectedMonth = 0;
        let click = null;
        let planStore = localStorage.getItem('events') 
                        ? JSON.parse(localStorage.getItem('events')) : [];
        
        

    
    
    

    function loadCalendar(){/**loadCalendar */
        /*Date compuation*/       
        const dt = new Date();

        let month = dt.getMonth();       
        const day = dt.getDate();
        let year = dt.getFullYear();
        if (selectedMonth !== 0){
            month = month + selectedMonth;
        }
        const firstOfMonth = new Date(year, month, 1);
        const monthDays = new Date(year, month + 1, 0).getDate();
        
        const dateString = firstOfMonth.toLocaleDateString('en-gb', options);
        const firstDayName = dateString.split(',')
        const inbetweenDays = weekdays.indexOf(firstDayName[0]);
        if (month > 11){
            month = month -12;
            year++
        }
        document.getElementById('monthDisplay').innerText = monthArr[month] + ' '+ year;

        /*calendar part*/
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = '';
        
        /*box making*/
        for (let i = 1; i <= inbetweenDays + monthDays + 7; i++){ /*+7 to allow scrolling */
            const daybox = document.createElement('div');
            daybox.classList.add('day');
           
            if(i <= inbetweenDays + monthDays){
            var numAdd = document.getElementById('dateChoice');
            let options = document.createElement('option');
            options.text =  i + ' ';
            options.value = i;
            numAdd.add(options);
            }
            if (i > inbetweenDays + monthDays){
                daybox.classList.add('padding');
            }
            else if (i > inbetweenDays){
                daybox.innerText = i - inbetweenDays;
                
                const dayString = `${i - inbetweenDays }/${month + 1}/${year}`;
                console.log(dayString);
                //planStore.find((element) => element ===)


                daybox.addEventListener(click,  () => loadToSpace());

            }
            else{
                daybox.classList.add('padding');
            }
            document.getElementById('calendar').appendChild(daybox);
        }
    }
    function makeTheDate(dayIn){
        const dt = new Date();

        let month = dt.getMonth();       
        const day = dayIn;
        const year = dt.getFullYear();
        if (selectedMonth !== 0){
            month = month + selectedMonth;
        }   
        const wholeDate = new Date(year, month, day);    
        const dateString = wholeDate.toLocaleDateString('en-gb');
        console.log(dateString);
        getPlan(dateString);

    }
    function getPlan(eventDate){
        let key = 'events';
        let plan = document.getElementById('calendarinput').value;
        let date1 = eventDate;
        if (plan){
            let event = {
                date: date1, 
                title: plan 
            };
            let storage = localStorage.getItem(key);
            let EVENTS = [];
            if(storage){
                EVENTS = JSON.parse(storage);
            }
            EVENTS.push(event);
            localStorage.setItem(key, JSON.stringify(EVENTS));
            document.getElementById('calendarinput').value = '';
        }
    }
    function loadToSpace(){
        
    }
    function initButtons() {
        document.getElementById('nextButton').addEventListener('click', () => {
            selectedMonth++;
            loadCalendar();
        });
      
        document.getElementById('backButton').addEventListener('click', () => {
            selectedMonth--;
            loadCalendar();
        });
    
        document.getElementById('calendarSave').addEventListener('click', () =>{
            
            selectElement = document.querySelector('#dateChoice');
            output = selectElement.value;
            console.log(output);
            makeTheDate(output);
        });
    
    }
    initButtons();
    loadCalendar();