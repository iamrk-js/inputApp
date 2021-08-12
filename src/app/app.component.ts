import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements:{type:string,name:string,content:string}[] = [
    {
      type:'server',
      name:"Test",
      content : "Server Test 1"
    },
    {
      type:'blueprint',
      name:"Test",
      content : "Server Bluprint 1"
    }
   ];

   getServerInfo(event:any){
      // console.log(event)
      this.serverElements.push(event)
   }

 
}
