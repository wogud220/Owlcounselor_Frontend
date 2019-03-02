import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList
} from "@angular/cdk/drag-drop";

import { item } from "../../../assets/item";

import { MainpageService } from './mainpage.service';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent {
  option_courses = [];
  
  taken_courses = [[], [], [], [], [], [], []];
  
  constructor(private mainpageService: MainpageService) {
    this.mainpageService.getOptionCourses().subscribe(arr => {
      this.option_courses = Array.from(arr);
    });
    
    for (var i = 0; i < 7; i++) {
      this.mainpageService.getTakenCourses(i).subscribe(arr => {
        this.taken_courses[i] = arr;
      });
    }
  }

  noReturnPredicate(item: CdkDropList<string[]>) {
    // console.log(item);
    return true;
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // console.log(event.container);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // move to another container
      for (let i = 0; i < event.item.data.possible.length; i++) {
        if (event.container.id === event.item.data.possible[i]) {
          // console.log(event.container);
          
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );

          console.log(this.mainpageService.taken_courses);
          
          // TODO: Send valid request to server; get the updated courses list from server and populate
          // this.mainpageService.updateCourse().then(data => {

          // })

        }
      }
    }
  }
}
