const weaponCardContainer = document.getElementById("weapon-card-container")


const init = () => {
    fetch("http://localhost:3000/weapons")
        .then(resp => resp.json())
        .then(weapons => renderWeaponsList(weapons))
}

const renderWeaponsList = (weapons) => {
    const weaponsListContainer = document.getElementById('weapons-list')
    weapons.forEach(weapon => {
        const nameLi = document.createElement('li')
        nameLi.classList.add('name-li')
        nameLi.innerText = weapon.name
        nameLi.id = weapon.id
        weaponsListContainer.append(nameLi)

        nameLi.addEventListener('mouseover', () => {
            nameLi.classList = 'highlight-effect'
            renderWeaponCard(weapon)
        })
        
        nameLi.addEventListener('mouseleave', () => {
            nameLi.classList.remove('highlight-effect')
            removeWeaponCard(weapon)
        })
    })
}

const renderWeaponCard = (weapon) => {
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
  
    weaponCardContainer.innerHTML = ""
    weaponCardContainer.appendChild(weaponCard)

}

const removeWeaponCard = (weapon) => {

}


init()