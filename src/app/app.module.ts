import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TicketsCreatorComponent } from './components/tickets-creator/tickets-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsCreatorComponent
  ],
  imports: [
    MatIconModule,
    MatSnackBarModule,
    TextFieldModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [TicketsCreatorComponent],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
