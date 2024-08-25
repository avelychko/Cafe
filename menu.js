document.addEventListener("DOMContentLoaded", function() {
    const items = [
        {
            name: "Caramel Macchiato",
            imageUrl: "images/caramel_macchiato.jpg"
        },
        {
            name: "Chai Latte",
            imageUrl: "images/chai_latte.jpg"
        },
        {
            name: "Cold Brew",
            imageUrl: "images/cold_brew.jpg"
        },
        {
            name: "Lavander Latte",
            imageUrl: "images/lavander_latte.jpg"
        },
        {
            name: "Matcha Latte",
            imageUrl: "images/matcha_latte.jpg"
        },
        {
            name: "Pumpkin Spice Latte",
            imageUrl: "images/psl.jpg"
        }
    ];

    const container = document.getElementById('items-container');

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;

        const name = document.createElement('h2');
        name.textContent = item.name;

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        container.appendChild(itemDiv);
    });
});
