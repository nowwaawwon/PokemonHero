const pok = document.querySelector(".pok");

async function errror(message){
        const errorDisplay = document.createElement("p");
        errorDisplay.textContent=message;
        errorDisplay.classList.add("errror");
        pok.textContent=errorDisplay.textContent;
    }

async function PokeFunction(){
    try{
        const it = document.getElementById('it').value.toLowerCase();
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${it}`);
        if(!res.ok){
            throw new Error();
        }
        const data = await res.json();
        const PS = data.sprites.front_default;
        const imgElement = document.getElementById('PS');

        imgElement.src = PS;
        imgElement.style.display="block";
    }
    catch(error){
        errror('Enter only pokemon Sprites!!!')
    }
}

// => Internetga qo'yish
