import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClassComponent } from "./mainpage/class/class/class.component";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { Routes } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { PreferenceComponent } from "./preferencepage/preference/preference.component";
import { HttpClientModule } from "@angular/common/http";
// export const routes: Routes = [{ path: "", component: MainpageComponent }];
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    MainpageComponent,
    HomepageComponent,
    PreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
