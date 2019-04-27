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
import { StarWarsService } from './services/star-wars.service';
import { HttpClientModule } from  '@angular/common/http';

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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    PlotStore,
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
