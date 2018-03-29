<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from './dialog.service';
=======
import { Component } from '@angular/core';

import { CONTATOS } from './contatos-mock'
import { Contato } from './contato.model';
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
<<<<<<< HEAD
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {
    contatos : Contato[];

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ){ }

    ngOnInit(): void{
    this.contatoService.getContatos()        
        .then((contatos:Contato[]) => {
            this.contatos = contatos;
        }).catch(err => console.log(err));
    }

    onDelete(contato:Contato):void{
        this.dialogService.confirm("Deseja deletar o contato "+contato.nome+"?")
            .then((canDelete: boolean) => {

                if(canDelete){
                    this.contatoService.delete(contato)
                        .then((c:Contato) => {
                            
                            this.contatos = this.contatos.filter(c => c.id != contato.id);

                        }).catch(err => {
                            console.log(err);
                        })
                }
            });
    }
=======
    templateUrl: 'contatos-lista.component.html',
})
export class ContatosListaComponent {
    contatos : Contato[] = CONTATOS;
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
}