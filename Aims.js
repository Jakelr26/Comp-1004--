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
          APP.loadArcive();
          APP.scorecounter();


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
            document.getElementById('Aim').value = '';
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

        //for each loop to append the local storage array to document fragment.
         obj.forEach((objs) => {
            let li = document.createElement('li');
            li.textContent = objs;
            li.className = 'checkList'
            DocumentFragment.appendChild(li);
         }); 
                    
         aimsSpace.appendChild(DocumentFragment);
         
         //Tick symbol button stuff
         let elementList = document.getElementsByClassName('checkList');
         for (let i = 0; i < elementList.length; i++){
            let span = document.createElement('SPAN');
            let TickSymbol = document.createTextNode('\u2714')
            span.className = 'close';
            span.appendChild(TickSymbol);
            elementList[i].appendChild(span);
         } 
         
         let list = document.querySelector('.WriteAims');
         list.addEventListener('click', function(ev) {
           if (ev.target.tagName === 'LI') {
             ev.target.classList.toggle('checked');
           }
         }, false);

         let close = document.getElementsByClassName('close');
         for (let i = 0; i < close.length; i++){
            close[i].onclick = function(){
                this.parentElement.style.display= 'none'; 
                //console.log(obj[i]);
                let transfer = i;
                APP.newArchive(transfer); 
                APP.deleteOldAim(transfer);
            }
         }




    },

    deleteOldAim(deleteItem){
        let storage = localStorage.getItem('aims-storage');
        del = JSON.parse(storage);
        del.splice(deleteItem, 1);
        localStorage.setItem('aims-storage', JSON.stringify(del));
        APP.loadAims();
    },

    newArchive(newItem){

            let PreArc = localStorage.getItem('aims-storage');
            JSONarc = JSON.parse(PreArc);
            let arc = JSONarc[newItem];

            let key = 'aims-archive'; 
            let storage = localStorage.getItem(key);
            let ARCHS = [];
            if (storage){
                ARCHS = JSON.parse(storage);
            }
            ARCHS.push(arc);
            localStorage.setItem(key, JSON.stringify(ARCHS));
            APP.loadArcive();
    },

    loadArcive(){
        
        let key = 'aims-archive';
        let storage = localStorage.getItem(key);
        obj = JSON.parse(storage);

        let archSpace = document.getElementById('storeAims');
        storeAims.innerHTML = '';
        let DocumentFragment = document.createDocumentFragment();

       //for each loop to append the local storage array to document fragment.
        obj.forEach((objs) => {
           let li = document.createElement('li');
           li.textContent = objs;
           li.className = 'archiveList'
           DocumentFragment.appendChild(li);
        }); 
                   
        archSpace.appendChild(DocumentFragment);

    },
    scorecounter(){
        let key = 'aims-archive';
        let storage = localStorage.getItem(key);
        obj = JSON.parse(storage);
        let scoresize = obj.length;
        document.getElementById('score').innerHTML = scoresize;
    }
};

document.addEventListener('DOMContentLoaded', APP.init);
