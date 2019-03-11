import { Injectable } from '@angular/core';
import { Vol } from './vol';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  private vols: Array<Vol>;
  private apiUrl: string = '/collections/flights99';
  private apiKey: string = 'MzRgIMwUoHn9tLc_4UIRrpdCQJLzjmZ4';

  constructor(private http: HttpClient) { 
    /*     
    this.vols = [
      { 
        _id: 1,
        numero: 'AF415',
        aeroportDepart: 'Paris Charles de Gaulle',
        aeroportDepartCode: 'CDG',
        aeroportArrivee: 'Hong-Kong',
        aeroportArriveeCode: 'HKG',
        heureDepart: '23h00',
        heureArrivee: '14h00',
        urgence: false,
        nombrePassagers: 241
      },
      { 
        _id: 2,
        numero: 'BA218',
        aeroportDepart: 'Londres Heathrow',
        aeroportDepartCode: 'LHR',
        aeroportArrivee: 'Singapour',
        aeroportArriveeCode: 'SIN',
        heureDepart: '22h45',
        heureArrivee: '15h30',
        urgence: true,
        nombrePassagers: 341
      },
      { 
        _id: 3,
        numero: 'CA934',
        aeroportDepart: 'Paris Charles de Gaulle',
        aeroportDepartCode: 'CDG',
        aeroportArrivee: 'Beijing',
        aeroportArriveeCode: 'PEK',
        heureDepart: '19h00',
        heureArrivee: '13h40',
        urgence: false,
        nombrePassagers: 288
      },
    ]; */
  } 

  getVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(`${this.apiUrl}?apiKey=${this.apiKey}`);
  }

  addVol(nouveauVol: Vol): Observable<any> {
    return this.http.post(`${this.apiUrl}?apiKey=${this.apiKey}`, nouveauVol);
    //this.vols.push(nouveauVol);
  }

  getVol(idRecherche: string): Observable<Vol> {
    return this.http.get<Vol>(`${this.apiUrl}/${idRecherche}?apiKey=${this.apiKey}`);

  }

  deleteVol(vol: Vol): Observable<any> {
    const idASupprimer = vol._id.$oid;
    return this.http.delete(`${this.apiUrl}/${idASupprimer}?apiKey=${this.apiKey}`);
    
  }
}
