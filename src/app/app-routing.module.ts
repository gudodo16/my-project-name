// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';


// const routes: Routes = [];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//     CommonModule
//   ],
//   declarations: [],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }