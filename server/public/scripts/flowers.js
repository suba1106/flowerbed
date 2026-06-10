const renderGifts = async () => {
    const response = await fetch('/flowers')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gift.image})`
            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            bottomContainer.appendChild(audience)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Flowers Blooming 😞'
        mainContent.appendChild(message)
    }
}
