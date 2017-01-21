import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { APP_ROUTES } from './app.routes';
import { CardService } from './shared/service/card.service';
import { CardComponent } from './shared/card/card.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { FilterPipe } from './shared/filter/filter.pipe';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule,
    APP_ROUTES,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    UpdateComponent,
    CreateComponent,
    FilterPipe ],
  providers: [
    CardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
