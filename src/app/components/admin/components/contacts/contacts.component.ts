import { Component, OnInit } from '@angular/core';
import {filter, mapTo, merge, Observable} from "rxjs";
import {User} from "../../user";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private showLoader!: Observable <boolean>
  private hideLoader!: Observable <boolean>
   isLoading!:Observable <boolean>

personalList!: Observable<User[]>
  constructor(private  adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.personalList = this.adminService.getPersonalList()

    this.hideLoader = this.router.events.pipe(filter((e)=>e instanceof ResolveEnd),
      mapTo(false))

    this.showLoader = this.router.events.pipe(filter((e)=>e instanceof ResolveStart),
      mapTo(true))

    this.isLoading = merge(this.hideLoader, this.showLoader)
  }

}
