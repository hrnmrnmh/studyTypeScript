import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from "./game/game.component";
import {TopPageComponent} from "./top-page/top-page.component";
import {PersonComponent} from "./person/person.component";
import * as PersonDetail from "./person/detail/detail.component";

const routes: Routes = [
    {path: '', component: TopPageComponent},
    {path: 'game', component: GameComponent},
    {path: 'person', component: PersonComponent},
    {path: 'person/:name', component: PersonDetail.DetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
