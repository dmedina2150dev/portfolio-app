import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomerComponent } from './homer/homer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    HeaderComponent,
    PostDetailComponent,
    HomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
