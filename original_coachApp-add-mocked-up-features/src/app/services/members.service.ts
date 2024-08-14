import { Injectable } from '@angular/core';
import { CollectionReference, DocumentReference, Firestore, collection, collectionData, doc, docData, getDoc, onSnapshot, query, where } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Member, MemberHealthCoachAssignment, HealthCoach } from '../interfaces/member';
import { Auth, Unsubscribe, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private collectionRef: CollectionReference;
  private members: BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>([]);
  private membersSub!: Subscription; 
  private healthCoachSub!: Unsubscribe;

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) { 
    this.collectionRef = collection(this.firestore, 'members');

    // When the user logs in, we want to get their assigned members
    onAuthStateChanged(this.auth, (user) => {
      if(user) {
        this.subscribeToMembers(user.uid);          
      }
      else {
        // If the user logs out, clear the members list and unsubscribe from the members collection
        this.unsubscribeFromMembers();
      }
    });
  }

  subscribeToMembers(userId: string) {
    try {
      // Get the health coach document reference
      const healthCoachRef = doc(this.firestore, `coaches/${userId}`);
      
      // Subscribe to the health coach document
      this.healthCoachSub = onSnapshot(healthCoachRef, docSnapshot => {
        const data = docSnapshot.data();
        if (data) {
          const assignedMembers = data['assigned_members'] as DocumentReference[];
          
          if (this.membersSub) {
            this.membersSub.unsubscribe();
          }
          
          // Read the assigned members one by one
          Promise.all(assignedMembers.map(memberRef => getDoc(memberRef)))
          .then(memberDocs => {
            const memberList = memberDocs.map(memberDoc => {
              const member = memberDoc.data();
              if(member){
                return {
                  ...member,
                  user_id: member['user_id'].id
                };
              }
              else {
                return null;
              }
            }) as Member[];

            this.members.next(memberList);
          })
          .catch(error => {
            console.error('Error fetching members:', error);
          });
      }
        else {
          console.log('No assigned members!');
        }
      });
    }
    catch(error) {
      console.error('Error subscribing to members:', error);
    }
  }    

  unsubscribeFromMembers() {
    this.members.next([]);
    this.membersSub.unsubscribe();
  }

  getMembers() {
    return this.members.asObservable();
  }

  getMember(memberId: string) {
    const memberRef = doc(this.firestore, `members/${memberId}`);
    return docData(memberRef) as Observable<Member>;
  }
}
