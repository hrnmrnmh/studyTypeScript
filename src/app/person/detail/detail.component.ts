import {Component} from '@angular/core';
import {Person} from "../../../types/Persons";
import {PersonService} from "../../person.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    person: Promise<Person>

    constructor(private route: ActivatedRoute, private personService: PersonService) {
        const name = this.route.snapshot.paramMap.get('name')
        if (name == null) {
            throw new Error("name undefined")
        }
        this.person = personService.fetchByName(name)
    }
}
