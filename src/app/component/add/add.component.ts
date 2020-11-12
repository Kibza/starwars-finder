import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { TodoService } from './../../services/todo.service';
import { ApiService } from 'src/app/services/api.service';
import { Character, CharactersQuery, Search } from './../../models/todo.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  public todo = <Search>{};
  public character: Observable<Character>;
  public charactersQuery: Observable<CharactersQuery>;
  constructor(private router: Router, private todoService: TodoService, private StarWarsService: ApiService) { }

  ngOnInit() {
    this.StarWarsService.request('get', 'people/', '').subscribe((data: any) => {
      console.log(data);
      this.charactersQuery = data.results;
    });
  }

  onChangeAddForm(form) {
    if (form.valid) {
      this.todoService.add(this.todo);
      const x = this.todo.title;
      this.StarWarsService.request('get', 'people/?name=' + x , '').subscribe((res: any) => {
        this.character = res.results;

      });
      // this.router.navigate(['/list']);
    } else {
      console.log('Form Invalid');
    }
  }

}
