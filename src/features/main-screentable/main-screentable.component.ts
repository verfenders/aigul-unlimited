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
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

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
  producedDetails = 0;
  producedDetailLimit = 100;
  salary = 0;
  salaryLimit = 10000;
  detailSalary = 100;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.checkIfUserLoggedIn();
  }

  checkIfUserLoggedIn() {
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

  createDetail() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        header: 'Вы уверены, что деталь изготовлена?',
        content: `Для полного изготовления детали следует выполнить все шаги изготовления. <br>
        Их можно найти в разделе "Справка".`,
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.producedDetails++;
        this.salary += this.detailSalary;
      }
    });
  }

  finishWork() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        header: 'Вы уверены, что хотите завершить работу?',
        content: 'При завершении работы прогресс будет утерян.',
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.router.navigate(['/auth']);
      }
    });
  }
}
