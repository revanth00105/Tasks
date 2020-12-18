import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsComponent } from '../terms/terms.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { LogFormComponent } from './log-form/log-form.component';

import { MenuComponent } from './menu.component';


const routes: Routes = [
    {
        path: 'logform', component: LogFormComponent,
        children: [
            { path: 'terms', component: TermsComponent },
            { path: 'conditions', component: ConditionsComponent }
        ]
    },
    {
        path: '', component: MenuComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuModule { }
