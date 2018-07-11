import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps';
import { YelpProvider } from '../../providers/yelp/yelp';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  searchInput: string = '';
  shouldShowCancel: boolean = true;
  cancelButtonText: string = 'Search';
  searchResults;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public gpsProvider: GpsProvider,
    public yelpProvider: YelpProvider
  ) {
  }

  ionViewDidLoad() {

  }

  onInput(event) {

  }

  onIonClear($event) {
    console.log(event);
    event.stopPropagation();
  }

  onCancel(event) {
    console.log(event);
    console.log(this.searchInput);
    this.yelpProvider.autocomplete(
      this.searchInput).pipe().subscribe(data => {
        this.searchResults = data;
        console.log(data);
      });
  }

}
