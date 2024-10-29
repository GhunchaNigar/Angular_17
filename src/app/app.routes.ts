import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
    {path:'', redirectTo:'Dashboard',pathMatch:'full'},
    {path:'Dashboard', component:DashboardComponent, title:'Dashboard', canActivate:[authGuard]},
    {path:'AboutUs', component:AboutUsComponent, title:'AboutUs'},
    {path:'ContactUs', component:ContactUsComponent, title:'ContactUs'},
    {path:'**', component:PagenotfoundComponent, title:'Error Page'},
    {path:'AboutUsnew', component:AboutUsComponent, title:'AboutUs', outlet:'outlet2'},
    {path:'login', component:LoginComponent, title:'Login'},
   
];
