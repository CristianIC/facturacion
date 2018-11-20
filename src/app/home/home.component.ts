import { Component, OnInit } from '@angular/core';
import { PersonService } from './../services/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PersonService]
})
export class HomeComponent implements OnInit {

  public persons;

  public codigo;

  public per:any;

  public resp = "";

  constructor(private _person: PersonService) {
  	this.per = "";
  }

  ngOnInit() {
    this.listarPersonas();
  }

  listarPersonas(){
  	this._person.getPersons().subscribe(
      result => {
        this.persons = result;
      },
      error => {
        console.log(error);
      },
  		() => {
  			console.log('Observer: Notificacion al completar la peticion.');
  	  }
    );
  }

  buscarPersona(cod){
    this._person.getPersonById(cod).subscribe(
    	result => {
    		if(result == null){
    			this.resp = "Persona no encontrada o no existe";
    		}else {
    			this.per = result;
    		}
    	},
    	error => {
    		console.log(error);
    	}
    );
  }

  eliminarPersona(codigo) {
  	this._person.deletePerson(codigo).subscribe(
  		result => {
  			console.log(result);
  			this.listarPersonas();
  		},
  		error => {
  			console.log(error);
  		},
  		() => {
  			console.log('Observer got a complete notification');
  		}
  	);
  }

}
