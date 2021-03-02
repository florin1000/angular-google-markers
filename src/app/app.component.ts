import {Component} from '@angular/core';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

function getGoogleClusterInlineSvg(color: string): string {
  const encoded = window.btoa(
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.7"/><path d="M0 67A67 67 0 0 0 67 0L81 0A81 81 0 0 1 0 81Z" fill-opacity="0.5"/><path d="M0 86A86 86 0 0 0 86 0L100 0A100 100 0 0 1 0 100Z" fill-opacity="0.3"/></g></defs><g fill="' +
    color +
    '"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>'
  );

  return 'data:image/svg+xml;base64,' + encoded;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // google maps zoom level
  mapDefaults: any = {
    zoom: 2,
    lat: 51.673858,
    lng: 7.815982,
    minZoom: 2,
    maxZoom: 12,
  };
  // initial center position for the map
  markers: Marker[] = [
    {
      lat: 32.318230,
      lng: -86.902298,
      label: 'A',
      draggable: true
    },
    {
      lat: 32.318230,
      lng: -86.102298,
      label: 'B',
      draggable: false
    },
    {
      lat: 32.318230,
      lng: -86.202298,
      label: 'C',
      draggable: true
    },
    {
      lat: 32.318230,
      lng: -86.302298,
      label: 'D',
      draggable: true
    }
  ];
  mapOptions = {
    styles: [
      {
        height: 45,
        url: getGoogleClusterInlineSvg('#97bf02'),
        width: 45,
      },
      {
        height: 45,
        url: getGoogleClusterInlineSvg('#fbb500'),
        width: 45,
      },
      {
        height: 45,
        url: getGoogleClusterInlineSvg('#ed2d03'),
        width: 45,
      },
      {
        height: 45,
        url: getGoogleClusterInlineSvg('#da067b'),
        width: 45,
      },
      {
        height: 45,
        url: getGoogleClusterInlineSvg('#a0a0a0'),
        width: 45,
      },
    ],
    restriction: {
      latLngBounds: {
        north: 85,
        south: -85,
        west: -179.99,
        east: 179.99,
      },
    },
  };

  clickedMarker(label: string, index: number) {
    console.log(`clicked aa the marker: ${label || index}`);
  }
}


