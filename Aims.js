const APP = {
    keybase: 'aims-storage',
    keys: [],
    init(){
        
        document.getElementById('AimSave').addEventListener('click', APP.saveAim);
        
        document.getElementById('Aim').addEventListener('keypress', function(event) {
            if (event.key === "Enter") {
              event.preventDefault();
              APP.saveAim(event); 
            }
          });
          APP.loadAims();

    },

    saveAim(ev){
        ev.preventDefault();
        let Aim = document.getElementById('Aim').value;

        if (Aim){
            let key = APP.keybase; 
            let storage = localStorage.getItem(key);
            let AIMS = [];
            if (storage){
                AIMS = JSON.parse(storage);
            }
            AIMS.push(Aim);
            localStorage.setItem(key, JSON.stringify(AIMS));
            document.getElementById('Aim').value = ''
            APP.loadAims();
            
        }
    },
    
    loadAims(){
         let key = 'aims-storage';
         let storage = localStorage.getItem(key);
         obj = JSON.parse(storage);

         let aimsSpace = document.getElementById('WriteAims');
         WriteAims.innerHTML = '';
         let DocumentFragment = document.createDocumentFragment();


         obj.forEach((objs) => {
            let li = document.createElement('li');
            li.textContent = objs;
            li.className = 'checkList'
            DocumentFragment.appendChild(li);
            

         }); 
                    
         aimsSpace.appendChild(DocumentFragment);

         let elementList = document.getElementsByClassName('checkList');
         for (let i = 0; i < elementList.length; i++){
            let span = document.createElement('span');
            let TickSymbol = document.createTextNode('\u2714')
            span.className = 'close';
            span.appendChild(TickSymbol);
            elementList[i].appendChild(span);

         } 

    },
};

document.addEventListener('DOMContentLoaded', APP.init);
