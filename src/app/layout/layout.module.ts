import { LayoutRoutingModule } from "./layout-routing.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    ProjectListComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule
  ]
})
export class LayoutModule { }
