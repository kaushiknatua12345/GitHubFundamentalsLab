import { Injectable, computed, signal } from '@angular/core';

import { Employee, EmployeeRegistrationInput } from './employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeStoreService {
  private nextId = 3;

  private readonly employeesSignal = signal<Employee[]>([
    {
      id: 1,
      firstName: 'Ava',
      lastName: 'Patel',
      email: 'ava.patel@hyland.local',
      department: 'Operations',
      startDate: '2026-05-01'
    },
    {
      id: 2,
      firstName: 'Marcus',
      lastName: 'Lee',
      email: 'marcus.lee@hyland.local',
      department: 'Information Technology',
      startDate: '2026-05-08'
    }
  ]);

  readonly employees = computed(() => this.employeesSignal());

  addEmployee(employee: EmployeeRegistrationInput): Employee {
    const createdEmployee: Employee = {
      id: this.nextId++,
      ...employee
    };

    this.employeesSignal.update((currentEmployees) => [createdEmployee, ...currentEmployees]);

    return createdEmployee;
  }
}