import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Member } from 'src/app/interfaces/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  member!: Observable<Member>;
  
  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.member = this.route.paramMap.pipe(
      switchMap(params => {
        const memberId = params.get('id');
        if (memberId) {
          return this.membersService.getMember(memberId);
        } else {
          // Handle the case where memberId is null
          // For example, you could return an Observable of an empty member object
          return of({} as Member);
        }
      })
    );
  }

}
