import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Note} from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const days: Note[] = [
      {
        id:1,
        date: '10.9.2024',
        day: 'MONDAY',
        text: `- Sabah Egzersizi
 - Günlük E-Postaları Kontrol Et
 - Su İçmeyi Hatırla
 - Proje Güncellemesi Hazırla`,
        isActive: false,
        symbol: '',
        noteTop: { id:1, imgUrl: '', text: 'SEP 10-16', color: ''},
        noteBottom: { id:2, imgUrl: 'https://i.pinimg.com/564x/09/32/c8/0932c8d7a39be14883e68421cce40f86.jpg', text: '', color: ''}
      },
      {
        id:2,
        date: '10.9.2024',
        day: 'MONDAY',
        text: `- Sabah Egzersizi
 - Günlük E-Postaları Kontrol Et
 - Su İçmeyi Hatırla
 - Proje Güncellemesi Hazırla`,
        isActive: false,
        symbol: '',
        noteTop: { id:3, imgUrl: '', text: 'SEP 10-16', color: ''},
        noteBottom: { id:4, imgUrl: 'https://i.pinimg.com/564x/09/32/c8/0932c8d7a39be14883e68421cce40f86.jpg', text: '', color: ''}
      },
    ];
    return { days };
  }
}

