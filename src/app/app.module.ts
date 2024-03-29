import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameComponent} from './game/game.component';
import {TopPageComponent} from './top-page/top-page.component';
import {PersonComponent} from './person/person.component';
import {DetailComponent} from './person/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        TopPageComponent,
        PersonComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
