import { DashboardComponent } from './components/dashboard.component/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronService } from './providers/electron.services';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];
debugger;
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    providers: [ElectronService],
    exports: [RouterModule]
})
export class AppRoutingModule { }
