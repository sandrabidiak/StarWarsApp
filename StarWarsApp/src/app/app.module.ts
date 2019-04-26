import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotListComponent } from './components/plot-list.component';
import { PlotStore } from './stores/plot.store';
import { PlotDetailComponent } from './components/plot-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    PlotListComponent,
    PlotDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PlotStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
