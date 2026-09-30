const renderFlower = async () => {
    const requestedSlug = new URLSearchParams(window.location.search).get('slug')
    const response = await fetch('/flowers')
    const data = await response.json()

    const flowerContent = document.getElementById('flower-content')
    let flower

    if (data) {
        flower = data.find(flower => flower.slug === requestedSlug)
    }

    if (flower) {
        document.getElementById('emoji').textContent = flower.emoji
        document.getElementById('name').textContent = flower.name
        document.getElementById('family').textContent = 'Family: ' + flower.family
        document.getElementById('origin').textContent = 'Origin: ' + flower.origin
        document.getElementById('bloomSeason').textContent = 'Blooms: ' + flower.bloomSeason
        document.getElementById('color').textContent = 'Colors: ' + flower.color
        document.getElementById('description').textContent = flower.description

        document.title = `Flowerbed - ${flower.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Details Available 😞'
        flowerContent.appendChild(message)
    }
}

renderFlower()