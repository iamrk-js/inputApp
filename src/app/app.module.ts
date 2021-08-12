import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdInfoComponent } from './std-info/std-info.component';
import { StdFormComponent } from './std-info/std-form/std-form.component';
import { StdTableComponent } from './std-info/std-table/std-table.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerInfoComponent } from './server-info/server-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StdInfoComponent,
    StdFormComponent,
    StdTableComponent,
    InputOutputComponent,
    ServerFormComponent,
    ServerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
