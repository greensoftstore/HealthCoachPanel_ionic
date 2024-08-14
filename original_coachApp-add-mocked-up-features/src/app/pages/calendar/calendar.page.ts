import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';
import { IEvent } from 'ionic2-calendar/calendar.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, OnDestroy {  
  calendar = {
    mode: 'day' as CalendarMode,
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent) calendarComponent!: CalendarComponent;
  viewTitle!: string;
  
  events: IEvent[] = [
    {
      title: 'Event 1',
      startTime: new Date(),
      endTime: new Date(new Date().setHours(new Date().getHours() + 1)),
      allDay: false
    },
    {
      title: 'Event 2',
      startTime: new Date(new Date().setDate(new Date().getDate() + 1)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(new Date().getHours() + 1)),
      allDay: false
    }
  ];
  
  constructor() { }

  ngOnInit() {
    this.loadAppointments();
  }

  ngOnDestroy() {
    this.events = [];
  }

  loadAppointments() {
  }

  back() {
    this.calendarComponent.slidePrev();
  }

  next() {
    this.calendarComponent.slideNext();
  }

  onViewTitleChanged(title: string) {
    this.viewTitle = title;
  }
}