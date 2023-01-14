import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TraditionalComponent } from './traditional/traditional.component';
import { OrientalComponent } from './oriental/oriental.component';
import { EventsComponent } from './events/events.component';
import { DarSoltanComponent } from './dar-soltan/dar-soltan.component';
import { AsiaticComponent } from './asiatic/asiatic.component';
import { DarKounafaComponent } from './dar-kounafa/dar-kounafa.component';
import { AroosLobnenComponent } from './aroos-lobnen/aroos-lobnen.component';
import { HadoutaComponent } from './hadouta/hadouta.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SubscribeComponent,
    TraditionalComponent,
    OrientalComponent,
    EventsComponent,
    DarSoltanComponent,
    AsiaticComponent,
    DarKounafaComponent,
    AroosLobnenComponent,
    HadoutaComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
