import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTareaComponent } from './componentes/agregar-tarea/agregar-tarea.component';
import { LitaTareasComponent } from './componentes/lita-tareas/lita-tareas.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarTareaComponent,
    LitaTareasComponent,
    EditarTareaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
