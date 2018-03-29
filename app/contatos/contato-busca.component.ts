import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Contato } from './contato.model';
import { Subject } from 'rxjs/Subject'
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }
    `]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {

    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();    

    constructor(
        private contatosService: ContatoService,
        private router: Router
    ) { }

    ngOnInit():void { 
        this.contatos = this.termosDaBusca
            .debounceTime(500) // aguarde 300ms para emitir um novo evento
            .distinctUntilChanged() //ignore se o proximo termo de busca for igual o do anterior
            .switchMap(term =>  term ? this.contatosService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
            console.log(err);
            return Observable.of<Contato[]>([]);
        });
    }

    ngOnChanges(changes: SimpleChanges):void{
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(termo: string){
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }
}