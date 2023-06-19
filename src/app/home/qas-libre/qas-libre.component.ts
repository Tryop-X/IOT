import {Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import {HttpClient} from "@angular/common/http";
import {LocationService} from "../../seguridad/servicios/location.service";
@Component({
  selector: 'app-qas-libre',
  templateUrl: './qas-libre.component.html',
  styleUrls: ['./qas-libre.component.scss']
})
export class QasLibreComponent implements OnInit{

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};
  zoom = 15;
  marker!: google.maps.Marker;


  constructor(
    private locationService: LocationService
  ) {}


  getUbicacion(){
    this.locationService.getUbicacion(this.api).subscribe(
      data => {
        console.log(data)
        this.lat = data.latitude;
        this.lng = data.longitude;
      }, error => {
        console.log(error)
      }
    )
  }

  public lat = -8.126944;
  public lng = -79.031917;
  public mover = true;
  public api: string = '';
  ngAfterViewInit() {
    this.marker = new google.maps.Marker({
      position: this.center,
      map: this.map.googleMap,
      draggable: false
    });
  }

  ngOnInit() {

    this.center = {
      lat: this.lat,
      lng: this.lng,
    };



    setInterval(() => {
      if(this.mover){
        // this.lat += 0.00011;
        // this.lng += 0.00011; // Solo para demostrar - elimina esta línea para la producción
        this.center = {
          lat: this.lat,
          lng: this.lng,
        };
        this.getUbicacion();
      }
      this.marker.setPosition(this.center);
      }, 500);
  }



  setMarkerPosition(lat: any, lng: any) {
    console.log(+lat, +lng)
    this.center = {
      lat: this.lat,
      lng: this.lng,
    };

    this.marker.setPosition(this.center);
  }
}
