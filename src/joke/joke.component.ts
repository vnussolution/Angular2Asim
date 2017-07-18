import { Component, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html'
})
export class JokeComponent {
    @Input('joke') data: Joke;
}

