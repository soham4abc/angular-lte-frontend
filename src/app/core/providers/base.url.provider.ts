import { Injectable } from "@angular/core";

@Injectable()
export class BaseUrlProvider{
    //public apiBaseUrl= "http://localhost:9000/api/v1/";
    public readonly apiBaseUrl= "http://localhost:4200/assets/api/";
    public profilePictureBaseUrl= "http://localhost:4200/assets/dist/img/";
}