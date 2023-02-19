import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import { Observable } from 'rxjs';

interface AppStateCounter {
  counter: number;
}

interface AppStateAppender {
	appender: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: Observable<number>;
	appender: Observable<string>;

	constructor(private store: Store<AppStateAppender>){
		//this.counter = store.select('counter');
		this.appender = store.select('appender');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
