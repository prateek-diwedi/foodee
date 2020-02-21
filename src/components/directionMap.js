import React from 'react';
import mapboxgl from 'mapbox-gl';
import "./directionMap.scss";
//https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
//https://docs.mapbox.com/help/tutorials/getting-started-directions-api/
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhbWEiLCJhIjoiY2s2cHRlemt0MXByYTNucGJkdDNpNHJ5bSJ9.ve53oxGrKZK3mqYvoXzv0Q';

class MapDirection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: props.start_lng,
      lat: props.start_lat,
      zoom: 14,
      elng: props.end_lng,
      elat: props.end_lat
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [(Number(this.state.elng) + Number(this.state.lng))/2, (Number(this.state.elat) + Number(this.state.lat))/2],
      zoom: this.state.zoom
    });

    // var mapDiv = document.getElementById('map');
    // console.log(mapDiv)
    // if (mapDiv.style.visibility === true) map.resize();


    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    //   })
    //   );
    // var geocoder = new mapboxgl.MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    //   });

    // document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    // $('#').on('shown.bs.modal', function() {
    //   map.resize();
    // });
    // var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
    // map.setMaxBounds(bounds);
    var canvas = map.getCanvasContainer();
    var start = [this.state.lng, this.state.lat];
    var end = [this.state.elng, this.state.elat];
    // map.on('move', () => {
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   });
    // });
    map.on('load', () => {
      map.resize()
      getRoute(end, end);
      map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: end
              }
            }]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#f30'
        }
      });
      map.addLayer({
        id: 'start',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: start
              }
            }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#3887be'
        }
      });
      getRoute(start, end);
    });

    function getRoute(start, end) {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      //var start = [-123.1178, 49.2827];
      var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

      // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.onload = function () {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var route = data.geometry.coordinates;
        var geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        // if the route already exists on the map, reset it using setData
        if (map.getSource('route')) {
          map.getSource('route').setData(geojson);
        } else { // otherwise, make a new request
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: geojson
                }
              }
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75
            }
          });
        }
        // add turn instructions here at the end
      };
      req.send();
    }

    
    map.on('click', function (e) {
      var coordsObj = e.lngLat;
      canvas.style.cursor = '';
      var coords = Object.keys(coordsObj).map(function (key) {
        return coordsObj[key];
      });
      var newstart = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: coords
          }
        }
        ]
      };
      map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: end
              }
            }]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#f30'
        }
      });
      if (map.getLayer('start')) {
        map.getSource('start').setData(newstart);

      } else {
        map.addLayer({
          id: 'start',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coords
                }
              }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#3887be'
          }
        });


      }
      getRoute(coords, end);


    });

  }

  render() {
    return (
      <div id='map'>

        <div ref={el => this.mapContainer = el} className='mapContainer' />
        {/* <div id="geocoder" class="geocoder"></div> */}
      </div>
    )
  }
}

export default MapDirection;
