import { Injectable } from '@angular/core';
import { Api } from '../providers/api';



@Injectable()
export class MaincategoryService {

    constructor(private api: Api) { }

    getmaincategoryList() {
        return this.api.get("maincategorys");
    }

    public getUserDetail(userId: String) {
        return this.api.get("maincategorys/" + userId);
    }
}