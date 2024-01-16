import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { TaskFaqComponent } from '../task-faq/task-faq.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screentable',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  templateUrl: './main-screentable.component.html',
  styleUrl: './main-screentable.component.scss',
})
export class MainScreentableComponent implements OnInit {
  loading = false;
  personId = '';

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loading = true;

    const id = localStorage.getItem('personId');

    if (id === null) {
      this.router.navigate(['/auth']);
    } else {
      this.personId = id;
      this.loading = false;
    }
  }

  openFaq() {
    this.dialog.open(TaskFaqComponent);
  }
}
