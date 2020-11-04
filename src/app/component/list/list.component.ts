import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Observable } from 'rxjs/Rx';
import { Character, CharactersQuery, Search } from './../../models/todo.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public todoSub: Observable<Search>;
  public character: Observable<Character>;
  public charactersQuery: Observable<CharactersQuery>;
  constructor(private router: Router, private todoService: TodoService, private RickMortyService: ApiService) {

  }

  ngOnInit() {

    this.todoSub = this.todoService.list();

    this.RickMortyService.request('get', 'character', '').subscribe((data: any) => {
      this.charactersQuery = data.results;
    });
  }

  moreInfo(id) {
    this.RickMortyService.request('get', 'character/${id}', '').subscribe((data: any) => {
      this.character = data;
    });

  }
  editRecord(id) {
    console.log('Edit record ID>>>', id);
    this.router.navigate(['/edit', id]);
  }

  deleteRecord(id) {
    this.todoService.remove(id);
  }

  public trackByToodFun(index, item) {
    return item.id;
  }
}
