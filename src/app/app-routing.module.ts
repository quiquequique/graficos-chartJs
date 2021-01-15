import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BarraComponent } from './components/barra/barra.component';
import { LineaComponent } from './components/linea/linea.component';
import { TortaComponent } from './components/torta/torta.component';


const routes: Routes = [

  {path: 'barra', component: BarraComponent },
  {path: 'linea', component: LineaComponent },
  {path: 'torta', component: TortaComponent },
  {path: '**', redirectTo: '/barra' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
