import { Injectable } from '@angular/core';
import { Api } from '../providers/api';



@Injectable()
export class AddcategoryService {

    constructor(private api: Api) { }

    getaddcategoryList() {
        return this.api.get("addcategorys");
    }

    public getUserDetail(userId: String) {
        return this.api.get("addcategorys/" + userId);
    }
}