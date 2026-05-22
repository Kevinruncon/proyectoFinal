import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-message',
  standalone: true,
  templateUrl: './status-message.component.html',
  styleUrl: './status-message.component.scss'
})
export class StatusMessageComponent {
  @Input({ required: true }) title = '';
  @Input() text = '';
  @Input() tone: 'info' | 'error' | 'success' = 'info';
}
