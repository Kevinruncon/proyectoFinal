import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private readonly storageKey = 'swapi-detail-access';
  private readonly allowed = signal(this.readInitialState());

  detailAccessAllowed = this.allowed.asReadonly();

  setDetailAccess(value: boolean): void {
    this.allowed.set(value);
    localStorage.setItem(this.storageKey, String(value));
  }

  private readInitialState(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }
}
