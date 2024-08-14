// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: 'tasks.page.html',
//   styleUrls: ['tasks.page.scss'],
// })
// export class TasksPage {

//   constructor() {}

// }


import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '../../components/modal/modal.config';
import { ModalOptions } from '@ionic/angular';

type Tabs = 'ToDo' | 'Progress' | 'Done' | 'All';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {

  modalOptions: NgbModalOptions = {
    backdrop: 'static',
    size: 'xl',
    centered: true
  };

  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'OK',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalContent!: TemplateRef<TasksPage>;
  private modalRef!: NgbModalRef;

  activeTab: Tabs = 'ToDo';
  selectedData: any = {
    title: "Complete PCP next steps", 
    description: 'Member to Schedule ...', 
    status: 0, 
    deadline: '2024/04/27', 
    until: 3, 
    member: 'Tyvonne Johnson'
  };

  constructor(private modalService: NgbModal) {}


  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  taskData: Array<any> = [
    {title: "Complete PCP next steps", description: 'As a health coach, I provide guidance and support to help you achieve your wellness goals, but I am not a licensed medical professional. Please seek medical attention if you have any underlying health conditions or concerns.', status: 0, deadline: '2024/04/27', until: 3, member: 'Tyvonne Johnson'},
    {title: "Do stuff", description: '', status: 0, deadline: '', until: 0, member: 'Tyvonne Johnson'},
    {title: "Complete PCP next steps2", description: 'The recipes, workouts, and wellness tips shared on this website are not intended to diagnose, treat, or cure any disease. Always consult with a healthcare professional before starting any new program or regimen.', status: 0, deadline: '', until: 0, member: 'Andrew Young'},
    {title: "Check how Shusan's big event went", description: 'While I strive to provide accurate and helpful information, I am not responsible for any adverse effects or consequences resulting from the use of my advice or guidance. Please use my services at your own risk and consult with a qualified healthcare professional if you have any concerns.', status: 0, deadline: '2024/04/28', until: 4, member: 'Shusan'},
    {title: "Ask for more info about knee pain", description: '', status: 0, deadline: '', until: 0, member: 'Shusan'},
    {title: "Complete PCP next steps", description: 'My health coaching services are not a substitute for medical care or treatment. If you have a medical condition, please consult with a qualified healthcare professional before using my services.', status: 0, deadline: '2024/04/27', until: 3, member: 'Tyvonne Johnson'},
    {title: "Complete PCP next steps", description: '- Member to Schedule ...', status: 0, deadline: '2024/04/27', until: 3, member: 'Tyvonne Johnson'},
    {title: "Complete PCP next steps", description: '- Member to Schedule ...', status: 0, deadline: '2024/04/27', until: 3, member: 'Tyvonne Johnson'},
  ]

  async setShowModal(item: Object) {
    this.selectedData = item;
    this.open();
  }


  open(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.modalContent, this.modalOptions);
      this.modalRef.result.then(resolve, resolve);
    });
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalRef.close(result);
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.disableDismissButton !== undefined) {
      return;
    }

    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalRef.dismiss(result);
    }
  }
}
