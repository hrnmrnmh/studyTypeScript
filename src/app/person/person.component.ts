import {Component} from '@angular/core';
import {PersonService} from "../person.service";
import {Persons} from "../../types/Persons";

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent {
    persons: Promise<Persons>
    protected readonly encodeURIComponent = encodeURIComponent;

    constructor(private personService: PersonService) {
        this.persons = personService.fetch();
    }
}
