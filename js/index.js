document.addEventListener('DOMContentLoaded', ()=>{
    // Composant de réfèrence
    const main_container = document.getElementsByClassName('main-container')[0];

    // Nombre max de photos a generer
    let max_photos = 10;

    // Un tableau
    const all_images = ['./image/1.jpg',
    './image/2.jpg',
    './image/3.jpg',
    './image/4.jpg',
    './image/5.jpg',
    './image/6.jpg',
    './image/7.jpg' ];

    // Fonction pour avoir un numéro entier aléatoire
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Evènement au clique
    main_container.addEventListener('click', (event)=>{
        // Mon numéro aléatoire
        let random_number = randomIntFromInterval(0, all_images.length-1);

        // Supprime le premier element du main container si le nombre dépasse max_photos
        if( main_container.children.length > max_photos){
            let first_child = document.getElementsByClassName('image')[0];
            main_container.removeChild( first_child );
        }
        // genere du html
        main_container.innerHTML += "<img class='image' src=" + all_images[random_number] + ">";

        // Je lui donne une position
        main_container.children[main_container.children.length-1].style.top = event.clientY + 'px';
        main_container.children[main_container.children.length-1].style.left = event.clientX + 'px';

    });
});