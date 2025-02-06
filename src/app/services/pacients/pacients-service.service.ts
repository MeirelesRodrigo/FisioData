import { HttpClient } from '@angular/common/http';
import { Pacients } from '../../pacients';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientsServiceService {
  private API_url = "http://localhost:3000/pacients"

  constructor(private http : HttpClient) {}

  create(data: any): Observable<Pacients>{
    return this.http.post<Pacients>(this.API_url, data)
  }

  updatePacient(pacient: Pacients): Observable<Pacients>{
    return this.http.put<Pacients>(`${this.API_url}/${pacient.id}`, pacient)
  }

  listPacientById(id: string): Observable<Pacients>{
    return this.http.get<Pacients>(`${this.API_url}/${id}`)
  }

  listAll(): Observable<Pacients[]>{
    return this.http.get<Pacients[]>(this.API_url)
  }


}
