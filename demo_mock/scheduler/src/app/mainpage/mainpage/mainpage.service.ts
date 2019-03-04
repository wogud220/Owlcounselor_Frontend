import { Injectable } from "@angular/core";

import serverURL from "../../../assets/server";
import { Observable, of } from "rxjs";
import { MainpageComponent } from "./mainpage.component";
@Injectable({
  providedIn: "root"
})
export class MainpageService {
  option_courses = [
    { id: "1001", name: "COMP140", possible: ["classbox", "sem0"] },
    { id: "1002", name: "COMP182", possible: ["classbox", "sem1"] },
    {
      id: "1003",
      name: "COMP215",
      possible: ["classbox", "sem0", "sem1", "sem2"]
    },
    {
      id: "1004",
      name: "COMP310",
      possible: ["classbox", "sem0", "sem1", "sem2"]
    }
  ];

  taken_courses = [[], [], [], [], [], [], []];
  currentSem;
  taken;
  constructor() {}

  getCourses() {
    return this.taken;
  }

  getCurrentSem() {
    return this.currentSem;
  }
  // getOptionCourses(): Observable<Array<Object>> {
  //   return of(this.option_courses);
  // }

  // getTakenCourses(index: number): Observable<Array<Object>> {
  //   return of(this.taken_courses[index]);
  // }

  // buildPayload() {
  //   // build payload for update
  //   var payload = {
  //     taken: []
  //   };

  //   for (var i = 0; i < this.taken_courses.length; i++) {
  //     var c = this.taken_courses[i];
  //     payload.taken.push({
  //       id: c["id"],
  //       name: c["name"],
  //       taken: c["taken"]
  //     });
  //   }

  //   return payload;
  // }

  updateCourse(currentSem, taken) {
    //TODO: Get major, degree, semester from other places
    this.taken = taken;
    this.currentSem = currentSem;
  }
}
