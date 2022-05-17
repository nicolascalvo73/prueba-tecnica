import { Component, Input } from '@angular/core';
import ticket from './tickets.json';
import devs from './devs.json';
import technologies from '../app/components/tickets-creator/technologies.json';
import { MatDialog } from '@angular/material/dialog';
import { TicketsCreatorComponent } from './components/tickets-creator/tickets-creator.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() dataTicket: any;
  title = 'prueba-tecnica-aliada';
  tickets = ticket;
  developers = devs;
  tech = technologies;
  

  constructor(
    public dialog: MatDialog,
  ){}

  openDialog():void{
    const dialogRef = this.dialog.open(TicketsCreatorComponent,{})
  };

  statusOpen(id:number){
    this.tickets[id-1].status = 'abierto'
  }
  statusProcess(id:number){
    this.tickets[id-1].status = 'proceso'
  }
  statusDone(id:number){
    this.tickets[id-1].status = 'resuelto'
  }
  statusReject(id:number){
    this.tickets[id-1].status = 'rechazado'

  }
  
}
