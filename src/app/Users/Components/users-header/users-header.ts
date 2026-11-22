import { Component,EventEmitter,Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-users-header',
  imports: [],
  templateUrl: './users-header.html',
  styleUrl: './users-header.scss',
})
export class UsersHeader {
  @Input() role : string | undefined;

  @Output() selectedRole = new EventEmitter<string>();

  searchText : string = "";
  @Output() searchChanged = new EventEmitter<string>();

  onSelectedRoleChange(event : Event){
    const selecetd = (event.target as HTMLSelectElement).value;
    this.selectedRole.emit(selecetd);
  }

  onSearchChanged(event : Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.searchChanged.emit(value);
  }

}
