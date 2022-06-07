import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

    // Shows the list of games
    getGameList (ordering: string, search?: string) : Observable<APIResponse<Game>> {
       let params = new HttpParams().set('ordering', ordering)

      //  Shows the list of games matching the one searched by the user
       if(search) {
         this.params = new HttpParams.set('ordering', ordering). set('search', search)
       }

       return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
         params: params,
       })
    }
   }
}
