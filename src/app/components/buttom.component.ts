import { Component, Input } from '@angular/core';

@Component ({
selector: 'my-button',
templateUrl: './buttom.component.html',
styleUrls: ['./buttom.component.css',]
})


export class Buttom {

  @Input() label:string =''
  buttomText:string ='ACESSAR';
  buttomTexts:string [] = ['VENDER', 'COMPRAR'] ;
  buttomNumber:number = 1;
  buttomObject = {
    label: 'adicionar carrinho'
  }

  getAlert () {
      alert(this.label)
  }


}

