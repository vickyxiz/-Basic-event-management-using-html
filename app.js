// Function to fetch events from the backend using AJAX
function fetchEvents() {
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events-container');
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <img src="${event.image_url}" alt="${event.title}">
                    <div class="event-title">${event.title}</div>
                    <div class="event-description">${event.description.slice(0, 100)}...</div>
                    <button class="event-button" onclick="showEventDetails('${event.title}', '${event.description}', '${event.image_url}')">View Details</button>
                `;
                eventsContainer.appendChild(eventCard);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
}

// Function to show event details in a modal
function showEventDetails(title, description, image_url) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = image_url;

    document.getElementById('eventModal').style.display = 'flex';
}

// Function to close the modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('eventModal').style.display = 'none';
});

// Fetch events when the page loads
document.addEventListener('DOMContentLoaded', fetchEvents);
