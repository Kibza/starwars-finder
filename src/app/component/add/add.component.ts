import { Component, OnInit } from '@angular/core';
import { Search } from './../../models/todo.model';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  public todo = <Search>{};
    constructor( private router: Router, private todoService: TodoService) { }

    ngOnInit() { }

    onSubmitAddForm(form) {
        console.log(form);
        if (form.valid) {
            this.todoService.add(this.todo);
            this.router.navigate(['/list']);
        } else {
            console.log('Form Invalid');
        }
    }

}
