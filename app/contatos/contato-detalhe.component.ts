<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
=======
import { Component } from '@angular/core';
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
<<<<<<< HEAD
    /*styles:[`
            .ng-valid[required]{
                border: 1px solid green;
            }.ng-invalid:not(form){
                border: 1px solid red;
            }
        `]
    styleUrls:[
        'contato-detalhe.component.css'
    ]*/
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew:boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route:ActivatedRoute,
        private location: Location
    ){}
    
    ngOnInit(): void{
        console.log('on init')
        this.route.params.forEach((params: Params) => {
            let id: number = +params['id']
            this.contato = new Contato(0, '', '', '');
            if(id){
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato : Contato) => {
                        this.contato = contato;
                    })
            }
        })
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean) : {} {
        return{
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean) : {} {
        return{
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit():void{
        let promisse;

        if(this.isNew){
            promisse = this.contatoService.create(this.contato);
        }else{
            promisse = this.contatoService.update(this.contato);
        }

        promisse.then(contato => this.goBack());
    }

    goBack(): void{
        this.location.back();
    }
}
=======
})
export class ContatoDetalheComponent {}
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
