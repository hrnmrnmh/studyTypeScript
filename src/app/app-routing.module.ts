import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestpageComponent} from "./testpage/testpage.component";
import {TopPageComponent} from "./top-page/top-page.component";

const routes: Routes = [
    {path: '', component: TopPageComponent},
    {path: 'testpage', component: TestpageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
