import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  personIdControl = new FormControl('', [Validators.required]);
  loading = false;

  constructor(private router: Router) {}

  login() {
    this.loading = true;
    if (this.personIdControl.value && this.personIdControl.value?.trim().length > 0) {
      localStorage.setItem('personId', this.personIdControl.value);
      this.router.navigate(['/work-space']);
    } else {
      this.personIdControl.reset();
      this.loading = false;
    }
  }
}
