`use strict`;

let category = `dev`;



const getChuckButton = document.querySelector(`#getNorris`);
const submitFormButton = document.querySelector(`#submitForm`)

const categoryChangeForm = document.querySelector(`#categoryChangeForm`)
const closeModalButton = document.querySelector('#closeModal');

const getQuote = async category => {
    const chuckSaysParagraph = document.querySelector(`#chuckSays`);
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const modalWindow = document.querySelector('.modal-overlay');

    const theQuote = await getWithAwait(apiUrl);
    chuckSaysParagraph.innerHTML = theQuote.value;
    modalWindow.classList.toggle('open');
}

const  getCategories = async () => {
    const apiUrl = `https://api.chucknorris.io/jokes/categories`;
    const categorySelectLabel = document.querySelector('#categorySelectLabel');
    const categoryList = await getWithAwait(apiUrl)
        
    categoryList.filter(category =>  {
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
    categorySelectLabel.appendChild(categoryElement);
    
}




submitFormButton.addEventListener(`click`, function(e) {

    e.preventDefault();
    const categoryInput = document.querySelector('select')
    category = categoryInput.value;
    getQuote(category);

})
getChuckButton.addEventListener('click',function(e) {

        e.preventDefault();
        getQuote(category);
    })


closeModalButton.addEventListener('click', function(e) {

    const modalWindow = document.querySelector('.modal-overlay');
    modalWindow.classList.toggle('open');
})

getQuote(category);
getCategories();

