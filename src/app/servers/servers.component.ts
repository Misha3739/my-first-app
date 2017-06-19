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

  servers = ['Server', 'Server 2', 'Server 3', 'Server 4', 'Server 5'];

  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowAddNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreatingServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.onCreatedServerStatus = 'Sever was created yet! The server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
