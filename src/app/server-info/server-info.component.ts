import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {
  @Input("getInfo") element: any; // assigning "Alias" to custom property
  constructor() {
    console.log("constructor is called")
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log("ngOnChanges is called");
    alert("Input value is changed and it triggred ngOnChanges Lifecycle Hook")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit is called")
  }



}
