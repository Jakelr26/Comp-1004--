const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    function init(){
        document.getElementById


    }
    
    
    
    function calendar(){
        let selectedMonth = 0;
        let click = null;
        let planStore = localStorage.getItem('events') 
                        ? JSON.parse(localStorage.getItem('events')) : [];
        
        

    
    
    }

    function loadCalendar(monthParam){
        /*Date compuation*/       
        const dt = new Date();
        if (monthParam !== 0){
            month = dt.getMonth() + monthParam;
        }
        const month = dt.getMonth();
        const day = dt.getDate();
        const year = dt.getFullYear();
        const firstOfMonth = new Date(year, month, 1);
        const monthDays = new Date(year, month + 1, 0).getDate();
        
        const options = {
            weekday: "long",
            year: "numeric",
            month: "numeric",
            day: "numeric",
          };
        const dateString = firstOfMonth.toLocaleDateString('en-gb', options);
        const firstDayName = dateString.split(',')
        const inbetweenDays = weekdays.indexOf(firstDayNames[0]);
        document.getElementById('monthDisplay').innerText = monthArr[month+1] + ' '+ year;

        /*calendar part*/
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = '';
        
        /*box making*/
        for (let i = 1; i <= inbetweenDays + monthDays + 7; i++){ /*+7 to allow scrolling */
          
        }
    }

