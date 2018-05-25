import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Vehiculo } from '../modelo/vehiculo';

@Injectable({
    providedIn: 'root'
})
export class ParqueaderoService {
    urlServidor:string = 'http://localhost:8080/parqueadero/';
    constructor(private httpClient: HttpClient) { }
    
    obtenerRegistrosVehiculosIngresados(){
        return this.httpClient.get(this.urlServidor+'vehiculo').toPromise();
    }

    guardarRegistroIngresoVehiculo(vehiculo:Vehiculo){
        return this.httpClient.post<any>(this.urlServidor+'vehiculo/',vehiculo).toPromise();
    }

    obtenerTiquete(placa){
        return this.httpClient.get(this.urlServidor+'tiquete/'+placa).toPromise();
    }

    registrarSalidaVehiculo(placa){
        return this.httpClient.delete(this.urlServidor+'vehiculo/'+placa).toPromise();
    }
}