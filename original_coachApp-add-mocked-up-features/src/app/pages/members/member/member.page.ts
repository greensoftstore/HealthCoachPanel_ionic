import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Member } from '../../../interfaces/member';
import { MembersService } from '../../../services/members.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  memberId!: string;

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService,
    private router: Router
  ) { }

    ngOnInit(): void {
    // Verify if the member ID is available in the URL
    if (this.route.snapshot.paramMap.has('memberId')) {
      this.memberId = this.route.snapshot.paramMap.get('memberId') as string;
    }
  }
}