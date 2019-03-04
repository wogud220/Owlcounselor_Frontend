import { Injectable } from "@angular/core";
import serverURL from "../../../assets/server";
import { Subscribable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PreferenceService {
  constructor() {}

  getCourse(major: string, degree: number): Promise<Response> {
    var api = serverURL + "/api/courses";
    var payload = {
      major: major,
      degree: degree
    };

    return fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json());
  }

  postValidation() {}
}
