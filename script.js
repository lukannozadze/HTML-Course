const showBtn = document.querySelector('.show-btn');
const factsContainer = document.querySelector('.facts-list-container');

const toggleFacts = ()=>{
factsContainer.classList.toggle('active');
}

showBtn.addEventListener('click',()=>{
    toggleFacts();
    console.log(factsContainer);
    
})