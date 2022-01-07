import {Component,OnInit} from '@angular/core';
import {PesupuestoTotalService} from '../pesupuesto-total.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})


export class PanelComponent implements OnInit {

  faInfoCircle = faInfoCircle;

  numP: number;
  numI: number;

  tModal: string;

  constructor(public modal:NgbModal, public presupuestoTotalService: PesupuestoTotalService) {

    this.numP = 1;
    this.numI = 1;
    this.tModal = "contenido";

  }

  ngOnInit(): void {}

  masmenosButtons(valor: any) {

    let form = this.presupuestoTotalService.rForm;
    let paginas = form.get('nPag');
    let idiomas = form.get('nIdio');

    switch (valor) {

      case "masPag":
        this.numP++;
        paginas?.setValue(this.numP);
        break;
      case "menosPag":
        this.numP--;
        if(this.numP < 1){
          this.numP = 1;
        }
        paginas?.setValue(this.numP);
        break;
      case "masI":
        this.numI++;
        idiomas?.setValue(this.numI);
        break;
      case "menosI":
        this.numI--;
        if(this.numI < 1){
          this.numI = 1;
        }
        idiomas?.setValue(this.numI);
        break;

    }

    this.presupuestoTotalService.pag = this.numP;
    this.presupuestoTotalService.idi = this.numI;

    this.presupuestoTotalService.masPresupuesto();

  }


  mOpen(contenido: any, tipo: string){

    if(tipo == 'pag'){
      this.tModal = "En este componente debe indicar el numero de paginas que tendra su sitio web";
    }else{
      this.tModal = "En este componente debe indicar el numero de idiomas que tendra su sitio web";
    }


    this.modal.open(contenido);
  }

}
