let raceChien = document.querySelector('#raceChien');
let afficheChien = document.querySelector('button');
let search = document.querySelector('#search');
let image = document.querySelector('#image');

raceChien.addEventListener('change', findDog);
image.addEventListener('click', favorites);
afficheChien.addEventListener('click', findDogRandom);


function favorites(){    
    let liste = document.querySelector('#favorites');
    let itemFavorites = document.createElement('li');
    let itemFavoritesImg = document.createElement('img'); 
    itemFavoritesImg.src = image.src;

    itemFavorites.appendChild(itemFavoritesImg);
    liste.appendChild(itemFavorites);


}

function findDog(){ 
     // ici on filtre au niveau de l'url pour specifier la race 
     const selectedRace = document.querySelector('#raceChien').value;
     fetch(`https://dog.ceo/api/breed/${selectedRace}/images/random`)
     .then(response => response.json())  // ici on recupere la reponse
         .then(data => {       // et la on fait de ce qu'on veut de la reponse
             if (data.status === 'success') {                 
                 const imageUrl = data.message;                
                 displayDogImage(imageUrl,selectedRace);
             } else {
                 alert('Une erreur s\'est produite le chien n\'a pu etre recupere.');
             }
         })
         .catch(error => {
             console.error('Erreur de fetch : ', error);
         });
   
}
function findDogRandom(){ 
    // ici on recupere un images l'url sans specifier la race  
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())  // ici on recupere la reponse
        .then(data => {       // et la on fait de ce qu'on veut de la reponse
            if (data.status === 'success') {
                console.log(data);
                const imageUrl = data.message;                
                displayDogImage(imageUrl,imageUrl);
            } else {
                alert('Une erreur s\'est produite le chien n\'a pu etre recupere.');
            }
        })
        .catch(error => {
            console.error('Erreur de fetch : ', error);
        });
}

// on charge l'image recuperer dans le fetch sur notre page web
function displayDogImage(imageUrl,selectedRace) { 
    const dogImage = document.querySelector('#content img');
    dogImage.src = imageUrl;
    const divContent = document.querySelector('#content');
    const imageName = document.querySelector('h2');
    imageName.textContent = selectedRace;
    divContent.style.background="#fff";
    
}
