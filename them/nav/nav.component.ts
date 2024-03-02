import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WishlistService } from '../services/wishlist.service';
import { ToggleButtonComponent } from "../toggle-button/toggle-button.component";
@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    imports: [RouterLink, RouterLinkActive, ToggleButtonComponent]
})
export class NavComponent implements OnInit {

  constructor(public wishlistService: WishlistService) {}
  
  ngOnInit() {
  }
}
