const apiKey = "AIzaSyDdXLx8m0_G64gBbzl_syYjP38YhJwqj_w";

// Coordinates of tourist places
const places = [
  { name: "Place 1", lat: 40.7128, lng: -74.006 },
  { name: "Place 2", lat: 34.0522, lng: -118.2437 },
  { name: "Place 3", lat: 51.5074, lng: -0.1278 },
];

// Function to initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 }, // Initial coordinates
    zoom: 2, // Initial zoom level
  });

  // Create bookmarks for tourist places
  places.forEach((place, index) => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map: map,
      title: place.name,
      label: (index + 1).toString(), // Numerical label on the scoreboard
    });

    // Add information about the place in an information box
    const infowindow = new google.maps.InfoWindow({
      content: `<h3>${place.name}</h3>`,
    });

    // Opens the information box when you click the bookmark
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  });
}

// Load the Google Maps API
function loadGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}

loadGoogleMapsScript();
