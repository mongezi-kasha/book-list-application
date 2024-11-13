import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private apiUrl = 'https://localhost:7013'
  constructor(private httpClient: HttpClient) 
  { 

  }
   getBooks() : Observable<Book []>{
    return this.httpClient.get<Book[]>(this.apiUrl);
   }
}
