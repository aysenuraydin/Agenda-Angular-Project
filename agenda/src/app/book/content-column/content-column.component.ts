import { Component, Input } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'content-column',
  templateUrl: './content-column.component.html',
  styleUrl: './content-column.component.css'
})
export class ContentColumnComponent {
  @Input() week!:Note[];
  @Input() row!: { top: number[]; middle: number[]; bottom: number[] };
}
