import { Injectable } from '@angular/core';
import { IContent } from '../interface';
import { CONTENT } from '../data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchCarsService {
  private contet: IContent[] = CONTENT;
  private oneContet: IContent | undefined;
  constructor() { }
  getContent(): Observable<IContent[]> {
    return of(this.contet);
  }
  getIdData(id: number): Observable<IContent | undefined> {
    this.oneContet = this.contet.find((c, i) => c.id == id);
    return of(this.oneContet)
  }
  addContent(item: IContent): Observable<IContent[] | undefined> {
    this.contet.push(item);
    return of(this.contet);
  }
  updateContent(item: IContent): Observable<IContent | undefined> {
    this.oneContet = item;
    this.contet.push(this.oneContet);
    return of(this.oneContet);
  }

  removeContent(id: number): Observable<IContent[]|undefined> {
  this.contet = this.contet.filter((c, i) => c.id !== id);
  return of(this.contet);
  }

}
