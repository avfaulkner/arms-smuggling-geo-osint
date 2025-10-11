// Initialize the map
const map = L.map('map').setView([49.985, 36.168], 14); // Coordinates of Solonytsivka

// Basemap (OpenStreetMap or satellite)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var latLngBounds = L.latLngBounds([49.980, 36.160], [49.990, 36.176]); // Define bounds for the overlays: top-left and bottom-right corners (lat, lon)
// Optional: Fit map to bounds
// map.fitBounds(latLngBounds);

// Add overlay: SAR heatmap
const trueColorOverlay = L.imageOverlay('assets/sar_overlay_truecolor_annotated.png', [
  latLngBounds,
  {setOpacity: 0.8}

]);
sarOverlay.addTo(map);

// Optional: Add other overlays
const sarOverlay = L.imageOverlay('assets/sar_overlay_falsecolor_annotated.png', [
  latLngBounds,
  {opacity: 0.4}
]);

const falseColorOverlay = L.imageOverlay('assets/sar_overlay_truecolor_annotated.png', [
  latLngBounds,
  {opacity: 0.8}
]);

// Layer control
const overlays = {
  "True Color Urban Change": trueColorOverlay,
  "SAR Change": sarOverlay,
  "False Color Urban Change": falseColorOverlay
};

L.control.layers(null, overlays).addTo(map);
