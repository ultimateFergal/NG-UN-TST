import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { PersonRowComponent } from './person-row/person-row.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserListComponent } from './user-list/user-list.component'
import { MockUsersService } from './users.service.mock';
import { ReversePipe } from './reverse.pipe';
import { FormSkuComponent } from './form-sku/form-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonRowComponent,
    UserRowComponent,
    UserListComponent,
    ReversePipe,
    FormSkuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [ 
    UsersService,
    MockUsersService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
