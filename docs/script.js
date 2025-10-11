// Initialize the map
const map = L.map('map').setView([49.985, 36.168], 14); // Coordinates of Solonytsivka

// Basemap (OpenStreetMap or satellite)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add overlay: SAR heatmap
const sarOverlay = L.imageOverlay('assets/sar_overlay.png', [
  [49.990, 36.160],  // top-left (lat, lon)
  [49.980, 36.176]   // bottom-right (lat, lon)
]);
sarOverlay.addTo(map);

// Optional: Add other overlays
const trueColorOverlay = L.imageOverlay('assets/sar_overlay_falsecolor_annotated.png', [
  [49.990, 36.160],
  [49.980, 36.176]
]);

const falseColorOverlay = L.imageOverlay('assets/sar_overlay_truecolor_annotated.png', [
  [49.990, 36.160],
  [49.980, 36.176]
]);

// Layer control
const overlays = {
  "SAR Change": sarOverlay,
  "True Color Change": trueColorOverlay,
  "False Color Urban Change": falseColorOverlay
};

L.control.layers(null, overlays).addTo(map);
