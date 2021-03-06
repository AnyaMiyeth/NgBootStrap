import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListBlogComponent,
    ListPostComponent,
    ModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
       { path: 'list-blog', component: ListBlogComponent },
      { path: 'list-post', component: ListPostComponent },

    ])
  ],
  entryComponents:[ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
