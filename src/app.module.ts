import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DashboardComponent } from './components/dashboard.component/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ElectronService } from './providers/electron.services';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [DashboardComponent, AppComponent],
    providers: [ElectronService],
    bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
