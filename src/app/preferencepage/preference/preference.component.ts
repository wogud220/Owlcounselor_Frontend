import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Router } from "@angular/router";

import { item } from "../../../assets/item";

import { PreferenceService } from "./preference.service";
import { MainpageService } from "../../mainpage/mainpage/mainpage.service";

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: "app-preference",
  templateUrl: "./preference.component.html",
  styleUrls: ["./preference.component.css"]
})
export class PreferenceComponent {
  todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  url = "";
  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  courses = [];

  constructor(
    private router: Router,
    private preferenceService: PreferenceService,
    private mainpageService: MainpageService
  ) {}

  // getCourses() {
  //   this.preferenceService.getCourse().then(res => {

  //     var course_list = res["courses"];

  //     // assume course_list is not null
  //     for (var i = 0; i < course_list.length; i++) {
  //       // TODO: Populate 'possible' semester
  //       var possible = []
  //       if (course_list[i]["sem"] == "0") {

  //       } else if  (course_list[i]["sem"] == "1") {

  //       } else {

  //       }

  //       var temp_item: item = {
  //         id: course_list[i]["name"],
  //         possible: possible
  //       }

  //       this.courses.push(temp_item);
  //     }

  //   });
  // }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  direct() {
    this.router.navigate(["/main"]);
  }
}
