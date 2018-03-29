import './util/rxJsExtesions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 3f1567d812151143adc262873b301b5341d77c57
import { HttpModule }  from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { inMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { DialogService } from './contatos/dialog.service';
=======

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a


@NgModule({
    imports: [ 
        AppRoutingModule,
        BrowserModule, 
<<<<<<< HEAD
        ContatosModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(inMemoryDataService)
    ],
    declarations: [AppComponent],
    providers : [DialogService],
=======
        ContatosModule
    ],
    declarations: [AppComponent],
>>>>>>> a04036fac3d982ec865665824307f12478cc4f7a
    bootstrap: [AppComponent]
})
export class  appModule {}