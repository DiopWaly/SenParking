import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'parc-vehicule',
    loadChildren: () => import('./pages/parc-vehicule/parc-vehicule.module').then( m => m.ParcVehiculePageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./pages/presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./pages/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'detail-reservation',
    loadChildren: () => import('./pages/detail-reservation/detail-reservation.module').then( m => m.DetailReservationPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
