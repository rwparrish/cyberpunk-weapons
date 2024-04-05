document.addEventListener("DOMContentLoaded", () => {
    init()
})

const weaponsInStash = []

 const init = () => {
    fetchWeapons()
 }

const fetchWeapons = () => {
    fetch("http://localhost:3000/weapons")
        .then(resp => resp.json())
        .then(weapons => renderWeaponsList(weapons))
}

const renderWeaponsList = (weapons) => {
    const weaponsListContainer = document.getElementById('weapons-list')
    weapons.forEach(weapon => {
        const weaponLi = document.createElement('li')
        const weaponNameSpan = document.createElement('span')
        weaponNameSpan.classList.add('weaponSpan')
        weaponLi.classList.add('weapon-li')
        weaponNameSpan.innerText = weapon.name
        weaponLi.id = weapon.id
        weaponLi.append(weaponNameSpan)
        weaponsListContainer.append(weaponLi)

        weaponNameSpan.addEventListener('mouseover', () => {
            weaponNameSpan.classList = 'highlight-effect'
        })
        weaponNameSpan.addEventListener('mouseleave', () => {
            weaponNameSpan.classList.remove('highlight-effect')
        })
        weaponNameSpan.addEventListener('click', () => renderWeaponCard(weapon))
    })
}

const renderWeaponCard = (weapon) => {
    const weaponCardContainer = document.getElementById("weapon-card-container")

    // build weapon card to display details on right hand side of screen
    const weaponCard = document.createElement("div")
    weaponCard.classList.add("weapon-card")

    const title = document.createElement("h2")
    title.textContent = weapon.name
    weaponCard.appendChild(title)

    const type = document.createElement("p");
    type.textContent = `Type: ${weapon.type}`
    weaponCard.appendChild(type)

    const damage = document.createElement("p")
    damage.textContent = `Damage: ${weapon.damage}`
    weaponCard.appendChild(damage)

    const criticalChance = document.createElement("p")
    criticalChance.textContent = `Critical Chance: ${weapon.criticalChance}%`
    weaponCard.appendChild(criticalChance);

    const manufacturer = document.createElement("p")
    manufacturer.textContent = `Manufacturer: ${weapon.manufacturer}`
    weaponCard.appendChild(manufacturer)

    const description = document.createElement("p")
    description.textContent = weapon.description
    weaponCard.appendChild(description)

    // add a button "pickup weapon" to bottom of card details
    const pickUpBtn = document.createElement('button')
    pickUpBtn.innerText = "Pick Up Weapon"
    weaponCard.appendChild(pickUpBtn)

    // when button is clicked, add the button to my stash
    pickUpBtn.addEventListener("click", () => {
        addWeaponToStash(weapon)
    })

    weaponCardContainer.innerHTML = ""
    weaponCardContainer.appendChild(weaponCard)

    const emptyStash = document.createElement('button')
    emptyStash.innerText = "Empty Stash!"
    weaponCard.appendChild(emptyStash)

    emptyStash.addEventListener('click', () => {
        weaponsInStash.splice(0)
        console.log("Check out your secret Stash: ", weaponsInStash)
    })
}

const addWeaponToStash = (weapon) => {
    weaponsInStash.push(weapon)
    if (weaponsInStash.length === 0) {
        console.log("No weapons on stash yet!")
    } else {
        console.log("Check out your secret Stash: ", weaponsInStash)
    }
     
}
