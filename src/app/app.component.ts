import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter';
import { APPENDS, APPENDT, RESETAPPEND } from './appender';
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

	constructor(private storeAppender: Store<AppStateAppender>, private storeCounter: Store<AppStateCounter>){
		this.counter = storeCounter.select('counter');
		this.appender = storeAppender.select('appender');
	}

	increment(){
		this.storeCounter.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.storeCounter.dispatch({ type: DECREMENT });
	}

	reset(){
		this.storeCounter.dispatch({ type: RESET });
	}

	appendS(){
		this.storeAppender.dispatch({ type: APPENDS });
	}

	appendT(){
		this.storeAppender.dispatch({ type: APPENDT });
	}

	resetAppends(){
		this.storeAppender.dispatch({ type: RESETAPPEND });
	}
}
