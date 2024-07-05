import { Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { SellCarComponent } from './sell-car/sell-car.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "content",
        pathMatch: 'full'
    },
    {
        path: "content",
        component: ContentListComponent,
    },
    {
        path: "buy",
        component: BuyCarComponent
    },
    {
        path: "sell",
        component: SellCarComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
