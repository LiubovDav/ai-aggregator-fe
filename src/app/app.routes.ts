import { Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { ChatModelComponent } from './chat-model/chat-model.component';
import { ImageModelComponent } from './image-model/image-model.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SignoutComponent } from './signout/signout.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'chat-model',
    component: ChatModelComponent
  },
  {
    path: 'image-model',
    component: ImageModelComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-create',
    component: UserCreateComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  }
];
