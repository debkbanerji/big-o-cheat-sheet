import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


import {
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatSlideToggleModule, MatDialogModule, MatButtonModule
} from '@angular/material';
import {AboutDialogComponent} from './dialogs/about-dialog/about-dialog.component';
import { NoteDialogComponent } from './dialogs/note-dialog/note-dialog.component';


const routes: Routes = [ // Array of all routes - modify when adding routes
    {path: '**', component: HomeComponent} // Default route
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutDialogComponent,
        NoteDialogComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatSelectModule,
        RouterModule.forRoot(routes)
    ],
    entryComponents: [
        AboutDialogComponent,
        NoteDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
