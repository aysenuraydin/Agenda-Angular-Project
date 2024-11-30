import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'content-text',
  templateUrl: './content-text.component.html',
  styleUrl: './content-text.component.css'
})
export class ContentTextComponent {
  @Input() week!:Note;
  weeks: Note[] = [];
  days: string[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

  constructor(private agendaService:AgendaService){}

  onSelect(id:number): void {
    // this.weeks.forEach(item => item.id ==id ? item.isActive = true: item.isActive=false);

    this.agendaService.dayActived(id);
    // .subscribe(w => {
    //   this.weeks = w;
    // });
  }

  ngOnInit(): void {
    this.getWeeks();
  }

  getWeeks():void {
    this.agendaService.getWeeks()
    .subscribe(w => {
      this.weeks = w;
    });
  }
}
