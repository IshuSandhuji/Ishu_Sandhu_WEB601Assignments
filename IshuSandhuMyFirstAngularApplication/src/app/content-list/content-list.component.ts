import { Component, OnInit } from '@angular/core';
import { IContent } from '../interface';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
import { CommonModule } from '@angular/common';
import { FetchCarsService } from '../service/fetch-cars.service';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentListItemComponent,CommonModule]
})
export class ContentListComponent implements OnInit {
  content:IContent[]|undefined=undefined;
 constructor(private Contenet:FetchCarsService){}
 ngOnInit(): void {
   this.Contenet.getContent().subscribe(c=>{
    this.content=c;
   });
 } 
}
