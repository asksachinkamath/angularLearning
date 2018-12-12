import {Injectable} from 'angular2/core'
import {Products} from '../MockData/product-mockdata'

@Injectable()

export class ProductService{

getProdcuts(){

    return Promise.resolve(Products);
}

}