import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './shared/layout/main-header/main-header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TaskComponent } from './shared/uiarsenal/task/task.component';
import { ProfileComponent } from './shared/uiarsenal/profile/profile.component';
import { WidgetComponent } from './shared/uiarsenal/widget/widget.component';
import { ExpWidgetComponent } from './shared/uiarsenal/exp-widget/exp-widget.component';
import { StageComponent } from './shared/layout/stage/stage.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    TaskComponent,
    ProfileComponent,
    WidgetComponent,
    ExpWidgetComponent,
    StageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,routes,NgbModule.forRoot(),MatToolbarModule, MatIconModule,NgbDropdownModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
