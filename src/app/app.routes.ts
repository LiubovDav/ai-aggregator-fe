import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ChatModelComponent } from './chat-model/chat-model.component';
import { ImageModelComponent } from './image-model/image-model.component';
import { UserCreateComponent } from './user-create/user-create.component';

export const routes: Routes = [
  {
    path: '',
    component: ChatModelComponent
  },
  {
    path: 'login',
    component: ChatModelComponent // todo: create new component
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
    component: UserCreateComponent // todo: create new component
  }
];
