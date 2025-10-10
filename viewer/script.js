// Define geographic bounds for the Solonytsivka area
// Replace these with accurate lat/lon bounds of your satellite images
const imageBounds = [[50.038, 36.18], [50.058, 36.22]];

const map = L.map('map').setView([50.048, 36.20], 15);

// Basemap (optional)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add satellite imagery overlays
const mayTrueColor = L.imageOverlay('assets/solonytsivka_may2022_truecolor.png', imageBounds);
const junTrueColor = L.imageOverlay('assets/solonytsivka_jun2022_truecolor.png', imageBounds);
const sarOverlay = L.imageOverlay('assets/sar_overlay.png', imageBounds);
const heatmap = L.imageOverlay('assets/sar_diff_heatmap.png', imageBounds);

// Add control to toggle layers
const baseMaps = {
  "May 2022 (True Color)": mayTrueColor,
  "June 2022 (True Color)": junTrueColor
};

const overlayMaps = {
  "SAR Change Overlay": sarOverlay,
  "SAR Difference Heatmap": heatmap
};

L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

// Show one base + one overlay by default
mayTrueColor.addTo(map);
sarOverlay.addTo(map);
