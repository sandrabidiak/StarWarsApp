import { Routes } from '@angular/router';
import { PlotDetailComponent } from '../components/plot-detail.component';
import { PlotListComponent } from '../components/plot-list.component';

export const appRoutes: Routes = [
    { path: 'plots', component: PlotListComponent},
    { path: 'plots/create', component: PlotDetailComponent},
    { path: 'plots/:id', component:  PlotDetailComponent},
    { path: '', redirectTo: 'plots', pathMatch: 'full' }
];