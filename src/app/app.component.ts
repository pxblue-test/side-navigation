import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {NavigationService} from './shared/navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  open = false; // is the nav menu open
  userMenu = false; // toggles menu mode on mobile

  constructor(
    _navigationService: NavigationService,
    changeDetectorRef: ChangeDetectorRef
  ) {
      _navigationService.navToggled$.subscribe(
        value => {
          this.open = !this.open;
          changeDetectorRef.detectChanges();
        }
      );
  }
}