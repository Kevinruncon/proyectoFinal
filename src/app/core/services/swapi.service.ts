import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonProperties, SwapiDetailResponse, SwapiListResponse, SwapiPersonSummary } from '../models/swapi.models';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private readonly baseUrl = 'https://www.swapi.tech/api';

  constructor(private readonly http: HttpClient) {}

  getPeople(page: number, limit = 9): Observable<SwapiListResponse<SwapiPersonSummary>> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);

    return this.http.get<SwapiListResponse<SwapiPersonSummary>>(`${this.baseUrl}/people`, { params });
  }

  getPerson(id: string): Observable<SwapiDetailResponse<PersonProperties>> {
    return this.http.get<SwapiDetailResponse<PersonProperties>>(`${this.baseUrl}/people/${id}`);
  }
}
