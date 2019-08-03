import {Component, 
ViewChild, 
OnInit, 
AfterViewInit, 
AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal', {static: false}) modal;

  toggleClass() {

    this.modal.nativeElement.classList.toggle('show');

  }

  ngOnInit() {
    console.log('Initializing Modal');
  }

  ngAfterViewInit() {
    console.log(this.modal);
  }


}