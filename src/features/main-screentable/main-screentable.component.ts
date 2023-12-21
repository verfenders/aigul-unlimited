import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-main-screentable',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatGridListModule],
  templateUrl: './main-screentable.component.html',
  styleUrl: './main-screentable.component.scss',
})
export class MainScreentableComponent {}
