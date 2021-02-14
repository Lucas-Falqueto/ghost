let btnVoo = document.getElementById('btn-mudar-voo');
let btnVoo2 = document.getElementById('btn-mudar-voo-2');
let btnRemove = document.getElementById('btn-remove');

const voo = function(){
    btnVoo.addEventListener('click', function(){
    
        let ghost = document.querySelector('#ghost');
        ghost.classList.remove('voo2')
        ghost.classList.add('voo1');
       
    
    });

    btnVoo2.addEventListener('click', function(){
    
        let ghost = document.querySelector('#ghost');
        ghost.classList.remove('voo1');
        ghost.classList.add('voo2');
       
    
    });

    btnRemove.addEventListener('click', function(){
    
        let ghost = document.querySelector('#ghost');
        ghost.classList.remove('voo1');
        ghost.classList.remove('voo2');
       
    
    });
}

voo();

