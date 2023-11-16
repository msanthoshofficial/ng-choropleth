import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root',
})
export class NgChoroplethService {
  constructor() {}
  mapData() {
    return data;
  }
}
