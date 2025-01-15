import {Component, HostListener} from '@angular/core';
import {UserDropdownComponent} from '../user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-header',
  imports: [
    UserDropdownComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  showDropdown: boolean = false;

  closeDropdown() {
    this.showDropdown = false;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  // Quand on clique n'importe où dans le document
  @HostListener('document:click', ['$event.target'])
  public onClickOutside(targetElement: HTMLElement) {
    // Vérifie si on a cliqué à l'intérieur du bloc .user-icon-wrapper
    const clickedInside = targetElement.closest('.user-icon-wrapper');
    if (!clickedInside) {
      this.closeDropdown();
    }
  }
}
