import { Component, EventEmitter, OnInit, Output } from '@angular/core';
type IstdInfo = { fname: string, lname: string, email: string }
@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  getFname: string = "";
  getLname: string = "";
  getEmail: string = "";
  @Output() stdInfoEmmiter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getStdInfo() {
    let obj:IstdInfo = {
      fname: this.getFname,
      lname: this.getLname,
      email: this.getEmail
    }
    console.log(obj);

    this.stdInfoEmmiter.emit(obj)
    this.getFname = "";
    this.getLname = "";
    this.getEmail = "";
  }

}
