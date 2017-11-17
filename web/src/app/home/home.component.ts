import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public arrayListSorted = false;
    public arrayListSizeStored = true;
    public kthSelectionAlgorithms = [
        'Quick Select',
        'Median of Medians'
    ];

    public kthSelectionAlgorithm = this.kthSelectionAlgorithms[0];

    constructor() {
    }

    ngOnInit() {
    }

}
