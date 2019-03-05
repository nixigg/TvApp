import { Component } from '@angular/core';
import { ShowService } from './show.service';
import { ICurrentShow } from './icurrent-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  currentShow: ICurrentShow;

  constructor(private showService: ShowService) {
    
  }

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.showService.getCurrentShow(userInput[0])
    .subscribe(data => this.currentShow = data);
  }

  
}
