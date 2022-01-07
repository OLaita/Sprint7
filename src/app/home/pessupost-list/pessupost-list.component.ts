import { Component, OnInit} from '@angular/core';
import {PesupuestoTotalService} from '../pesupuesto-total.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-pessupost-list',
  templateUrl: './pessupost-list.component.html',
  styleUrls: ['./pessupost-list.component.css']
})
export class PessupostListComponent implements OnInit {

  h: boolean;
  f: boolean;
  // namePre: string;
  lista: any;
  // li: string[];
  pag:any;
  idi:any;
  


  constructor(public presupuestoTotalService: PesupuestoTotalService) {
    this.h = true;
    this.f = true;
    this.lista = presupuestoTotalService.presuList;
    this.pag = presupuestoTotalService.pag;
    this.idi = presupuestoTotalService.idi;
  
  }

  ngOnInit(): void {
  }


  // orderByPresupuesto(){

  //   this.lista = this.presupuestoTotalService.presuList;

  //   if(this.h){
  //     this.lista = _.orderBy(this.lista,['presName']);
  //     this.h = !this.h;
  //   }else{
  //     this.lista = _.orderBy(this.lista,['presName'], ['desc']);
  //     this.h = !this.h;
  //   }

    

  // }

  // orderByFecha(){

  //   this.lista = this.presupuestoTotalService.presuList;

  //   if(this.f){
  //     this.lista = _.orderBy(this.lista,['date']);
  //     this.f = !this.f;
  //   }else{
  //     this.lista = _.orderBy(this.lista,['date'], ['desc']);
  //     this.f = !this.f;
  //   }

  // }


}
