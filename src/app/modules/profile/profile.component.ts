import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { Member } from '@core/authentication/member';
import { DataService } from '@core/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private dataService: DataService, private router: Router) { }

  user: Member;
  refresh: boolean;

  ngOnInit() {
  	this.auth.getUser().subscribe(user => this.user = user);
  }

  setAccess()
  {
  	this.auth.setAccess(this.user.access.club, this.user.access.division, this.user.access.district);
  	this.refresh = true;
  }

  logout()
  {
  	this.auth.logout();
    this.user = null;
    this.router.navigate(['/login']);
    this.dataService.logoutData();
  }

  // login()
  // {
  // 	this.auth.login("user", "pass").subscribe(()=>{ this.auth.getUser().subscribe(user => this.user = user) }, error=>console.error(error), ()=> {});

  // }
  // moved to login component

  resetData()
  {
    this.dataService.resetData();
  }

}
