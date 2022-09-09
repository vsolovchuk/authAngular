import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../../../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    @Input() title: string | undefined

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }
}
