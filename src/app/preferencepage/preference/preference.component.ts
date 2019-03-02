// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-preference',
//   templateUrl: './preference.component.html',
//   styleUrls: ['./preference.component.css']
// })
// export class PreferenceComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { Router } from "@angular/router";

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

  done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

  constructor(private router: Router) {}

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
