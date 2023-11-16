import {
  Component,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartOptions, mapData } from './types';
import { NgChoroplethService } from './ng-choropleth.service';

@Component({
  selector: 'ng-choropleth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-choropleth.component.html',
  styleUrl: './ng-choropleth.component.css',
})
export class NgChoroplethComponent implements OnInit {
  @Input() ChartOptions: ChartOptions | undefined;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();
  private viewbox = '0 0 1008 651';
  private scale = 1.0;
  protected data!: mapData[];
  constructor(
    private el: ElementRef,
    private ngChoroplethService: NgChoroplethService
  ) {}

  ngOnInit(): void {
    this.data = this.ngChoroplethService.mapData();
  }

  mouseClick(event: MouseEvent) {
    const clickedElement = event.target as any;

    if (clickedElement.tagName === 'path') {
      const bbox = clickedElement.getBBox();
      const newViewBox = `${bbox.x - 10} ${bbox.y - 10} ${bbox.width + 20} ${
        bbox.height + 20
      }`;
      this.updateViewBox(newViewBox);
    }
  }
  private getCurrentViewBox(): string {
    const svgElement = this.el.nativeElement.querySelector('#svg');
    return svgElement.getAttribute('viewBox') || this.viewbox;
  }
  private updateViewBox(newViewBox: string) {
    const svgElement = this.el.nativeElement.querySelector('#svg');
    svgElement.setAttribute('viewBox', newViewBox);
  }
  zoomIn() {
    this.scale *= 1.2; // Increase the scale factor
    this.updateViewBoxWithScale();
  }

  zoomOut() {
    this.scale /= 1.2; // Decrease the scale factor
    this.updateViewBoxWithScale();
  }

  resetZoom() {
    this.scale = 1.0; // Reset scale factor
    this.updateViewBox(this.viewbox); // Reset to the original viewBox
  }

  private updateViewBoxWithScale() {
    const svgElement = this.el.nativeElement.querySelector('#svg');
    const originalViewBox = this.getCurrentViewBox();
    const scaledViewBox = this.applyScaleToViewBox(originalViewBox, this.scale);
    svgElement.setAttribute('viewBox', scaledViewBox);
  }

  private applyScaleToViewBox(originalViewBox: string, scale: number): string {
    const [x, y, width, height] = originalViewBox.split(' ').map(parseFloat);
    const scaledWidth = width / scale;
    const scaledHeight = height / scale;
    const newX = x + (width - scaledWidth) / 2;
    const newY = y + (height - scaledHeight) / 2;

    return `${newX} ${newY} ${scaledWidth} ${scaledHeight}`;
  }
}
