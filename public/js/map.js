// // Initialize the map
// const map = L.map("map").setView([20, 77], 5);

// // Add OpenStreetMap tiles
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
// //   attribution: "© OpenStreetMap contributors",
// }).addTo(map);

// let marker;

// // Auto-geocode listing location
// async function showListingLocation() {
//   if (!listingLocation) return;

//   try {
//     const res=await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingLocation)}`
//     );

//     const data=await res.json();
//     if(data.length === 0) return;

//     const lat=parseFloat(data[0].lat);
//     const lng=parseFloat(data[0].lon);

//     map.setView([lat, lng], 13);

//     if (marker) map.removeLayer(marker);

//     marker = L.marker([lat, lng])
//       .addTo(map)
//       .bindPopup(listingLocation)
//       .openPopup();

//   } catch(err) {
//     console.error("Geocoding error:", err);
//   }
// }

// // Call automatically
// showListingLocation();


// Initialize the map
const map = L.map("map").setView([20, 77], 5);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

let marker;

// Auto-geocode listing location
async function showListingLocation() {
  if (!listingLocation) return;

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(listingLocation)}`,
      {
        headers: {
          "Accept": "application/json",
          // REQUIRED by Nominatim
          "User-Agent": "AirbnbClone/1.0 (contact: your-email@example.com)"
        }
      }
    );

    // ✅ VERY IMPORTANT
    if (!res.ok) {
      throw new Error(`Geocoding failed: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("No location found");
      return;
    }

    const lat = parseFloat(data[0].lat);
    const lng = parseFloat(data[0].lon);

    map.setView([lat, lng], 13);

    if (marker) map.removeLayer(marker);

    marker = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(listingLocation)
      .openPopup();

  } catch (err) {
    console.error("Geocoding error:", err.message);
  }
}

// Call automatically
showListingLocation();

