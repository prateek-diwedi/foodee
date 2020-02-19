import React from 'react';
import mapboxgl from 'mapbox-gl';
import "./directionMap.scss";

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
   
    var start = [this.state.lng, this.state.lat];
    var end = [this.state.elng, this.state.slat];
 

    function getRoute(end) {
       
        var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;
      
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
          if (map.getSource('route')) {
            map.getSource('route').setData(geojson);
          } else { 
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
          
        };
        req.send();
      }
      
      map.on('load', function() {
       
        getRoute(start);
      
       
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
        getRoute(end);
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
