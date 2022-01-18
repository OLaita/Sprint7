import {Injectable} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PesupuestoTotalService {

  total: number[];
  pos: number;
  sum: number;
  totalSum: number;

  webChecked: boolean;

  rForm = new FormGroup({
    nPag: new FormControl(1),
    nIdio: new FormControl(1),
  });

  dForm = new FormGroup({
    preName: new FormControl(),
    username: new FormControl(),
  });

  iForm = new FormGroup({
    500: new FormControl(),
    300: new FormControl(),
    200: new FormControl(),
  });

  bForm = new FormGroup({
    bus: new FormControl(),
  });

  pag: number;
  idi: number;

  presuList: any[];
  presuList2: any[];

  web:boolean;

  h: boolean;
  f: boolean;

  constructor(private http: HttpClient) {

    this.total = [];
    this.pos = 0;
    this.sum = 0;
    this.webChecked = false;
    this.totalSum = 0;
    this.presuList = new Array();
    this.presuList2 = new Array();
    this.pag = 1;
    this.idi = 1;
    this.web = false;
    this.h = true;
    this.f = true;
    
  }

  prePresupuesto() {

    let pos = 0;
    let len = this.presuList.length;
    let da = new Date();

    let mes = da.getMonth() + 1;

    let d = da.getDate() +"/"+ mes +" "+ da.getHours() +":"+da.getMinutes();

    let todo = [];

    let value = this.iForm;
    this.web = false;


    if(this.dForm.value['preName'] != null && this.dForm.value['username'] != null){

    if (value.value[500]) {
      let pw = "{Pagina web:{ Num Paginas:"+this.pag+", Num Idiomas:"+this.idi+"}}";
      // todo.push({'Pagina web':{ 'Num Paginas':this.pag, 'Num Idiomas':this.idi}});
      todo.push('Pagina web');
      this.web = true;
    }

    if (value.value[300]) {
      let pw = 'Cunsoltia SEO';
      todo.push(pw);
    }

    if (value.value[200]) {
      let pw = 'Campaña Google Ads';
      todo.push(pw);
    }

    this.presuList.push({cliente:this.dForm.value['username'],presName:this.dForm.value['preName'], services: "", precioTotal: this.totalSum, date: d});
    this.presuList[len].services = todo;
    this.presuList2 = this.presuList;
    // console.log(this.presuList[len].services[0]);
  }
  }

  checkChange(value: any) {

    if (value.target.name == "500" && value.target.checked) {

      this.webChecked = true;

    } else if (value.target.name == "500" && !value.target.checked) {
      this.webChecked = false;
    }

    if (value.target.checked) {
      this.total.push(parseInt(value.target.name));
    } else {
      this.pos = this.total.indexOf(parseInt(value.target.name));
      this.total.splice(this.pos, 1);
    }

    if (this.total.length > 0) {
      this.sum = this.total.reduce((a, b) => a + b, 0);
    } else {
      this.sum = 0;
    }

    this.masPresupuesto();

  }

  masPresupuesto() {

    let forme = this.rForm;
    let paginas = forme.get('nPag');
    let idiomas = forme.get('nIdio');

    if (this.webChecked) {

      if (paginas?.value < 1) {
        paginas?.setValue(1);
      }

      if (idiomas?.value < 1) {
        idiomas?.setValue(1);
      }

      let form = this.rForm.value;
      let pag: number = parseInt(form.nPag);
      let idio: number = parseInt(form.nIdio);
      let mSum = pag * idio * 30;
      this.totalSum = this.sum + mSum;
      // console.log(pag, idio, mSum, this.totalSum);

    } else {
      this.totalSum = this.sum;
    }
  }


  orderByPresupuesto(){

    if(this.h){
      this.presuList = _.orderBy(this.presuList,['presName']);
      this.h = !this.h;
    }else{
      this.presuList = _.orderBy(this.presuList,['presName'], ['desc']);
      this.h = !this.h;
    }

  }

  orderByFecha(){

    if(this.f){
      this.presuList = _.orderBy(this.presuList,['date']);
      this.f = !this.f;
    }else{
      this.presuList = _.orderBy(this.presuList,['date'], ['desc']);
      this.f = !this.f;
    }

  }

  presuReset(){

    this.presuList = this.presuList2;

  }

  buscarPresupuesto(){

    let form = this.bForm.value;
    let buscar: number = form.bus;

    let t = this.presuList.filter(function(val){

      if(val.presName == buscar){
        return val;
      }
      
    });

    this.presuList = t;

  }


}
