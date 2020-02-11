`use strict`;

let category = `dev`;


//iife (immediately invoked function expression)
const getChuckButton = document.querySelector(`#getNorris`);
const submitFormButton = document.querySelector(`#submitForm`)
const chuckSaysParagraph = document.querySelector(`#chuckSays`);
const categoryChangeForm = document.querySelector(`#categoryChangeForm`)

const getNorris = function(category) {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    
    
    get(apiUrl)
    .then(function(response) {
        chuckSaysParagraph.innerHTML = response.value;
    })

};

function getCategories() {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    get(apiUrl).then(function(response) {
        
    const categoryList = response.filter(function(category) {
        if (category != 'explicit') {
            return category
        }
    
    })
    const categoryElement = document.createElement('select');
    categoryList.map(function(category) {
        console.log(category);
        const categoryOption = document.createElement('option');
        console.log(categoryOption);
        categoryOption.value = category;
        categoryOption.text = category;
        
        categoryElement.appendChild(categoryOption)
        
    })
    document.body.appendChild(categoryElement);
    })
}



submitFormButton.addEventListener(`click`, function(e) {

    e.preventDefault();
    const categoryInput = document.querySelector('select')
    category = categoryInput.value;
    getNorris(category);

})
getChuckButton.addEventListener('click',function(e) {

        e.preventDefault();
        getNorris(category);
    })




getNorris(category);
getCategories();

