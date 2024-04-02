const APP = {
    keybase: 'aims-storage',
    keys: [],
    init(){
        document.getElementById('AimSave').addEventListener('click', APP.saveAim);
        
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

        }
    },
    
    loadAims(){
         let key = 'aims-storage';
         let storage = localStorage.getItem(key);
         obj = JSON.parse(storage);

         let aimsSpace = document.getElementById('WriteAims');
         let DocumentFragment = document.createDocumentFragment();

         obj.forEach((objs) => {
            let div = document.createElement('div');
            div.textContent = objs;
            DocumentFragment.appendChild(div);
         }); 
                    
         aimsSpace.appendChild(DocumentFragment);
    },
};

document.addEventListener('DOMContentLoaded', APP.init);
