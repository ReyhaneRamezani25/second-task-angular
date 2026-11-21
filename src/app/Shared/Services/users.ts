import { Injectable } from '@angular/core';
import { IUser } from '../Models/user';
@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor() {
    console.log('Users Service Created');
  }

  users: IUser[] = [
    { id: 1, name : 'رضا احمدی' , email: 'reza.user@example.com', password: 'User@123', role: 'user', status: true, salary: 45000000, position: 'Frontend Developer' },
    { id: 2, name : 'ماهان رضایی' , email: 'mahan.operator@example.com', password: 'Operator@123', role: 'operator', status: true, salary: 35000000, position: 'System Operator' },
    { id: 3, name : 'سارا رمضانی' , email: 'sara.admin@example.com', password: 'Admin@123', role: 'admin', status: true, salary: 65000000, position: 'System Administrator' },
    { id: 4, name : 'سارا قربانی' , email: 'sara.user@example.com', password: 'User@321', role: 'user', status: true, salary: 40000000, position: 'UI/UX Designer' },
    { id: 5, name : 'حسین محمدی' , email: 'hossein.operator@example.com', password: 'Operator@789', role: 'operator', status: false, salary: 32000000, position: 'Technical Support Specialist' },
    { id: 6, name : 'مینا اکبری' , email: 'mina.user@example.com', password: 'User@456', role: 'user', status: true, salary: 55000000, position: 'Backend Developer' },
    { id: 7, name : 'علی علوی' , email: 'ali.admin@example.com', password: 'Admin@456', role: 'admin', status: true, salary: 70000000, position: 'Senior System Administrator' },
    { id: 8, name : 'ندا چراغی' , email: 'neda.operator@example.com', password: 'Operator@456', role: 'operator', status: true, salary: 38000000, position: 'Maintenance Operator' },
    { id: 9, name : 'نیما فلاح' , email: 'nima.user@example.com', password: 'User@789', role: 'user', status: false, salary: 50000000, position: 'Database Developer' },
    { id: 10, name : 'امیر نیکزاد' , email: 'amir.user@example.com', password: 'User@654', role: 'user', status: true, salary: 42000000, position: 'QA Engineer' }
  ];

  currentUser: IUser | null = null;
}
