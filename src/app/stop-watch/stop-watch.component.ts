import { NgIf } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [NgIf],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.css',
})
export class StopWatchComponent {
  hours = signal<number>(0);
  minutes = signal<number>(0);
  seconds = signal<number>(0);
  miliseconds = signal<number>(0);
  active = signal<Boolean>(false);
  private intervalId: number | null = null;

  toggleActiveStopWatch(val: Boolean) {
    this.active.set(val);
  }

  constructor() {
    effect(() => {
      if (this.active() === true) {
        this.startInterval();
      }
    });
  }
  private startInterval(): void {
    if (this.intervalId === null) {
      this.intervalId = window.setInterval(() => {
         if (this.miliseconds() === 59) {
          this.seconds.update((val) => val + 1);
          this.miliseconds.set(-1);
        }
        if (this.seconds() === 59) {
          this.minutes.update((val) => val + 1);
          this.seconds.set(0);
        }
        if (this.minutes() === 59) {
          this.hours.update((val) => val + 1);
          this.minutes.set(0);
        } else {
          this.miliseconds.update((val) => val + 1);
        }
      }, 10);
    }
  }

  private stopInterval(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetStopWatch(): void {
    this.active.set(false);
    this.stopInterval();
    this.hours.set(0);
    this.minutes.set(0);
    this.seconds.set(0);
    this.miliseconds.set(0);
  }
}
