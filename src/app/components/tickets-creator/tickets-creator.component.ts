import { Component, OnInit, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import technologies from './technologies.json';
import devs from '../../devs.json';
import { AppComponent } from '../../app.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tickets-creator',
  templateUrl: './tickets-creator.component.html',
  styleUrls: ['./tickets-creator.component.css']
})
export class TicketsCreatorComponent implements OnInit {
  
  technology: any = [];
  candidates = devs;
  developers = [];
  techSelection: string = '';
  description: string = '';
  devSelection: string = '';
  dataTicket = {};

  constructor(
    public appComponent: AppComponent,
    public dialogRef: MatDialogRef<TicketsCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) { }


  ngOnInit(): void {
    this.tech();
  }

  text(event:any){
    this.description = event.target.value;
    console.log(this.description);
  }

  tech(){
    for (let index = 0; index < technologies.length; index++) {
      this.technology.push(technologies[index])
    }
  }

  close(){
    this.dialogRef.close();
  }

  techSelected(){
    this.candidates = devs;
    this.candidates = this.candidates.filter(data => data.primary == this.techSelection || data.secondary == this.techSelection);
  }

  okToast(){
    Swal.fire(
      'Ticket creado éxito!',
      'se agrego al final de la lista',
      'success'
      );
  }

  wrongToast(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debes completar los campos',
      footer: 'de lo contrario puedes cancelar la operación.'
    })
  }

  addTicket(){
    if (this.devSelection && this.techSelection && this.description) {
      this.okToast();
      this.appComponent.tickets.push({
        "id": this.appComponent.tickets.length+1,
        "dev": this.devSelection,
        "status": "abierto",
        "technology": this.techSelection,
        "description": this.description
      })
        this.dialogRef.close();
    }else{
      this.wrongToast();
    }
    
  }
}
