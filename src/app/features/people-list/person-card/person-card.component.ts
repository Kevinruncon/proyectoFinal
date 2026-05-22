import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwapiPersonSummary } from '../../../core/models/swapi.models';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {
  @Input({ required: true }) person!: SwapiPersonSummary;
}
