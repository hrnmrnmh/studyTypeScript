import {Injectable} from '@angular/core';
import axios from "axios";
import {Person, Persons} from "../types/Persons";

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    constructor() {
    }

    /**
     * @see <a href="https://www.umayadia.com/Note/Note028WebAPISample.htm#A5_3">すぐ呼び出し可能なWebAPIのサンプル #GET persons</a>
     */
    async fetch(): Promise<Persons> {
        try {
            const response = await axios.get("https://umayadia-apisample.azurewebsites.net/api/persons")
            return response.data as Persons;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @see <a href="https://www.umayadia.com/Note/Note028WebAPISample.htm#A5_4">すぐ呼び出し可能なWebAPIのサンプル #GET persons/{name}</a>
     */
    async fetchByName(name: string): Promise<Person> {
        try {
            const encodedName = encodeURI(name)
            const response = await axios.get(`https://umayadia-apisample.azurewebsites.net/api/persons/${encodedName}`)
            return response.data as Person;
        } catch (error) {
            throw error;
        }
    }

}
