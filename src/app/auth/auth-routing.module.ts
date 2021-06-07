import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        component: LoginComponent,
        children: [
            {
                path: 'auth',
                component: LoginComponent
            }
        ]
    },
    // { path: 'register', component: RegisterComponent },
    // { path: 'forgot-password', component: ForgotPasswordComponent },
    // {
    //     path: 'profile', component: ProfileComponent,
    //     children: [
    //         { path: '', component: ProfileListComponent },
    //         { path: 'new', component: ProfileEditComponent },
    //         {
    //             path: ':id', component: ProfileEditComponent
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
