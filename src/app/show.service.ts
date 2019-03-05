import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICurrentShow } from './icurrent-show';
import { map } from 'rxjs/operators';

interface ICurrentShowData {
  0: {
    show: {
      name: string,
      language: string,
      summary: string
      genres: [string],
      rating: {average: number},
      network: {name: string},
      image: {original: string},
      schedule: {
        time: string,
        days: string
      }
     }
  }      
}

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) {
    
   }

   getCurrentShow(search: string | number) {
    return this.httpClient.get<ICurrentShowData>
    (`${environment.baseUrl}api.tvmaze.com/search/shows?q=${search}&appId=${environment.appId}`).pipe(
      map(data => this.transformToICurrentShow(data)))   
   }

   

   private transformToICurrentShow(data: ICurrentShowData): ICurrentShow {
     return {
      name: data[0].show.name,
      language: data[0].show.language,
      description: data[0].show.summary,
      genres: data[0].show.genres[0],
      rating: data[0].show.rating.average,
      channel: data[0].show.network.name,
      image: data[0].show.image.original,
      time: data[0].show.schedule.time,
      days: data[0].show.schedule.days[0]
     }
   }
}
