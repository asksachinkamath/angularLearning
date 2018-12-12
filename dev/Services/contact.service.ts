import {Injectable} from 'angular2/core'
import {Contacts} from '../MockData/contact-mockdata'

@Injectable()


export class ContactService{

getContacts(){

    return Promise.resolve(Contacts);
}

}