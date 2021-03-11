function mapInit() {
  const mymap = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieHFpYW8zMCIsImEiOiJja200bTk4dzIwNjFpMm9qeTU3enJsemppIn0.KCoCIJtqLHTGYsdxM17BSw'
}).addTo(mymap);
console.log('mymap', mymap)
  // follow the Leaflet Getting Started tutorial here
  return map;
}

async function dataHandler(mapObjectFromFunction) {

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
  const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch('/api');
  const data = await request.json();

  form.addEventListener('submit', asnyc (event) => {
    targetList.innerText = '';

    event.preventDefault();
    console.log('submit fired', search.value);

    const filtered = data.filter(record) => record.zip.includes(search.value) && record.geocoded_column_1);
    const topFive = filtered.slice(0, 5);

    if(topFive.length < 1){
      replyMessage.classList.add('box');
      replyMessage.innerText = 'No matches found';
      return;
    }
    console.table(topFive);

    topFive.forEach(item) => {
      const longLat = item.geocoded_column_1.coordinates;
      console.log('marketLongLat', longLat[0], longLat[1]);
      const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);

      const appendItem = document.createElement('li');
      appendItem.classList.add('block');
      appendItem.classList.add('list-item');
      appendItem.innerHTML = `<div class="list-header is-size-5">${item.name}</div><address class="is-size-6">${item.address_line_1}</address>`;
      targetList.append(appendItem);
    });

    const {coordinates} = topFive[0]?.geocoded_column_1;
    console.log('viewSet coords', coordinates);
    mapObjectFromFunction.panTo([coordinates[1], coordinates[0], 0]);
  });
  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
    if(search.value.length === 0){
      replyMessage.innerText = '';
      replyMessage.classList.remove('box');
    }
  });
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;