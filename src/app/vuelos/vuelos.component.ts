import { Component } from '@angular/core';
import { VuelosDto } from './vuelosDto';
import { VuelosService } from './vuelos.service';

@Component({
  selector: 'vuelos',
  templateUrl: './vuelos.component.html',
  providers: [VuelosService]
})
export class VuelosComponent {
	public vuelos:Array<VuelosDto>;
	public vuelo:VuelosDto = new VuelosDto();

	constructor(
		private _vuelosService: VuelosService
	){}

	ngOnInit(){
		this._vuelosService.getVuelos().subscribe(
			result => {
				this.vuelos = result;

				if(this.vuelos){
					console.log(this.vuelos);                   
                }else{
                	console.log("Error en el servidor");
                }
			},
			error => {
				console.log(<any>error);
			}
		);
	}

	reservarVuelo(vuelo){
		this.vuelo = new VuelosDto();
		this.vuelo.id = vuelo.id; 
		this.vuelo.aerolinea = vuelo.aerolinea; 
		this.vuelo.origen = vuelo.origen; 
		this.vuelo.destino = vuelo.destino; 
		this.vuelo.fecha = vuelo.fecha; 
		this.vuelo.valor = vuelo.valor;
	}
}