import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent} from './modal/modal.component'
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
