import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-task-faq',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
  ],
  templateUrl: './task-faq.component.html',
  styleUrl: './task-faq.component.scss',
})
export class TaskFaqComponent {}
