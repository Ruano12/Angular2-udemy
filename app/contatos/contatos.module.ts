import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a

import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module'
<<<<<<< HEAD
import { ContatoService } from './contato.service';
=======
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a


@NgModule({
    imports: [
        CommonModule,
<<<<<<< HEAD
        ContatoRoutingModule,
        FormsModule
=======
        ContatoRoutingModule
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
    ],
    declarations:[
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ],
<<<<<<< HEAD
    bootstrap: [ContatosListaComponent],
    providers:[
        ContatoService
    ]

=======
    bootstrap: [ContatosListaComponent]
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
})
export class ContatosModule {}