import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  @Input() message : string;
  @Input() type : string;
  @Input() showAlert : boolean;
  
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.showAlert = false;
  }

}
