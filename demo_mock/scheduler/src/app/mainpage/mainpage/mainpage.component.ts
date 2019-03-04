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
    { id: "COMP330", possible: ["classbox", "3", "5", "7"] },
    { id: "COMP382", possible: ["classbox", "3", "5", "7"] },
    { id: "COMP421", possible: ["classbox", "6", "8"] },
    { id: "COMP430", possible: ["classbox", "4", "5", "6", "7", "8"] },
    { id: "COMP440", possible: ["classbox", "5", "7"] },
    { id: "COMP530", possible: ["classbox", "7", "8"] },
    { id: "COMP321", possible: ["classbox", "4", "6"] },
    { id: "COMP322", possible: ["classbox", "4", "6", "8"] }
  ];

  class1 = [{ id: "COMP140", possible: ["classbox", "1"] }];
  class2 = [{ id: "COMP182", possible: ["classbox", "2"] }];
  class3 = [{ id: "COMP215", possible: ["classbox", "3"] }];
  class4 = [];
  class5 = [];
  class6 = [];
  class7 = [];
  class8 = [];

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
