import { Component, Input } from '@angular/core';

import { LoggingService } from '../logging.service'; // SERVICE
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] // SERVICE
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService) {} // SERVICE

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    console.dir(this.accountsService.accounts);
    console.log(this.id);
    // this.loggingService.logStatusChange(status); // SERVICE
    this.accountsService.statusUpdated.emit(status);
  }
}
