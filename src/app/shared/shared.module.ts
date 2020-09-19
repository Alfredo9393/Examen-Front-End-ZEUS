import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TileH2Component } from './components/tile-h2/tile-h2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CarouselComponent, 
    TileH2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent,
    TileH2Component,
    RouterModule
  ]
})
export class SharedModule { }
