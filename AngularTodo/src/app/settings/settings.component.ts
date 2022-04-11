import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  // track user settings as a list of strings
  userSettings?:string[];

  constructor() { }

  ngOnInit(): void {
    if(!this.userSettings){
      this.userSettings = [
        "color-theme: light",
        "format: default",
        "output: default"
      ]
    }
  }

}
