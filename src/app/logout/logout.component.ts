import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  returnUrl: string;
  constructor(private authService: AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
