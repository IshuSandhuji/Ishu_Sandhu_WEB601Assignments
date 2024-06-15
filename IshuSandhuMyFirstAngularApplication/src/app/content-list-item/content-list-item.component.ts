import { Component, Input } from '@angular/core';
import { IContent } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list-item.component.html',
  styleUrl: './content-list-item.component.scss'
})
export class ContentListItemComponent {
  @Input() content: IContent|undefined;
  @Input()
  index!: number;
  isEven() {
    return this.index % 2 === 0;
  }
}
