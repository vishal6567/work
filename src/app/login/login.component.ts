import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private authService: AuthService) { }
    login() {
      this.loading = true;
      this.authService.login(this.model.email, this.model.password)
          .subscribe(
              data => {
                  console.log(data);
                  //this.alertService.success('Login successful', true);
                  this.router.navigate(['/nav-bar']);
              },
              error => {
                  //this.alertService.error('UserName and Password Worn? ');
                  this.loading = false;
              });
    }
  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
