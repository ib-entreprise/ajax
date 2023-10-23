let button = document.querySelector('#boutonChien'); // Utilisez l'ID
button.addEventListener('click', findDog);

function findDog(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                const imageUrl = data.message;
                // alert(imageUrl);
                displayDogImage(imageUrl);
            } else {
                alert('Une erreur s\'est produite le chien n\'a pu etre recupere.');
            }
        })
        .catch(error => {
            console.error('Erreur de fetch : ', error);
        });
}

function displayDogImage(imageUrl) {
    const dogImage = document.querySelector('#content img');
    dogImage.src = imageUrl;
    const divContent = document.querySelector('#content');
    divContent.style.background="#fff";
    
}
