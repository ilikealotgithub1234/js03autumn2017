let data = {
  data: {
    types: ["locality", "political"],
    geometry: {
      bounds: {
        northeast: { lat: 42.7223788, lng: -73.723263 },
        southwest: { lat: 42.61379, lng: -73.898099 }
      },
      location: { lat: 42.6525793, lng: -73.7562317 },
      viewport: {
        northeast: { lat: 42.7223788, lng: -73.7247004 },
        southwest: { lat: 42.6139009, lng: -73.898099 }
      },
      location_type: "APPROXIMATE"
    },
    place_id: "ChIJS_tPzDQK3okRxCjnoBJjoeE",
    formatted_address: "Albany, NY, USA",
    address_components: [
      {
        types: ["locality", "political"],
        long_name: "Albany",
        short_name: "Albany"
      },
      {
        types: ["administrative_area_level_2", "political"],
        long_name: "Albany County",
        short_name: "Albany County"
      },
      {
        types: ["administrative_area_level_1", "political"],
        long_name: "New York",
        short_name: "NY"
      },
      {
        types: ["country", "political"],
        long_name: "United States",
        short_name: "US"
      }
    ]
  },
  "cache_hit": null
};
console.log(data.data.address_components[0].long_name + ", " + data.data.address_components[1].long_name + " " + data.data.address_components[2].long_name + " " + data.data.address_components[2].short_name + " (" + data.data.location.lat + ", " + data.location.lng + ")");
