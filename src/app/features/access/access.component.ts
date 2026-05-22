import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccessService } from '../../core/services/access.service';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './access.component.html',
  styleUrl: './access.component.scss'
})
export class AccessComponent {
  private readonly accessService = inject(AccessService);
  detailAccessAllowed = this.accessService.detailAccessAllowed;

  updateAccess(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.accessService.setDetailAccess(input.checked);
  }
}
