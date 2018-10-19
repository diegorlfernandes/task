import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  export class AppComponent {
    public items: Observable<any[]>;
    private db:AngularFirestore;

    constructor(_db: AngularFirestore) {
        this.db=_db;
        this.addTask();

        this.getTask();
    }

    getTask():void{
        this.items = this.db.collection('/tarefas').valueChanges();
    }
    addTask():void{
        var setTask = this.db.collection('tarefas').doc('mercado').set({
            name: 'mercado'});
            var setTask = this.db.collection('tarefas').doc('pagar contas').set({
                name: 'pagar contas'});
        }
    deleteTask(item):void{
        var deleteDoc = this.db.collection('tarefas').doc(item.name) .delete();
    }
}