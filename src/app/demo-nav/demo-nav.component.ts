import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {slide} from './slide.animation';

@Component({
  selector: 'demo-nav',
  templateUrl: './demo-nav.component.html',
  styleUrls: ['./demo-nav.component.css'],
  animations: [
    slide(),
  ],
})
export class DemoNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(private breakpointObserver: BreakpointObserver) {}
  animationDisabled = true;
  logout = false;
  version = 6;

  ngAfterViewInit() {
    // We can't change anything after change detection finishes,
    // so we defer assignment to the next cycle.
    // This trick ensures that :enter animations doesn't fire on component init,
    // which is often unwanted. 
    setTimeout(() => this.animationDisabled = false);
  }

}
