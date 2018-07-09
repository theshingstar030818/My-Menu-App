import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the GpsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GpsProvider {

  position: Position;

  constructor(
    public http: HttpClient,
    private geolocation: Geolocation
  ) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.position = resp;
      console.log(this.position);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
