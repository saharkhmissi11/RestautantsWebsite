import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { AroosLobnenComponent } from './aroos-lobnen/aroos-lobnen.component';
import { AsiaticComponent } from './asiatic/asiatic.component';
import { DarKounafaComponent } from './dar-kounafa/dar-kounafa.component';
import { DarSoltanComponent } from './dar-soltan/dar-soltan.component';
import { EventsComponent } from './events/events.component';
import { HadoutaComponent } from './hadouta/hadouta.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrientalComponent } from './oriental/oriental.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TraditionalComponent } from './traditional/traditional.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'traditional', component: TraditionalComponent },
  {path: 'events', component : EventsComponent},
  {path: 'subscribe', component: SubscribeComponent },
  {path: 'oriental', component: OrientalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'darSoltan' , component : DarSoltanComponent},
  {path:'asiatic',component : AsiaticComponent},
  {path:'aroos-lobnen',component : AroosLobnenComponent},
  {path : 'dar-kounafa',component : DarKounafaComponent},
  {path:'hadouta',component : HadoutaComponent},
  {path:'reservation',component: ReservationComponent},
  
  {path :'',redirectTo:'/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

