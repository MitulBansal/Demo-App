import { Component, OnInit } from '@angular/core';
import { Employee } from '../module/Employee';
import { EmployeeService } from '../services/EmployeeService';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-datagrid-demo-component',
  templateUrl: './datagrid-demo-component.component.html',
  styleUrls: ['./datagrid-demo-component.component.css']
})
export class DatagridDemoComponentComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
  employee: Employee;
  selectedEmployees: Employee[];
  cols: any[];
  msgs: Message[] = [];
  newEmployee: boolean;
  displayDialog: boolean=false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeeDetails().then(employees => this.employees = employees);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'employeeId', header: 'Employee Id' },
      { field: 'domain', header: 'Department' },
      { field: 'address', header: 'Address' }
    ];
  }
  cloneEmployee(e: Employee): Employee {
    let employee1 :Employee; 
    for (let prop in e) {
      employee1[prop] = e[prop];
    }
    return employee1;
  }

  AddEmployee(){
    this.newEmployee = true;
    this.employee = ({name: '', employeeId: '', address: '', domain : ''});
    this.displayDialog = true;
  }
  save() {
    let employees = [...this.employees];
    if (this.newEmployee)
      employees.push(this.employee);
    else
      employees[this.employees.indexOf(this.selectedEmployee)] = this.employee;

    this.employees = employees;
    this.employee = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.employees.indexOf(this.selectedEmployee);
    this.employees = this.employees.filter((val, i) => i != index);
    this.displayDialog = false;
  }
 onRowSelect(event) {
    this.newEmployee = false;
   // this.employee = this.cloneEmployee(event.data);
    this.employee = this.selectedEmployee;
    this.displayDialog = true;
  }
  selectEmployeeWithButton(employee: Employee) {
    this.selectedEmployee = employee;
    this.msgs = [{ severity: 'info', summary: 'Employee Selected', detail: 'Name: ' + employee.name }];
  }
}
