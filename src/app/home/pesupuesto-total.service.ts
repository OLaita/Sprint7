import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PesupuestoTotalService {

  total:number[];
  pos:number;
  sum:number;
  totalSum:number;

  webChecked:boolean;

  rForm = new FormGroup({
    nPag: new FormControl(1),
    nIdio: new FormControl(1),
  });

  constructor() { 

    this.total = [];
    this.pos = 0;
    this.sum = 0;
    this.webChecked = false;
    this.totalSum = 0;

  }

  checkChange(value:any){

    if(value.target.name == "500" && value.target.checked){

      this.webChecked = true;

    }else if(value.target.name == "500" && !value.target.checked){
      this.webChecked = false;
    }
    
    if(value.target.checked){
      this.total.push(parseInt(value.target.name));
    }else{
      this.pos = this.total.indexOf(parseInt(value.target.name));
      this.total.splice(this.pos,1);
    }

    if(this.total.length > 0){
      this.sum = this.total.reduce((a, b) => a + b, 0);
    }else{
      this.sum = 0;
    }

    this.masPresupuesto();

  }

  masPresupuesto(){

    let forme = this.rForm;
    let paginas = forme.get('nPag');
    let idiomas = forme.get('nIdio');

    if(this.webChecked){

      if(paginas?.value < 1){
        paginas?.setValue(1);
      }

      if(idiomas?.value < 1){
        idiomas?.setValue(1);
      }

      let form = this.rForm.value;
      let pag: number = parseInt(form.nPag);
      let idio: number = parseInt(form.nIdio);
      let mSum = pag * idio * 30;
      this.totalSum = this.sum + mSum;
      // console.log(pag, idio, mSum, this.totalSum);

    }else{
      this.totalSum = this.sum;
    }
  }


}
