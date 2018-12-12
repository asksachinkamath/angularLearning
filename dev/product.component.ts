import {Component} from 'angular2/core'
import {ProductService} from './Services/product.service'
import { ProductInterface } from "./Interfaces/product-interface";
import {OnInit} from "angular2/core"

@Component({
selector:'product',
template:`<hr/>
<h1>Product Component</h1>
<br>
Product List <br>
<ul>
<li *ngFor="#item of products" >{{item.Name}}
</li>
</ul>
`,
providers:[ProductService]

})

export  class ProductComponent implements OnInit{

  public productItems=[
{'Name':'Headlight','Price':100,'Year':2010},
{'Name':'Brake','Price':200,'Year':2011},
{'Name':'Gears','Price':130,'Year':2012},
{'Name':'Chasis','Price':400,'Year':2013},

  ];

  public products; 

constructor(private _productService:ProductService){

}

public getContacts(){
this._productService.getProdcuts().then((productList:ProductInterface[])=>this.products=productList );

}

ngOnInit(){

    this.getContacts();
}


}