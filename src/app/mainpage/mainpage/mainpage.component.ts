import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList
} from "@angular/cdk/drag-drop";

import { item } from "../../../assets/item";

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent {
  classes = [
    { id: "COMP140", possible: ["sem1"] },
    { id: "COMP182", possible: ["sem2"] },
    { id: "COMP215", possible: ["sem1", "sem2", "sem3"] },
    { id: "COMP310", possible: ["sem1", "sem2", "sem3"] }
  ];

  class1 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class2 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class3 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class4 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class5 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class6 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class7 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];
  class8 = [
    { id: "COMP140", possible: ["1"] },
    { id: "COMP182", possible: ["2"] },
    { id: "COMP215", possible: ["1", "2", "3"] },
    { id: "COMP310", possible: ["1", "2", "3"] }
  ];

  noReturnPredicate(item: CdkDropList<string[]>) {
    console.log(item);
    // let x = item.data;
    // for (let i = 0; i < x.possible.length; i++) {
    //   if (item.dropContainer.id === x.possible[i]) {
    //     return true;
    //   }
    // }
    return true;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.item.data.possible);
    console.log(event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      for (let i = 0; i < event.item.data.possible.length; i++) {
        if (event.container.id === event.item.data.possible[i]) {
          transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );
        }
      }
    }
  }
}
