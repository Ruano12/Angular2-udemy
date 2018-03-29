import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
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