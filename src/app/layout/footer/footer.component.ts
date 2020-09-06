import { environment } from "./../../../environments/environment";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  profile = environment.profile;

  constructor() { }

  ngOnInit() {
  }

}
