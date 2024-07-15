import { Component, Input, OnInit } from '@angular/core';
import { IContent } from '../interface';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
import { CommonModule } from '@angular/common';
import { FetchCarsService } from '../service/fetch-cars.service';
import { PageNavigatorComponent } from "../page-navigator/page-navigator.component";
import { FilterIContentPipe } from '../filter-icontent.pipe';



@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [ContentListItemComponent, CommonModule, PageNavigatorComponent,FilterIContentPipe]
})
export class ContentListComponent implements OnInit {
  @Input() contentType:string|undefined;
  content: IContent[] =[];
  constructor(private Contenet: FetchCarsService) { }
  ngOnInit(): void {
    this.Contenet.getContent().subscribe(c => {
      this.content = c;
    });
  }
}
