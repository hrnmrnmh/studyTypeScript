import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestpageComponent} from './testpage/testpage.component';
import {TopPageComponent} from './top-page/top-page.component';

@NgModule({
    declarations: [
        AppComponent,
        TestpageComponent,
        TopPageComponent
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
