import { Component, OnInit } from '@angular/core';
import { Search } from './../../models/todo.model';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public todo = <Search>{};
    constructor( private router: Router, private todoService: TodoService) { }

    ngOnInit() { }


}
