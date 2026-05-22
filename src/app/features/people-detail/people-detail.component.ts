import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { PersonProperties } from '../../core/models/swapi.models';
import { SwapiService } from '../../core/services/swapi.service';
import { StatusMessageComponent } from '../../shared/status-message/status-message.component';

@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [RouterLink, StatusMessageComponent],
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss'
})
export class PeopleDetailComponent implements OnInit {
  @Input() id = '';

  person: PersonProperties | null = null;
  loading = false;
  errorMessage = '';

  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit(): void {
    this.loading = true;

    this.swapiService.getPerson(this.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => {
          this.person = response.result.properties;
        },
        error: () => {
          this.errorMessage = 'No fue posible cargar el detalle del personaje seleccionado.';
        }
      });
  }
}
