document.addEventListener('DOMContentLoaded', ()=>{
    // Composant de réfèrence
    const main_container = document.getElementsByClassName('main-container')[0];

    // Mes images
    const image_1 = document.getElementsByClassName('image-1')[0];
    const image_2 = document.getElementsByClassName('image-2')[0];
    const image_3 = document.getElementsByClassName('image-3')[0];

    // Un tableau
    const all_images = [];

    // Toutes mes images dans le tableau
    all_images.push(image_1, image_2, image_3);

    // Fonction pour avoir un numéro entier aléatoire
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Evènement au clique
    main_container.addEventListener('click', (event)=>{
        // Mon numéro aléatoire
        let random_number = randomIntFromInterval(0, all_images.length-1);
        
        // Je lui donne une position
        all_images[random_number].style.top = event.clientY + 'px';
        all_images[random_number].style.left = event.clientX + 'px';
        all_images[random_number].style.opacity = "1";
        // all_images.forEach(element => {
            // if(element == all_images[random_number]){
            //     element.style.opacity = "1";
            // } else {
            //     element.style.opacity = "0";
            // }
        // });
    });
});