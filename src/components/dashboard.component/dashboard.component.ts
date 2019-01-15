
import { Component, OnInit } from '@angular/core';
import {ElectronService} from '../../providers/electron.services';

@Component({
  selector: 'Dashboard',
  template:
    `<div>
    <h2>Welcome to {{name}} Angular7!</h2>
  </div>`
})
export class DashboardComponent implements OnInit {
  public readonly name = 'electron-forge';

  constructor(public electronService: ElectronService) {
    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

  }

  ngOnInit(): void {
    console.log('component initialized');
  }
}
