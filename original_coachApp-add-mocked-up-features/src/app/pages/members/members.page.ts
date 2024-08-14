import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  members = this.memberService.getMembers();

  constructor(
    private memberService: MembersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCardClick(memberId: DocumentReference) {
    console.debug('Navigating to member page', memberId)
    this.router.navigate(['/app/members/member/', memberId, 'summary']);
  }

}
