import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/mascota/crear/crear.component';

const appRoutes: Routes = [
    { path: 'crear-mascota', component: CrearComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

