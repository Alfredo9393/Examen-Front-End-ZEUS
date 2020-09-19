import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:LocationStrategy, 
    useClass:PathLocationStrategy 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
