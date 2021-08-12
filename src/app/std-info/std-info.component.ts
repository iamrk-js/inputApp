import { Component, Input, OnInit } from '@angular/core';
type IstdInfo = { fname: string, lname: string, email: string }
@Component({
  selector: 'app-std-info',
  templateUrl: './std-info.component.html',
  styleUrls: ['./std-info.component.scss']
})
export class StdInfoComponent implements OnInit {

  stdInfoArray: IstdInfo[] = []
  constructor() { }
  ngOnInit(): void {
    // this.getFname =  document.getElementById("fname");
  }

  getStdInfo(event:IstdInfo){
      console.log(event);
      this.stdInfoArray.push(event);
  }

}
