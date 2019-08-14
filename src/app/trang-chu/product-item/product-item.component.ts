import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product;
@Output() eventModal = new EventEmitter();

  status:boolean = true;

changeStatus(){

 this.status = !this.status;
}


openModal(){
 
  this.eventModal.emit(this.product);
 
}
  constructor() { }

  ngOnInit() {
  }

}
