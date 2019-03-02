import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage/mainpage.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { PreferenceComponent } from "./preferencepage/preference/preference.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "main", component: MainpageComponent },
  { path: "preference", component: PreferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
