import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddNewServers = false;

  onCreatedServerStatus = 'Server was not created';

  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowAddNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatingServer() {
    this.onCreatedServerStatus = 'Sever was created yet! The server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
