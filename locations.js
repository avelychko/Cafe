document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        {
            name: "Maplewood Heights",
            description: "325 Maplewood Drive, Silver Creek, OR, USA"
        },
        {
            name: "Meadowbrook Grove",
            description: "14 Crescent Lane, Meadowbrook, Wellington, New Zealand"
        },
        {
            name: "Rosehill Quarter",
            description: "221A Victoria Road, Rosehill, London, UK"
        }
    ];

    const container = document.getElementById('locations-container');

    locations.forEach(location => {
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location';

        const name = document.createElement('h2');
        name.textContent = location.name;

        const description = document.createElement('p');
        description.textContent = location.description;

        locationDiv.appendChild(name);
        locationDiv.appendChild(description);
        container.appendChild(locationDiv);
    });
});
