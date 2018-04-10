import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToasteService } from '../services/toaste.service';

import { ToastsManager, } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    model: any = {};
    loading = false;
    returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private authService: AuthService,
    private toasteService: ToasteService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {this.toastr.setRootViewContainerRef(vcr); }
    login() {
      this.loading = true;
      this.authService.login(this.model.email, this.model.password)
          .subscribe(
              data => {
                  console.log(data);
                  this.router.navigate(['/home']);
              },
              error => {
                  this.loading = false;
                  this.toasteService.Error('Login Not Success');
              });
    }
  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  ngOnDestroy() {
    this.toasteService.success('Login Success');
  }
}
