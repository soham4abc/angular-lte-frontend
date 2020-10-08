import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize, retry } from 'rxjs/operators';
import { environment } from '../environments/environment';

/**
 * This is AppService available on root module level so all the modules can access it.
 * 
 * @author Pravin P Patil
 */
@Injectable({ providedIn: "root" })
export class AppService {
    
    /**
     * variable to hold base url
     */
    private url: string;

    /**
     * Reading base url from configuration file
     * 
     * @param http httclient to read configuration file
     * 
     */
    constructor(private http: HttpClient) {
        this.getJson().subscribe(data => {
            this.url = data.url;
        });
    }
    
    /**
     * configuration file will return a configurable json
     * 
     * @return observable
     */
    getJson(): Observable<any> {
        return this.http.get('./assets/conf.url.json');
    }

    /**
     * this function return configurable url can be accessed by services or components.
     * 
     * @return base url
     */
    getUrl(): string {
        return this.url;
    }

    postapi(payload: any, url: any): Observable<any> {
      console.log(payload);
      return this.http.post<any>(environment.dev_url + url, payload, {observe: 'response'}).pipe(
        map((res: any) => res),
        catchError((error: Response) => {
          return throwError(error);
        }),
        finalize(() => {}),
        // retry(2),
        catchError(this.handleError)
      );

    }

    getapi(url: any): Observable<any> {
      // console.log(payload);
      return this.http.get<any>(url, {observe: 'response'}).pipe(
        map((res: any) => res),
        catchError((error: Response) => {
          return throwError(error);
        }),
        finalize(() => {}),
        // retry(2),
        catchError(this.handleError)
      );

    }

    handleError(error: HttpErrorResponse){
      console.log(error.error.message);
      return throwError(error.error.message);
    }
}