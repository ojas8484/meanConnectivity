import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
   demoData :  any;
  constructor(private service :ServerConnectService) { }

  ngOnInit(): void {
  this.getBathcDetails();
  }
getBathcDetails(){
  this.service.getBatches().subscribe(data =>{this.demoData = data ;})
}
}
