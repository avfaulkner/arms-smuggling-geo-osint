// Initialize the map
const map = L.map('map').setView([49.985, 36.168], 14);

// Basemap (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// Define geographic bounds for the images
const imageBounds = [[49.990, 36.160], [49.980, 36.176]]; // top-left, bottom-right

// === Base overlays ===
const trueColorOverlay = L.imageOverlay(
  'assets/sar_overlay_truecolor_annotated.png',
  imageBounds,
  { opacity: 0.8, interactive: false, noWrap: true }
);

const falseColorOverlay = L.imageOverlay(
  'assets/sar_overlay_falsecolor_annotated.png',
  imageBounds,
  { opacity: 0.8, interactive: false, noWrap: true }
);

const sarOverlay = L.imageOverlay(
  'assets/sar_overlay.png',
  imageBounds,
  { opacity: 0.5, interactive: false, noWrap: true }
);

// Add one overlay by default
trueColorOverlay.addTo(map);

// Optional: Fit map view to the overlay bounds
map.fitBounds(imageBounds);

// === Layer control ===
const overlays = {
  "True Color Annotated": trueColorOverlay,
  "False Color Annotated": falseColorOverlay,
  "SAR Overlay": sarOverlay
};

L.control.layers(null, overlays, { collapsed: false }).addTo(map);
