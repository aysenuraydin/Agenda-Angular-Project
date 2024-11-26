import { Component, OnInit } from '@angular/core';
import { AgendaService } from './services/agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AgendaService]
})
export class AppComponent implements OnInit{
  title = 'agenda';

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
  }
}
