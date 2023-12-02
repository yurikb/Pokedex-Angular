import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
