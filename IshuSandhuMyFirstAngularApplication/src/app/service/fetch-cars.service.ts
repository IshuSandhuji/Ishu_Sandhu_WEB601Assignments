import { Injectable } from '@angular/core';
import { IContent } from '../interface';
import { CONTENT } from '../data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchCarsService {
  private contet: IContent[] = CONTENT;
  constructor() { }
  getContent():Observable<IContent[]>{
    return of(this.contet);
  }
}
