import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaMesaComponent } from './reserva-mesa/reserva-mesa.component';
import { ListMesasComponent } from './list-mesas/list-mesas.component';
import { MatRadioModule } from '@angular/material/radio';
import { RecetarioComponent } from './recetario/recetario.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';
import { EstadoPedidoComponent } from './estado-pedido/estado-pedido.component';


const rutas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reserva-mesa', component: ReservaMesaComponent },
  { path: 'list-mesas', component: ListMesasComponent },
  { path: 'recetario', component: RecetarioComponent },
  { path: 'voucher', component: CarroCompraComponent },
  { path: 'estado-cocina', component: EstadoPedidoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ReservaMesaComponent,
    ListMesasComponent,
    RecetarioComponent,
    CarroCompraComponent,
    EstadoPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
