import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-header',
  imports: [],
  templateUrl: './users-header.html',
  styleUrl: './users-header.scss',
})
export class UsersHeader {
  @Input() role : string | undefined;

  @Output() selectedRole = new EventEmitter<string>();

  onSelectedRoleChange(event : Event){
    const selecetd = (event.target as HTMLSelectElement).value;
    this.selectedRole.emit(selecetd);
  }

}
