import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  imports: [],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.scss'
})
export class UserDropdownComponent {
  showDropdown = false;
  @Input() isLoggedIn!: boolean;
  @Output() requestClose = new EventEmitter<void>();



close(){
  this.requestClose.emit();

}

}
