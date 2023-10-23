let raceChien = document.querySelector('#raceChien');
raceChien.addEventListener('change', findDog);
raceChien.addEventListener('click', findDog);


function findDog(){ 
    // ici on filtre au niveau de l'url pour specifier la race 
    const selectedRace = document.querySelector('#raceChien').value;
    
    fetch(`https://dog.ceo/api/breed/${selectedRace}/images/random`)
    .then(response => response.json())  // ici on recupere la reponse
        .then(data => {       // et la on fait de ce qu'on veut de la reponse
            if (data.status === 'success') {
                console.log(data);
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

// on charge l'image recuperer dans le fetch sur notre page web
function displayDogImage(imageUrl,selectedRace) { 
    const dogImage = document.querySelector('#content img');
    dogImage.src = imageUrl;
    const divContent = document.querySelector('#content');
    const imageName = document.querySelector('h2');
    imageName.textContent = selectedRace;

    divContent.style.background="#fff";
    
}
