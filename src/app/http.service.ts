import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private client: HttpClient) {}

  getBeer() {
    return this.client.get("https://api.openbrewerydb.org/breweries");
  }
}
