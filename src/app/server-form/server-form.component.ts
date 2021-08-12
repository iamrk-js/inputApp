import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
type ele = { type: string, name: string, content: string };
@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit {
  newServerName: string = '';
  newServerContent: string = '';
  @Output() infoEmmiter = new EventEmitter();
  @ViewChild('serverContentRef') serverContentRef : ElementRef | undefined;
  // 
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName:HTMLInputElement) {
    let obj: ele = {
      type: 'server',
      // name: this.newServerName,
      name: serverName.value,
      // content: this.newServerContent
      content: this.serverContentRef?.nativeElement.value
    }
    this.infoEmmiter.emit(obj);
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    let obj: ele = {
      type: 'blueprint',
      // name: this.newServerName,
      name: serverName.value,
      // content: this.newServerContent
      content: this.serverContentRef?.nativeElement.value
    }
    this.infoEmmiter.emit(obj);
  }

}
