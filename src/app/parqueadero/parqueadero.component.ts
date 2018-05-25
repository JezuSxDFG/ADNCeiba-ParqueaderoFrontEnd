import { Component, OnInit, Injectable } from '@angular/core';
import { Vehiculo } from '../modelo/vehiculo';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParqueaderoService } from './parqueadero.service';
import { error } from 'protractor';

@Component({
    selector: 'app-parqueadero',
    templateUrl: 'parqueadero.component.html',
    providers: [ParqueaderoService]
})

export class ParqueaderoComponent implements OnInit {

    parqueoModelo:Vehiculo = new Vehiculo;
    vehiculoConsultado:any = {};
    vehiculos:any = {};
    placa:String = "";
    consultandoVehiculo = false;

    constructor(
        private parqueaderoService: ParqueaderoService
    ) { }

    ngOnInit() {
        this.cargarVehiculos();
     }

    cargarVehiculos(){
        this.parqueaderoService.cargarVehiculos()
        .then(data => {
            this.vehiculos = data;
        }, error => {
            console.error(error.error.message);
        });
    }
}