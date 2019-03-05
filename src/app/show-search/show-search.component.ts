import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  search = new FormControl();

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      this.searchEvent.emit(searchValue)
    })
  }

}
