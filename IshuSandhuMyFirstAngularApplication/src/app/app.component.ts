import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from "./content-list/content-list.component";
import { ContentListItemComponent } from "./content-list-item/content-list-item.component";
import { FetchCarsService } from './service/fetch-cars.service';
import { IContent } from './interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, ContentListComponent, ContentListItemComponent]
})
export class AppComponent implements OnInit {
  title = 'IshuSandhuMyFirstAngularApplication';
  content: IContent | undefined;

  constructor(private fetchdata: FetchCarsService) {
  }

  ngOnInit(): void {
    this.fetchdata.getIdData(1).subscribe((data) => {
      this.content = data;
    });
  }
}
