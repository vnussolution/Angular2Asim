import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from './joke';

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html'
})
export class JokeComponent {
    @Input('joke') data: Joke;
    @Output() deletedJoke = new EventEmitter<Joke>();

    deleteJoke(joke: Joke) {
        console.log('joke.component::', joke);
        this.deletedJoke.emit(joke);
    }

}

