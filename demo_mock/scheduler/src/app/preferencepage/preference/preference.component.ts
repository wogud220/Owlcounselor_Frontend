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
  totake = [];

  url = "";
  taken = [];
  major = "";
  degree: number;
  currentSem;

  constructor(
    private router: Router,
    private preferenceService: PreferenceService,
    private mainpageService: MainpageService
  ) {}

  getCourses() {
    this.totake = [
      { id: "COMP140", possible: [] },
      { id: "COMP182", possible: [] },
      { id: "COMP215", possible: [] },
      { id: "COMP321", possible: [] },
      { id: "COMP322", possible: [] },
      { id: "COMP330", possible: [] },
      { id: "COMP380", possible: [] },
      { id: "COMP382", possible: [] },
      { id: "COMP430", possible: [] },
      { id: "COMP440", possible: [] },
      { id: "COMP410", possible: [] },
      { id: "COMP530", possible: [] }
    ];

    // this.preferenceService.getCourse(this.major, this.degree).then(res => {
    //   var course_list = res["courses"];

    //   // assume course_list is not null
    //   for (var i = 0; i < course_list.length; i++) {
    //     // TODO: Populate 'possible' semester

    //     var temp_item: item = {
    //       id: course_list[i]["name"],
    //       possible: []
    //     };

    //     this.totake.push(temp_item);
    //   }
    // });
  }

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
    console.log(this.currentSem);
    console.log(this.taken);
    this.mainpageService.updateCourse(this.currentSem, this.taken);
    this.router.navigate(["/main"]);
  }
}
