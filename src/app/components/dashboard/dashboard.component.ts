import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../../../shared/services/auth.service";

@Component({
    selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    @Input() title: string | undefined

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }

}
