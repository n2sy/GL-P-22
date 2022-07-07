import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AllowGuard } from './allow.guard';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './logout.guard';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [AllowGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: EditComponent, canActivate: [AllowGuard] },
    ],
  },

  {
    path: 'show-servers',
    loadChildren: () =>
      import('./sub/sub.module').then((module) => module.SubModule),
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const GL_P_ROUTING = RouterModule.forRoot(myRoutes);
