// At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.
// When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.
   //fetch data from this url http://localhost:3000/monsters/?_limit=50&_page=1
   // we have data, what do we do with it?
    // show each monster: age, description, and age using forEach
        // forEach
        // show data 
// Above your list of monsters, you should have a form to create a new monster. You should have fields for name, age, and description, and a 'Create Monster Button'. When you click the button, the monster should be added to the list and saved in the API.

// fetch is asynchronous
document.addEventListener("DOMContentLoaded", () => {
    fetchMonster()
    createForm()
    document.querySelector("#monster-form").addEventListener('submit', (event) => {
        event.preventDefault()
        let name = document.querySelector('#monster-name').value
        let age = document.querySelector('#monster-age').value
        let description = document.querySelector('#monster-description').value
        monsterObj = {
            name: 'name', 
            age: 'age',
            description: 'description'
        }
        postNewMonster(monsterObj)
    } )
})

const createForm = () => {
    let formContainer = document.querySelector("#create-monster")
    let form = document.createElement("form")
    form.id = 'monster-form'
    let nameInput = document.createElement('input')
    let nameLabel = document.createElement('label')
    nameLabel.innerText = 'name'
    nameInput.id = 'monster-name'
    let ageInput = document.createElement('input')
    let ageLabel = document.createElement('label')
    ageLabel.innerText = 'age'
    ageInput.id = 'monster-age'
    let descriptionInput = document.createElement('input')
    let descriptionLabel = document.createElement('label')
    descriptionLabel.innerText = 'description'
    descriptionInput.id = 'monster-description'
    let h2 = document.createElement('h2')

    let button = document.createElement('button')
    button.innerText = 'Make Monster'


    let formInput = 
    h2.innerHTML = 'Create Monster Form'
    form.append(nameLabel, nameInput, ageLabel, ageInput, descriptionLabel, descriptionInput, button)
    formContainer.append(h2, form)
}

const postNewMonster = ({name, age, description, event}) => {
    method: "POST",
    fetch(`http://localhost:3000/monsters`, {
        headers:
{
    "Content-Type": "application/json",
     Accept: "application/json"
}, body: JSON.stringify({name, age, description})
    }).then(response => response.json())
      .then(monster => {
        addOneMonster(monster)
        event.target.reset()
      })

}

const fetchMonster = () => {
    let monsterContainer = document.querySelector("#monster-container")
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=1`) // first promise
        .then(response => response.json())
        .then(monsterData => {
            // console.log('monsterData', monsterData)
            monsterData.forEach((monster) => {
                // need to show each of these monsters 
                //show name, age, and description
                let card = document.createElement('div')
                let name = document.createElement('h2')
                let age = document.createElement('h4')
                let description = document.createElement('p')
                name.innerText = monster.name
                age.innerText = `Age: ${monster.age}`
                description.innerText = `Bio: ${monster.description}`
                card.append(name, age, description)
                monsterContainer.append(card)
            });
        })

}

