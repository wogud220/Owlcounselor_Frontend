import { Injectable } from '@angular/core';

import serverURL from '../../../assets/server';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  major: string;
  sem: number;
  degree: number;
  
  option_courses = [
    { name: "COMP140", possible: ["classbox", "sem0"] },
    { name: "COMP182", possible: ["classbox", "sem1"] },
    { name: "COMP215", possible: ["classbox", "sem0", "sem1", "sem2"] },
    { name: "COMP310", possible: ["classbox", "sem0", "sem1", "sem2"] }
  ];
  
  taken_courses = [
    [], 
    [], 
    [], 
    [], 
    [], 
    [], 
    []
  ];
  
  constructor() {

  }

  getOptionCourses(): Observable<Array<Object>> {
    return of(this.option_courses);
  }
  
  getTakenCourses(index: number): Observable<Array<Object>>  {
    return of(this.taken_courses[index]);
  }

  buildPayload(major: string, degree: number, sem: number, taken = []) {
    // build payload for update

    // TODO: Select semester
    var payload = {
      "major": major,
      "degree": degree,
      "sem": sem,
      "taken": taken
    };
    
    // Build taken
    for (var i = 0; i < this.taken_courses.length; i++) {
      var c = this.taken_courses[i];
      payload.taken.push({
        "name": c["name"],
        "taken": i
      });
    };
    
    return payload;
  }

  updateCourse(major, degree, sem, taken) {
    
    const api = serverURL + "/api/valid";
    
    var payload = null;
    if (taken != null) {
      payload = this.buildPayload(major, degree, sem, taken)
    } else {
      payload = this.buildPayload(major, degree, sem);
    }
    
    
    return fetch(api, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => this.updateCourseData(res));
  }

  updateCourseData(res) {
    var data = res.courses;
    
    // Clear option_courses
    while(this.option_courses.length > 0) {
      this.option_courses.pop();
    }
    
    // Clear taken_courses
    for (var i = 0; i < this.taken_courses.length; i++) {
      while(this.taken_courses[i].length > 0) {
        this.taken_courses[i].pop();
      }
    }
    
    // Populate courses
    for (var i = 0; i < data.length; i++) {
      var course = data[i];
      let temp_obj = {
        name: course.name,
        possible: ["classbox"]
      };

      for (var idx in course.sems) {
        temp_obj['possible'].push("sem" + idx);
      }

      if (course.taken == -1) {
        // Not taken
        this.option_courses.push(temp_obj);
      } else {
        // Taken; add the courses to the corresponding columns
        this.taken_courses[course.taken].push(temp_obj);
      }
    }
  }

}
