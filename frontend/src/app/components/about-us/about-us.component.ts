import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-company',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {

            $(".icon").height($(".icon").width())
        })
    }

}
