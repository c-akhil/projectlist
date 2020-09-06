import { LayoutService } from "./../layout.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projectlist',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  projectList: any[];

  constructor(layoutService: LayoutService) {
    layoutService.getProjectList().subscribe((data: any) => {
      console.log(data, 'projectList')
      this.projectList = data;
    });
  }

  ngOnInit() {
  }

}
