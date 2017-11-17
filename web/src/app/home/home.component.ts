import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // Array List
    public arrayListSorted = false;
    public arrayListSizeStored = true;
    public kthSelectionAlgorithms = [
        'Random',
        'Median of Medians'
    ];
    public kthSelectionAlgorithm = this.kthSelectionAlgorithms[0];

    // Linked List
    public linkedListHasTailPointer = true;
    public linkedListSizeStored = true;
    public linkedListCircular = false;
    public linkedListTypes = [
        'Singly Linked',
        'Doubly Linked'
    ];
    public linkedListType = this.linkedListTypes[0];

    // Stack
    public stackBackingStructures = [
        'Linked List',
        'Array'
    ];
    public stackBackingStructure = this.stackBackingStructures[0];

    constructor() {
    }

    ngOnInit() {
    }

}
