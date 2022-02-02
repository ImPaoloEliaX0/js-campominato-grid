// elemento container
const grid = document.getElementById('cont-2');
// elemento bottone

const play = document.getElementById('play');

const regole = document.getElementById('regolamento');

//selettore di difficoltà

const select = document.getElementById('select');

//inizio del gioco


play.addEventListener('click', function() {
    grid.innerHTML = '';

    let numBox;
    let diff;

    if (select.value == 'Insane') {
         numBox = 49;
         diff = 'Insane';
    
    } else if (select.value == 'Medium') {
         numBox = 81;
         diff = 'Medium';
    
    } else {
         numBox = 100;
         diff = 'Easy';
    }

    //griglia dinamica

    for (let i = 1; i <= numBox; i++) {
        const node = document.createElement('div');
        node.innerHTML = i;
        node.classList.add('square' + diff); 
        
        node.classList.add('appoggio');   

        node.addEventListener('click', handleCellClick);

        grid.appendChild(node);
    }

    //ciclo per il click random 

    for (let i = 0; i <= 16; i++) {
        let elements = document.querySelectorAll('.appoggio')
        let random1 = Math.floor(Math.random() * elements.length);
        
        elements[random1].addEventListener('click', function() 
            {
                this.classList.add('squareRed');
                setTimeout(() => {alert('Hai beccato una mina!')}, 200);
                setTimeout(() => {grid.innerHTML = ''}, 1000);
            })
    }
})



function handleCellClick (){

    this.classList.add('squareBlue');

    this.removeEventListener('click' , handleCellClick); // noclick

}

