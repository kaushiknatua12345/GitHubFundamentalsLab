import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { EmployeeStoreService } from './employee-store.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <main class="shell">
      <section class="hero">
        <p class="eyebrow">Hyland employee registration</p>
        <h1>FrontEnd agent</h1>
        <p class="lede">Register employees with a simple Angular form and keep records in memory for the current session.</p>

        <div class="stats">
          <article>
            <strong>{{ totalEmployees() }}</strong>
            <span>Employees stored</span>
          </article>
          <article>
            <strong>{{ departments.length }}</strong>
            <span>Departments</span>
          </article>
        </div>
      </section>

      <section class="grid">
        <article class="panel">
          <div class="panel-heading">
            <h2>Register employee</h2>
            <p>All values are validated before they are added to the in-memory store.</p>
          </div>

          <form class="form" [formGroup]="form" (ngSubmit)="submit()">
            <label>
              <span>First name</span>
              <input type="text" formControlName="firstName" placeholder="Ava" />
              @if (form.controls.firstName.invalid && (form.controls.firstName.dirty || form.controls.firstName.touched)) {
                <small class="error">First name is required and must be 40 characters or fewer.</small>
              }
            </label>

            <label>
              <span>Last name</span>
              <input type="text" formControlName="lastName" placeholder="Patel" />
              @if (form.controls.lastName.invalid && (form.controls.lastName.dirty || form.controls.lastName.touched)) {
                <small class="error">Last name is required and must be 40 characters or fewer.</small>
              }
            </label>

            <label>
              <span>Email</span>
              <input type="email" formControlName="email" placeholder="ava.patel@hyland.local" />
              @if (form.controls.email.invalid && (form.controls.email.dirty || form.controls.email.touched)) {
                <small class="error">Enter a valid email address.</small>
              }
            </label>

            <label>
              <span>Department</span>
              <select formControlName="department">
                @for (department of departments; track department) {
                  <option [value]="department">{{ department }}</option>
                }
              </select>
            </label>

            <label>
              <span>Start date</span>
              <input type="date" formControlName="startDate" />
              @if (form.controls.startDate.invalid && (form.controls.startDate.dirty || form.controls.startDate.touched)) {
                <small class="error">Start date is required.</small>
              }
            </label>

            <button type="submit">Save employee</button>
          </form>
        </article>

        <article class="panel">
          <div class="panel-heading">
            <h2>Current employees</h2>
            <p>These records live only in memory while the app is open.</p>
          </div>

          @if (employees().length === 0) {
            <div class="empty-state">
              <p>No employees have been registered yet.</p>
            </div>
          } @else {
            <div class="employee-list">
              @for (employee of employees(); track employee.id) {
                <article class="employee-card">
                  <div>
                    <h3>{{ employee.firstName }} {{ employee.lastName }}</h3>
                    <p>{{ employee.email }}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Department</dt>
                      <dd>{{ employee.department }}</dd>
                    </div>
                    <div>
                      <dt>Start date</dt>
                      <dd>{{ employee.startDate }}</dd>
                    </div>
                  </dl>
                </article>
              }
            </div>
          }
        </article>
      </section>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly store = inject(EmployeeStoreService);

  protected readonly departments = [
    'Finance',
    'Human Resources',
    'Information Technology',
    'Operations',
    'Customer Support'
  ] as const;

  protected readonly employees = this.store.employees;
  protected readonly totalEmployees = computed(() => this.employees().length);

  protected readonly form = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(40)]],
    lastName: ['', [Validators.required, Validators.maxLength(40)]],
    email: ['', [Validators.required, Validators.email]],
    department: [this.departments[0], [Validators.required]],
    startDate: [this.todayIsoDate(), [Validators.required]]
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.addEmployee(this.form.getRawValue());
    this.form.reset(this.createFormDefaults());
  }

  private createFormDefaults() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      department: this.departments[0],
      startDate: this.todayIsoDate()
    };
  }

  private todayIsoDate(): string {
    return new Date().toISOString().slice(0, 10);
  }
}
