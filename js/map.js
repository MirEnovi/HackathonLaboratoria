

document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded es un evento
    observador();
}, false);

const searchLabel = document.getElementById('search-label');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (objPosition) {
        // Dibuja mapa inicial con marcador de posicion
        let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(document.getElementById('mapContainer'),
            defaultLayers.normal.map, {
                zoom: 14.5,
                center: {
                    lat: objPosition.coords.latitude,
                    lng: objPosition.coords.longitude
                }
            });
        let icon = new H.map.Icon('../assets/location.png');
        let marker = new H.map.Marker({
            lat: objPosition.coords.latitude,
            lng: objPosition.coords.longitude
        }, {
            icon: icon
        });
        map.addObject(marker);

        let query = searchLabel.value;
        query = query.replace(' ', '+');
        let url = 'https://places.api.here.com/places/v1/discover/search?q=' + query + '&in=19.421375270437593%2C-99.16301647660505%3Br%3D10020&Accept-Language=es-MX%2Ces%3Bq%3D0.8%2Cen-US%3Bq%3D0.5%2Cen%3Bq%3D0.3&app_id=ZIqPjy1rC7hyfSfv1dtW&app_code=UbHvSDD2pZB5yHw3xhNbuw'

        // console.log(url);

        const getData = (url) => {
            console.log(url);
            fetch(url)
                .then(company => company.json())
                .then(company => {
                    // allCompanies(company);
                });
        };

        getData(url);

        // const allCompanies = (company) => {
        //     let fir
        // }

    })
}