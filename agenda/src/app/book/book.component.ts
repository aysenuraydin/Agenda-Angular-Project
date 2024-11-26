import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  number:number = 1;
  selectedDay: string | undefined;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  selectedMounth: number =4;
  // week: any[] = [];
  week: Note[] = [];

  constructor(private agendaService:AgendaService){}

  ngOnInit(): void {
    this.getWeeks();
  }
  getWeeks():void {
    this.agendaService.getWeeks()
    .subscribe(w => {
      this.week = w;
    });
  }

  // getWeeks(): void {
  //   this.agendaService.getWeeks().subscribe({
  //     next: (data) => {
  //       this.week = data; // Veriyi al ve ata
  //     },
  //     error: (err) => console.error('Hata: dsnxcwejkscbsakjbc', err) // Hataları yakala
  //   });
  // }

  PageNumber(pageNumber:number): void {
    this.number = pageNumber;
  }

  onSelect(id:number): void {
    this.week.forEach(item => item.id ==id ? item.isActive = true: item.isActive=false);
  }
  changeMounth(mounth:number): void {
    this.selectedMounth = mounth;
  }
}


