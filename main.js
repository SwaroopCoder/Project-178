let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 16
});   
 //amber
var img1 = document.querySelector("#amber")

var marker = new mapboxgl.Marker({
	element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);
//gateway
var img1 = document.querySelector("#gateway")

var marker = new mapboxgl.Marker({
	element:img1
})
.setLngLat([72.83474, 18.92218])
.addTo(map);
//gate
var img1 = document.querySelector("#gate")

var marker = new mapboxgl.Marker({
	element:img1
})
.setLngLat([77.22950, 28.61299])
.addTo(map);
//lotus
var img1 = document.querySelector("#lotus")

var marker = new mapboxgl.Marker({
	element:img1
})
.setLngLat([77.25883, 28.55357])
.addTo(map);
//victoria
var img1 = document.querySelector("#victoria")

var marker = new mapboxgl.Marker({
	element:img1
})
.setLngLat([88.34263, 22.54481])
.addTo(map);

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);

   