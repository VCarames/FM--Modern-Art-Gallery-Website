const map = L.map("map").setView([41.48137779542674, -71.31035263537422], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 100,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const greenIcon = L.icon({
  iconUrl: "./assets/icon-location.svg",

  iconSize: [75, 95],
  iconAnchor: [22, 94],
});

L.marker([41.48137779542674, -71.31035263537422], { icon: greenIcon }).addTo(
  map
);
