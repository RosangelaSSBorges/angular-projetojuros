import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JurosSimpComponent } from './jurossimp/jurossimp.component';
import { JurosCompComponent } from'./juroscomp/juroscomp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'jurossimp', component: JurosSimpComponent },
      { path: 'juroscomp', component: JurosCompComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    JurosSimpComponent,
    JurosCompComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
