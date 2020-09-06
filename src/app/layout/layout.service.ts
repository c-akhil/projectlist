import { HttpService } from "../http.service";
import { Injectable } from '@angular/core';
import { URLConstants } from '../urlconstants';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private httpService: HttpService) { }


  getProjectList() {
    return this.httpService.get(URLConstants.GET_PROJECT_LIST)
  }
}
