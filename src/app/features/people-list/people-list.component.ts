import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SwapiPersonSummary } from '../../core/models/swapi.models';
import { SwapiService } from '../../core/services/swapi.service';
import { StatusMessageComponent } from '../../shared/status-message/status-message.component';
import { PersonCardComponent } from './person-card/person-card.component';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonCardComponent, StatusMessageComponent],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent implements OnInit {
  people: SwapiPersonSummary[] = [];
  page = 1;
  totalPages = 1;
  loading = false;
  errorMessage = '';

  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(page = this.page): void {
    this.loading = true;
    this.errorMessage = '';
    this.page = page;

    this.swapiService.getPeople(this.page)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => {
          this.people = response.results;
          this.totalPages = response.total_pages;
        },
        error: () => {
          this.people = [];
          this.errorMessage = 'No fue posible cargar los personajes desde SWAPI. Intente nuevamente.';
        }
      });
  }

  previousPage(): void {
    if (this.page > 1) {
      this.loadPeople(this.page - 1);
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.loadPeople(this.page + 1);
    }
  }
}
