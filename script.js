const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

console.log(eventTitle.value);
//take 2 sample events for add sample event data

let sampleEvent = [
    {
        title:"web dev",
        date:"2026-06-04",
        category:"Workshop",
        description:"hJHJKJAi",
    },
    {
        title:"web dev2",
        date:"2026-06-04",
        category:"Workshop",
        description:"hJHJKJAnxcbjksdhjhi",
    }
];
//create event card which contains the user data and we can store it inside a div

function createEventCard(eventData){
    const card = document.createElement("div");
    card.classList.add("event-card"); 
    
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    //return the card for the addEvent function
    return card;
}
// add the created event and append unside the event container
function addEvent(eventData){
    //if empty-state is present then remove it when new card will be added 
    const emptyState = document.querySelector(".empty-state");
    if(emptyState) emptyState.remove();
    eventContainer.appendChild(createEventCard(eventData));
}

//form handling using submit event
eventForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    //eventData stores the user given value
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset(); 
});


