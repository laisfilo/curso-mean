import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { CadUsuarioComponent } from './modules/cad-usuario/cad-usuario.component';
import { ListEventosComponent } from './modules/list-eventos/list-eventos.component';
import { CadEventoComponent } from './modules/cad-evento/cad-evento.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-user', component: CadUsuarioComponent },
  { path: 'eventos', component: ListEventosComponent },
  { path: 'cadastro-evento', component: CadEventoComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CadUsuarioComponent,
    ListEventosComponent,
    CadEventoComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
