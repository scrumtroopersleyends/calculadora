import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../entities/hello-world.entity';
import { Operation } from '../entities/operation.entity';
import { CONFIG } from '../../assets/config/configuration'

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private baseURL: string = CONFIG.apiURL;

  constructor(private httpClient: HttpClient) {
  }

  getOperationResult(operation: Operation): Observable<Result> {
    return this.httpClient.post(this.baseURL + "/hello/calculadora", operation);
  }

  // getConfigJson(): Observable<any> {
  //   return this.httpClient.get("./assets/config/configuration.json");
  // }
}
