import { Component, OnInit, Injectable } from '@angular/core';
import { Vehiculo } from '../modelo/vehiculo';
import { NgbModule, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParqueaderoService } from './parqueadero.service';
//import { error } from 'protractor';

@Component({
    selector: 'parqueadero',
    templateUrl: 'parqueadero.component.html',
    providers: [ParqueaderoService]
})

export class ParqueaderoComponent implements OnInit {

    parqueoModelo:Vehiculo = new Vehiculo;
    vehiculoConsultado:any = {};
    vehiculos:any = [];
    placa:String = "";
    consultandoVehiculo = false;

    closeResult:string;

    constructor(
        private parqueaderoService: ParqueaderoService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.obtenerVehiculosIngresados();
    }

    obtenerVehiculosIngresados(){
        this.parqueaderoService.obtenerRegistrosVehiculosIngresados()
        .then(data => {
            this.vehiculos = data;
            console.info("Cargados vehiculos: ");
            console.log(this.vehiculos);
        }, error => {
            console.error(error.error.message);
        });
    }

    registrarVehiculo(){
        this.parqueaderoService.guardarRegistroIngresoVehiculo(this.parqueoModelo)
        .then(data => {
            console.info("Vehiculo registrado: ");
            console.log(data);
            this.obtenerVehiculosIngresados();
        }, error => {
            console.error(error.error.message);
        });
    }

    obtenerTiquete(){
        this.parqueaderoService.obtenerTiquete(this.placa)
        .then(data => {
            this.vehiculoConsultado = data;
            console.info("Vehiculo consultado: ");
            console.log(this.vehiculoConsultado);
        }, error => {
            console.error(error.error.message);
        });
    }

    retirarVehiculo(){
        this.parqueaderoService.registrarSalidaVehiculo(this.placa)
        .then(data => {
            this.vehiculoConsultado = data;
            console.info("Vehiculo retirado: ");
            console.log(this.vehiculos);
            this.obtenerVehiculosIngresados();
        }, error => {
            console.error(error.error.message);
        });
    }

    abrirModalTiquete(resultadoTiquete, placa){
        this.placa = placa;
        this.obtenerTiquete();
        this.modalService.open(resultadoTiquete).result.then((resultado)=>{
            this.closeResult = `Cerrado con: ${resultado}`;
        }, (razon) => {
            this.closeResult = `Descartado ${this.getDismissReason(razon)}`;
          });
    }

    private getDismissReason(razon: any): string{
        if (razon === ModalDismissReasons.ESC) {
            return 'Por presionar tecla ESCAPE';
        } else if(razon === ModalDismissReasons.BACKDROP_CLICK){
            return 'Por clickear en el fondo';
        } else {
            return `con: ${razon}`;
        }
    }
}