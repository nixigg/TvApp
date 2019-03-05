import { Component, OnInit, Input } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { ShowService } from '../show.service';


@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() current: ICurrentShow;

  hide: false;
  
  constructor() {
    
   }

  ngOnInit() {
    
  }

 toggleHide(current: ICurrentShow) {
  current.hide = !current.hide;
 }

}
