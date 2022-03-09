import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input()
page: number = 1;

@Input()
pageSize: number = 10;

@Input()
collectionSize: number = 0;

@Output()
pageChange: EventEmitter<number> = new EventEmitter();

pages:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.pages =[];
    const numOfPages = Math.ceil(this.collectionSize/this.pageSize)
    let currentPage = 1;
    while(currentPage <= numOfPages){
      this.pages.push(currentPage)
      currentPage += 1
    }
  }


  onButonClick(newPage:number){
    this.pageChange.emit(newPage);
  }
}
