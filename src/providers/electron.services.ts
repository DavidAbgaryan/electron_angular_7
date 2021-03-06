import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable()
export class ElectronService {

    ipcRenderer: typeof ipcRenderer;
    webFrame: typeof webFrame;
    remote: typeof remote;
    childProcess: typeof childProcess;
    fs: typeof fs;
    knex: any;

    constructor() {
        debugger;
        // Conditional imports
        if (this.isElectron()) {
            this.knex = require('knex')({
                client: 'mysql2',
                connection: {
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    database: 'defapp1'
                }
            });


            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
            this.remote = window.require('electron').remote;

            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');
        }

        debugger;
        this.knex.select().table('users').then((result) => {
            debugger;
        }).catch((err) => {
            debugger;
        });
    }

    isElectron = () => {
        return window && window.process && window.process.type;
    }

}
