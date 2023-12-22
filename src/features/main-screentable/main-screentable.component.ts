import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialog} from "@angular/material/dialog";
import {TaskFaqComponent} from "../task-faq/task-faq.component";

@Component({
  selector: 'app-main-screentable',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatGridListModule, MatDividerModule],
  templateUrl: './main-screentable.component.html',
  styleUrl: './main-screentable.component.scss',
})
export class MainScreentableComponent {

  constructor(private dialog: MatDialog) {
  }
  openFaq() {
    this.dialog.open(TaskFaqComponent);
  }
}
