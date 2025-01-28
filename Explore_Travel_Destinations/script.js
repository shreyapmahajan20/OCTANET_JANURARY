
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");


async function fetchDestinations(query) {
  try {
    
    const apiUrl = `http://localhost:3000/search?q=${query}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    displayResults(data);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    resultsDiv.innerHTML = "<p>Unable to fetch results. Please try again later.</p>";
  }
}


function displayResults(destinations) {

  resultsDiv.innerHTML = "";

  if (destinations.length === 0) {
    resultsDiv.innerHTML = "<p>No destinations found.</p>";
    return;
  }

  
  const ul = document.createElement("ul");
  destinations.forEach((destination) => {
    const li = document.createElement("li");
    li.textContent = `${destination.name} - ${destination.location}`;
    ul.appendChild(li);
  });

  resultsDiv.appendChild(ul);
}


searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchDestinations(query);
  } else {
    resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
  }
});


searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (query) {
      fetchDestinations(query);
    } else {
      resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
    }
  }
});



const contactForm = document.querySelector('.contact-form');
const popup = document.getElementById('popup');
const closePopupBtn = document.querySelector('.close-popup');


contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  popup.classList.remove('hidden');
  


  contactForm.reset();
});


closePopupBtn.addEventListener('click', function() {
  popup.classList.add('hidden');
});
