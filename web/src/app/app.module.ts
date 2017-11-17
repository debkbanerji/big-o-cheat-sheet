import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


import {MatCheckboxModule, MatCardModule} from '@angular/material';


const routes: Routes = [ // Array of all routes - modify when adding routes
    {path: '', component: HomeComponent} // Default route
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCheckboxModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
