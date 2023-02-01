import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomesComponent } from './homes/homes.component';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@NgModule({
  declarations: [AppComponent, HomesComponent],
  imports: [
   
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [ HTTP,
    File,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}
