import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-detail-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatDialogClose,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-detail-dialog.component.html',
  styleUrl: './create-detail-dialog.component.scss',
})
export class CreateDetailDialogComponent {
  detailsNumber = new FormControl(1, [Validators.required]);
}
