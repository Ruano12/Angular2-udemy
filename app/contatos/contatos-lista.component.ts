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

    contatos : Contato[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout:any;

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ){ }

    ngOnInit(): void{
    this.contatoService.getContatos()        
        .then((contatos:Contato[]) => {
            this.contatos = contatos;
        }).catch(err => {
            console.log(err)
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao mostrar a lista de contato!'
            });
        });
    }

    onDelete(contato:Contato):void{
        this.dialogService.confirm("Deseja deletar o contato "+contato.nome+"?")
            .then((canDelete: boolean) => {

                if(canDelete){
                    this.contatoService.delete(contato)
                        .then((c:Contato) => {
                            
                            this.contatos = this.contatos.filter(c => c.id != contato.id);

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            });
                        }).catch(err => {
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar contato!'
                            });
                        })
                }
            });
    }
<<<<<<< HEAD
=======
    templateUrl: 'contatos-lista.component.html',
})
export class ContatosListaComponent {
    contatos : Contato[] = CONTATOS;
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
=======

    private mostrarMensagem(mensagem: {tipo: string, texto: string}): void{
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if(mensagem.tipo != 'danger'){

            if(this.currentTimeout){
                clearTimeout(this.currentTimeout);
            }

            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        }
        this.classesCss['alert-'+tipo] = true;
    }
>>>>>>> 3f1567d812151143adc262873b301b5341d77c57
}