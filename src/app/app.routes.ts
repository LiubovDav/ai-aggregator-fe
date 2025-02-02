import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ChatModelComponent } from './chat-model/chat-model.component';
import { ImageModelComponent } from './image-model/image-model.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
    path: 'profile',
    component: UserListComponent // todo: create new component
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];
