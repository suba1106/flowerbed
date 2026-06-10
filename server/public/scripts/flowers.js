const renderFlowers = async () => {
    const response = await fetch('/flowers')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(flower => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const emoji = document.createElement('p')
            emoji.textContent = flower.emoji
            topContainer.appendChild(emoji)

            const name = document.createElement('h3')
            name.textContent = flower.name
            bottomContainer.appendChild(name)

            const family = document.createElement('p')
            family.textContent = 'Family: ' + flower.family
            bottomContainer.appendChild(family)

            const bloomSeason = document.createElement('p')
            bloomSeason.textContent = 'Blooms: ' + flower.bloomSeason
            bottomContainer.appendChild(bloomSeason)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/flower.html?slug=${flower.slug}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Flowers Blooming 😞'
        mainContent.appendChild(message)
    }
}

renderFlowers()