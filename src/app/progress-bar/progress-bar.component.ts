// progress-bar.component.ts

import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges } from "@angular/core";
import { PercentagePipe } from "../pipes/precentage.pipe";

@Component({
  selector: "app-progress-bar",
  standalone: true,
  imports: [PercentagePipe],
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class ProgressBarComponent implements OnInit {
  
  @Input() percentages!: any;
  @Input() movieId!: number
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateProgressBar();
  }

  private updateProgressBar(): void {
    const a = -3.46;
    const b = 440;
  
    // Convert NodeList to an array
    const filledElements = Array.from(this.el.nativeElement.querySelectorAll('.filled')) as unknown as NodeListOf<HTMLElement>;
  
    filledElements.forEach((concernedCircle: HTMLElement, index: number) => {
      const percentage = this.percentages[index];
      const finalOffset = Math.round(a * 10 * percentage + b);
      this.renderer.setStyle(concernedCircle, 'strokeDashoffset', finalOffset + '');
    });
  }
  
}
