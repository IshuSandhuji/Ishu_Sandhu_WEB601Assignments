import { Component } from '@angular/core';
import { IContent } from '../interface';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentListItemComponent,CommonModule]
})
export class ContentListComponent {
 
}
