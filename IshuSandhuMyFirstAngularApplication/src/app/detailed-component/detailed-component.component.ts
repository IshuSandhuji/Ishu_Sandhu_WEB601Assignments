import { Component, OnInit } from '@angular/core';
import { FetchCarsService } from '../service/fetch-cars.service';
import { IContent } from '../interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailed-component.component.html',
  styleUrl: './detailed-component.component.scss'
})
export class DetailedComponentComponent implements OnInit {
  item: IContent | undefined;
  constructor(private Fetch: FetchCarsService) { }

  ngOnInit(): void {
    this.Fetch.getIdData(1).subscribe((c) => this.item=c);
  }
}
