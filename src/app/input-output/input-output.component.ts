import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  valueContainer:string = "";
  infoArray:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addInfo(){
    if(this.valueContainer){
      this.infoArray.push(this.valueContainer)
    }
  }
}
