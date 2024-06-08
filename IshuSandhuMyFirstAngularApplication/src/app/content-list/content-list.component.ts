import { Component } from '@angular/core';
import { IContent } from '../interface';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [ContentListItemComponent,CommonModule]
})
export class ContentListComponent {
  contents: IContent[] = [
    {
      id: 1,
      title: 'Tesla Model S',
      description: 'A luxury electric sedan with impressive range and performance.',
      model: 'Model S',
      imgSrc: 'https://th.bing.com/th/id/OIP.S1NGJ4ySo2PNNkO7WC7PJQAAAA?rs=1&pid=ImgDetMain',
      type: 'Electric',
      tags: ['Electric', 'Sedan', 'Luxury']
    },
    {
      id: 2,
      title: 'Ford Mustang',
      description: 'An iconic American muscle car known for its powerful engine and sporty design.',
      model: 'Mustang',
      imgSrc: 'https://images.hdqwalls.com/wallpapers/black-ford-mustang-2019-5k-xu.jpg',
      type: 'Gasoline',
      tags: ['Muscle', 'Sport', 'Iconic']
    },
    {
      id: 3,
      title: 'Chevrolet Bolt EV',
      description: 'A compact electric vehicle that offers a good balance of range and affordability.',
      model: 'Bolt EV',
      imgSrc: 'https://th.bing.com/th/id/R.db3fa4e57cbb262c20eca6522ee59e98?rik=e0CpQIZlwDHFAQ&riu=http%3a%2f%2fst.motortrend.com%2fuploads%2fsites%2f5%2f2016%2f01%2f2017-Chevrolet-Bolt-EV-front-side-view-parked.jpg&ehk=faIINEtwKA1O4VGes6GqMWm81mftki7qr8DbkzdSlVY%3d&risl=&pid=ImgRaw&r=0',
      type: 'Electric',
      tags: ['Electric', 'Compact', 'Affordable']
    },
    {
      id: 4,
      title: 'Toyota Prius',
      description: 'A popular hybrid car known for its fuel efficiency and reliability.',
      model: 'Prius',
      imgSrc: 'https://th.bing.com/th/id/OIP.U-oUqR_ExbsSUFJPrWuUTQAAAA?rs=1&pid=ImgDetMain',
      type: 'Hybrid',
      tags: ['Hybrid', 'Fuel Efficient', 'Reliable']
    }
  ];
}
