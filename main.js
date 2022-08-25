const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'

const main = document.querySelector('main');
const filterBtn = document.querySelectorAll(".filter-btn");
const input = document.querySelector("input");
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const section = document.querySelector('section')


// fetch data
let cocktails;


async function getCocktails(){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    cocktails = data.drinks;
    console.log(cocktails)
    renderData(cocktails)
}
getCocktails();


//render data
const renderData = function(cocktails){
    cocktails.map((cocktail) =>{
        createCocktails(cocktail);
    })
    console.log(cocktails)
}


//create cards
const createCocktails = function(cocktail){
    const cocktailInfo = `
    <div class="cocktail-item">
    <div class="imp-wrapper">
        <img src=${cocktail.strDrinkThumb} alt="">
    </div>
    <div class="cocktail-info">
        <h3 class="cocktail-name">${cocktail.strDrink}</h3>
        <p class="cocktail-glass">${cocktail.strGlass}</p>
        <p class="cocktail-type">${cocktail.strAlcoholic}</p>
        <button class="details-btn">Details</button>
    </div>
</div>
    `;
    main.innerHTML += cocktailInfo

    const detailsBtn = document.querySelectorAll('.details-btn');
    detailsBtn.forEach((btn) =>{
        btn.addEventListener('click', () =>{
            main.innerHTML = ''
          
                cocktails.forEach((cocktail)=>{
                  
                })

               
                 showDetails(cocktail)  
                
           
        })
    })

};

function showDetails(cocktail){
    
    let cocktailDetails = `
    <div class="details-div">
    <div>
    <img src=${cocktail.strDrinkThumb} alt='image'>
    </div>
    <div class='detail-info'>
    <h1>${cocktail.strDrink}</h2>
    <p>Name: ${cocktail.strDrink}</p>
    <p>Category: ${cocktail.strCategory}</p>
    <p>Info: ${cocktail.strAlcoholic}</p>
    <p>Glass: ${cocktail.strGlass}</p>
    <p>Instruction: ${cocktail.strInstructions}</p>
    <p>Ingredients: ${cocktail.strIngredient1} ${cocktail.strIngredient2} ${cocktail.strIngredient3} ${cocktail.strIngredient4} ${cocktail.strIngredient5}</p>
    </div>
    </div>
    `;
    main.innerHTML = cocktailDetails
}


//--- Filtered buttons ---
    filterBtn.forEach(el => {
        el.addEventListener('click', (event)=>{
            console.log('clicked')
          main.innerHTML = '';
            renderData(filteredBtnOfCategory(cocktails, event.target.innerText))
        })
      })

      function filteredBtnOfCategory(arr, category){
        if(category === 'All'){
         return cocktails
        }
        else return arr.filter(el => el.strCategory === category)
      }

      //--- Search input ---

      input.addEventListener('input', (e)=>{
        const searchTerm = input.value
        const filteredData = cocktails.filter((cocktail) =>{
            return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
        });

        main.innerHTML = '';

        console.log(filteredData)

        if(filteredData.length>0){
          renderData(filteredData) 
        } else {
           main.innerHTML = `<p class="no-item">No Cocktails Found</p>`
        }
        
      })

// contact-form
aboutBtn.addEventListener('click', ()=>{
    section.innerHTML= ''
    section.innerHTML = `<div class="about-info">
    <h2>About Us</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima optio nulla quos. Eaque ratione repudiandae asperiores veritatis similique sint provident neque sit nemo aspernatur perferendis accusamus alias, sequi voluptate? Tempore.</p>
    </div>`
})