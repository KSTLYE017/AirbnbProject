// // // // // const lat = 26.9124;
// // // // // const lng = 75.7873;

// // // // // const map = L.map("map").setView([lat, lng], 13);

// // // // // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
// // // // //   attribution: "© OpenStreetMap contributors"
// // // // // }).addTo(map);

// // // // // L.marker([lat, lng])
// // // // //   .addTo(map)
// // // // //   .bindPopup("Listing Location")
// // // // //   .openPopup();

// // // // // Initialize map with default center
// // // // var map = L.map('map').setView([20, 77], 5); // Default view

// // // // // Add OpenStreetMap tiles
// // // // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// // // //     attribution: '&copy; OpenStreetMap contributors'
// // // // }).addTo(map);

// // // // // Use browser geolocation
// // // // if (navigator.geolocation) {
// // // //         const lat = position.coords.latitude;
// // // //         const lng = position.coords.longitude;

// // // //         // Center map on user's location
// // // //         map.setView([lat, lng], 12);

// // // //         // Add marker
// // // //         L.marker([lat, lng]).addTo(map)
// // // //             .bindPopup("You are here!")
// // // //             .openPopup();
// // // //     }function() {
// // // //         alert("Geolocation permission denied or unavailable.");
// // // //     };
// // // //      else {
// // // //     alert("Geolocation is not supported by your browser.");
// // // // }




// // // // Initialize map with default view (India)
// // // const map = L.map('map').setView([20, 77], 5);

// // // // Add tiles
// // // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// // //   attribution: '© OpenStreetMap contributors'
// // // }).addTo(map);

// // // let marker;

// // // // Handle user input location
// // // document.getElementById("searchBtn").addEventListener("click", async () => {
// // //   const location = document.getElementById("locationInput").value;
// // //   if (!location) return alert("Enter a location");

// // //   // OpenStreetMap Geocoding (Nominatim)
// // //   const res = await fetch(
// // //     `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
// // //   );
// // //   const data = await res.json();

// // //   if (data.length === 0) {
// // //     alert("Location not found");
// // //     return;
// // //   }

// // //   const lat = data[0].lat;
// // //   const lng = data[0].lon;

// // //   map.setView([lat, lng], 12);

// // //   if (marker) map.removeLayer(marker);

// // //   marker = L.marker([lat, lng])
// // //     .addTo(map)
// // //     .bindPopup(location)
// // //     .openPopup();
// // // });




// // // Initialize map with default view (India)
// // const map = L.map("map").setView([20, 77], 5);

// // // Add OpenStreetMap tiles
// // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
// //   attribution: "© OpenStreetMap contributors",
// // }).addTo(map);

// // // Marker reference (so we can remove old marker)
// // let marker;

// // // Handle search button click
// // document.getElementById("searchBtn").addEventListener("click", async () => {
// //   const location = document.getElementById("locationInput").value.trim();

// //   if (!location) {
// //     alert("Enter a location");
// //     return;
// //   }

// //   try {
// //     // Geocoding using Nominatim
// //     const response = await fetch(
// //       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
// //     );

// //     const data = await response.json();

// //     if (data.length === 0) {
// //       alert("Location not found");
// //       return;
// //     }

// //     const lat = parseFloat(data[0].lat);
// //     const lng = parseFloat(data[0].lon);

// //     // Center map
// //     map.setView([lat, lng], 12);

// //     // Remove old marker
// //     if (marker) {
// //       map.removeLayer(marker);
// //     }

// //     // Add new marker
// //     marker = L.marker([lat, lng])
// //       .addTo(map)
// //       .bindPopup(location)
// //       .openPopup();

// //   } catch (err) {
// //     alert("Error fetching location");
// //     console.error(err);
// //   }
// // });






// // Initialize map
// const map = L.map("map").setView([20, 77], 5);

// // Add tiles
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "© OpenStreetMap contributors",
// }).addTo(map);

// let marker;

// // Auto-geocode listing location
// async function showListingLocation() {
//   if (!listingLocation) return;

//   const res = await fetch(
//     `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingLocation)}`
//   );
//   const data = await res.json();

//   if (data.length === 0) return;

//   const lat = data[0].lat;
//   const lng = data[0].lon;

//   map.setView([lat, lng], 13);

//   marker = L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(listingLocation)
//     .openPopup();
// }

// // Call automatically
// showListingLocation();


// Initialize map
const map = L.map("map").setView([20, 77], 5);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "© OpenStreetMap contributors",
}).addTo(map);

let marker;

// Auto-geocode listing location
async function showListingLocation() {
  if (!listingLocation) return;

  try {
    const res=await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingLocation)}`
    );

    const data=await res.json();
    if(data.length === 0) return;

    const lat=parseFloat(data[0].lat);
    const lng=parseFloat(data[0].lon);

    map.setView([lat, lng], 13);

    if (marker) map.removeLayer(marker);

    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(listingLocation)
      .openPopup();

  } catch(err) {
    console.error("Geocoding error:", err);
  }
}

// Call automatically
showListingLocation();
