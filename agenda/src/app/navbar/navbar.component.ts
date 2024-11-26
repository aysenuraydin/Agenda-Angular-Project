import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { AgendaService } from '../services/agenda.service';
import { Note } from '../models/note';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  deneme1: string;
  deneme2: string;
  selectedMounth: number |undefined;
  activeDay:number | undefined;
  week: Note[] = [];
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  year = new Date().getFullYear();

  constructor(
    private agendaService:
    AgendaService,
    // private route: ActivatedRoute,
    // private location: Location
  ) {

    this.deneme1 = `${environment.deneme}`;
    this.deneme2 = `${environment.production}`;
  }
  ngOnInit(): void {
    this.getWeeks();
    this.getActiveDay();
    this.getMounth();
  }
  getWeeks():void {
    // const page = this.route.snapshot.paramMap.get('id');

    this.agendaService.getWeeks()
    .subscribe(w => {
      this.week = w;

      // this.week = w.slice(0, Number(page)); // ileride böyle yap
      // this.location.back();
    });
  }
  getActiveDay():void {
    this.agendaService.getWeeks()
    .subscribe(w => {
      this.activeDay =  w.find(item => item.isActive)?.date.split('.')[0];
    });
  }
  getMounth():void {
    this.agendaService.getWeeks()
    .subscribe(w => {
        this.selectedMounth =  w.find(item => item.isActive)?.date.split('.')[1];
    });
  }

  onSelect(day:number): void {
    if(this.week.filter(item => item.date.split('.')[0]==day)[0]){
        this.activeDay=day;
        this.week.filter(item => item.isActive)[0].isActive =false;
        this.week.filter(item => item.date.split('.')[0]==day)[0].isActive=true;
      }
  }
  isActive(day:number): boolean {
    return (this.week.filter(item => item.isActive)[0].date.split('.')[0]==day);
  }
  changeMounth(mounth:number): void {
    this.selectedMounth = mounth;
  }
}
