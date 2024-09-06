import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { AdminLayoutComponent } from './Pages/admin/admin-layout/admin-layout.component';
import { AdminChannelComponent } from './Pages/admin/admin-channel/admin-channel.component';
import { AdminAdminComponent } from './Pages/admin/admin-admin/admin-admin.component';
import { AdminCategoriesComponent } from './Pages/admin/admin-categories/admin-categories.component';
import { AdminJournalistComponent } from './Pages/admin/admin-journalist/admin-journalist.component';
import { AdminUsersComponent } from './Pages/admin/admin-users/admin-users.component';
import { AdminTagsComponent } from './Pages/admin/admin-tags/admin-tags.component';
import { AdminHomeComponent } from './Pages/admin/admin-home/admin-home.component';
import { HomeLayoutComponent } from './Pages/home/home-layout/home-layout.component';
import { UserChannelComponent } from './Pages/home/user-channel/user-channel.component';
import { ProfileLayoutComponent } from './Pages/layout/profile-layout/profile-layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent
    },
    {
        path: 'registration',
        title: 'Registration',
        component: RegistrationComponent
    },
    {
        path: 'home',
        title: 'Home',
        component: HomeLayoutComponent
    },
    {
        path: 'profile',
        title: 'p-layout',
        component: ProfileLayoutComponent
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'userhome/:cardName',
                title: 'uhome',
                component: UserChannelComponent
            },
        ]
    },
    {
         path: 'admin',
         component:AdminLayoutComponent,
         children:[
             {
                 path:'channel',
                 title: 'Channel',
                 component:AdminChannelComponent
             },
             {
                 path:'dashboard',
                 title: 'Dashboard',
                 component:AdminHomeComponent
             },
             {
                 path:'admin',
                 title: 'Admin',
                 component:AdminAdminComponent
             },
             {
                 path:'categories',
                 title: 'Categories',
                 component:AdminCategoriesComponent
             },
             {
                 path:'journalist',
                 title: 'Journalist',
                 component:AdminJournalistComponent
             },
             {
                 path:'users',
                 title: 'Users',
                 component:AdminUsersComponent
             },
             {
                 path:'tags',
                 title: 'Tags',
                 component:AdminTagsComponent
             }
         ]
    },

];
