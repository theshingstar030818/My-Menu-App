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

  autocomplete(text: string, latitude: number, longitude: number, locale?: string) {
    let params = new HttpParams({
      fromObject: {
        text: text,
        longitude: longitude.toString(),
        latitude: latitude.toString(),
        // locale: locale
      }
    });

    // var headers = new HttpHeaders({});
    // headers.append('Authorization', 'Bearer t2nGAqBYZMtCTOXWzGXnsPrEQ1Udj6nwmZcdWyov9UzCYcMfOF2zVZjJgfDAD-ulwReDUt-JMeOUYmFdO5kbogv2G981COSiYG-1julxzRxzcAyoGY7BkE4ZseA7W3Yx');
    // headers.append('Content-Type', 'application/json');

    
    console.log(new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer t2nGAqBYZMtCTOXWzGXnsPrEQ1Udj6nwmZcdWyov9UzCYcMfOF2zVZjJgfDAD-ulwReDUt-JMeOUYmFdO5kbogv2G981COSiYG-1julxzRxzcAyoGY7BkE4ZseA7W3Yx'
    }));

    let header = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer t2nGAqBYZMtCTOXWzGXnsPrEQ1Udj6nwmZcdWyov9UzCYcMfOF2zVZjJgfDAD-ulwReDUt-JMeOUYmFdO5kbogv2G981COSiYG-1julxzRxzcAyoGY7BkE4ZseA7W3Yx'
    });

    console.log(header);

    let other_header = header.append('Content-Type','application/json');
    other_header = header.append('Authorization','Bearer t2nGAqBYZMtCTOXWzGXnsPrEQ1Udj6nwmZcdWyov9UzCYcMfOF2zVZjJgfDAD-ulwReDUt-JMeOUYmFdO5kbogv2G981COSiYG-1julxzRxzcAyoGY7BkE4ZseA7W3Yx');
    console.log(other_header.get('Authorization')); 

    return this.http.get('https://api.yelp.com/v3/autocomplete', {headers:other_header});
  }

}
