import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  constructor(private connect : HttpClient) { }
  getBatches(){
    return this.connect.get("http://localhost:5100/getBatches")
  }
}
