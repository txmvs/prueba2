import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Storage } from '@ionic/storage'
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DBTaskService } from './services/dbtask.service';
import { AuthGardService } from './services/auth-gard.service';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
  ],
  providers: [
    SQLite,
    Storage,
    DBTaskService,
    AuthGardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
