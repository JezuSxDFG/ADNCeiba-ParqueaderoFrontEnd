import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Vehiculo } from '../modelo/vehiculo';

@Injectable({
    providedIn: 'root'
})
export class ParqueaderoService {
    constructor(private httpClient: HttpClient) { }
    
    cargarVehiculos(){
        return this.httpClient.get('http://localhost:8080/parqueadero/vehiculo/').toPromise();
    }

    ingresarVehiculo(vehiculo:Vehiculo){
        return this.httpClient.post<any>('http://localhost:8080/parqueadero/vehiculo/',vehiculo).toPromise();
    }

    retirarVehiculo(placa){
        return this.httpClient.delete('http://localhost:8080/parqueadero/vehiculo/'+placa).toPromise();
    }

    consultarVehiculo(placa){
        return this.httpClient.get('http://localhost:8080/parqueadero/vehiculo/'+placa).toPromise();
    }
}