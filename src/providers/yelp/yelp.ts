import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ENV } from '../../app/app.constants';

/*
  Generated class for the YelpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YelpProvider {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello YelpProvider Provider');
  }

  autocomplete(text: string) {
    let params = new HttpParams({
      fromObject: {
        q: text
      }
    });

    let header = new HttpHeaders({});
    header = header.append('Content-Type','application/json');
    header = header.append('user-key','fe9cf929d0377ad560ac411654477683');
    console.log(header);

    return this.http.get('https://developers.zomato.com/api/v2.1/search', {headers:header, params:params});
  }

}
