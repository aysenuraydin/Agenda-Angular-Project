import { Component, Input } from '@angular/core';
import { WindowNote } from '../../models/note';

@Component({
  selector: 'content-item',
  templateUrl: './content-item.component.html',
  styleUrl: './content-item.component.css'
})
export class ContentItemComponent {
  @Input() note!:WindowNote;
  onSelect(id:number): void {
  }
}
