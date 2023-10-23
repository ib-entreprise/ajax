let button = document.querySelector('#boutonChien');
button.addEventListener('click', findDog);

function findDog(){
    // ici on tente d'acceder a l'url qui remplace notre base de donnee
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())  // ici on recupere la reponse
        .then(data => {       // et la on fait de ce qu'on veut de la reponse
            if (data.status === 'success') {
                const imageUrl = data.message;                
                displayDogImage(imageUrl);
            } else {
                alert('Une erreur s\'est produite le chien n\'a pu etre recupere.');
            }
        })
        .catch(error => {
            console.error('Erreur de fetch : ', error);
        });
}

// on charge l'image recuperer dans le fetch sur notre page web
function displayDogImage(imageUrl) { 
    const dogImage = document.querySelector('#content img');
    dogImage.src = imageUrl;
    const divContent = document.querySelector('#content');
    divContent.style.background="#fff";
    
}
