import './util/rxJsExtesions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { inMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { DialogService } from './contatos/dialog.service';


@NgModule({
    imports: [ 
        AppRoutingModule,
        BrowserModule, 
        ContatosModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(inMemoryDataService)
    ],
    declarations: [AppComponent],
    providers : [DialogService],
    bootstrap: [AppComponent]
})
export class  appModule {}