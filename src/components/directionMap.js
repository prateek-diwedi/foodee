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
      slat: props.end_lat
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    // var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
    // map.setMaxBounds(bounds);
    // var canvas = map.getCanvasContainer();
    var start = [this.state.lng, this.state.lat];
    var end = [this.state.elng, this.state.slat];
    // map.on('move', () => {
    //   this.setState({
    //     lng: map.getCenter().lng.toFixed(4),
    //     lat: map.getCenter().lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   });
    // });

    function getRoute(end) {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        //var start = [-123.1178, 49.2827];
        var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
      
        // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = function() {
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
      
      map.on('load', function() {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);
      
        // Add starting point to the map
        map.addLayer({
          id: 'point',
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
        getRoute(end);
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
        // map.on('click', function(e) {
        //     var coordsObj = e.lngLat;
        //     canvas.style.cursor = '';
        //     var coords = Object.keys(coordsObj).map(function(key) {
        //       return coordsObj[key];
        //     });
        //     var end = {
        //       type: 'FeatureCollection',
        //       features: [{
        //         type: 'Feature',
        //         properties: {},
        //         geometry: {
        //           type: 'Point',
        //           coordinates: coords
        //         }
        //       }
        //       ]
        //     };
        //     if (map.getLayer('end')) {
        //       map.getSource('end').setData(end);
        //     } else {
        //       map.addLayer({
        //         id: 'end',
        //         type: 'circle',
        //         source: {
        //           type: 'geojson',
        //           data: {
        //             type: 'FeatureCollection',
        //             features: [{
        //               type: 'Feature',
        //               properties: {},
        //               geometry: {
        //                 type: 'Point',
        //                 coordinates: coords
        //               }
        //             }]
        //           }
        //         },
        //         paint: {
        //           'circle-radius': 10,
        //           'circle-color': '#f30'
        //         }
        //       });
        //     }
        //     getRoute(coords);
        //   });
          });
          
  }

  render() {
    return (
      <div>
        
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default MapDirection;
