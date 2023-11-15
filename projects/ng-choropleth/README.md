# ng-choropleth

[![Version](https://img.shields.io/npm/v/ng-choropleth.svg)](https://www.npmjs.com/package/ng-choropleth)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Interactive Choropleth Map Library for Angular**

The ng-choropleth library is a versatile and user-friendly tool for integrating interactive choropleth maps into your Angular applications. Whether you're visualizing geographical data, tracking regional statistics, or presenting complex information, this library simplifies the process and enhances your application's data visualization capabilities.

## Features

- **Angular Integration:** Seamless integration with Angular applications.
- **SVG Rendering:** Utilizes scalable and responsive SVG for map rendering.
- **Customizable Styling:** Easily customize the appearance, color schemes, and data representations.
- **Data Binding:** Dynamically bind data for real-time visualizations and updates.
- **Interactive Elements:** Incorporate tooltips, click events, and other interactive features.
- **Lightweight:** Designed for efficiency, ensuring a smooth user experience.

## Getting Started

### Installation

Install the library using npm:

```bash
npm install ng-choropleth
```

### USAGE

Import the module into your Angular application component.ts file:

```ts
import { NgChoroplethComponent } from "ng-choropleth";

@NgModule({
  imports: [NgChoroplethComponent],
  //...
})
export class YourComponent {}
```

Use the lib-ng-choropleth component in your templates:

```html
<ng-choropleth [options]="options"></ng-choropleth>
```

## License

[MIT License]() © Santhosh M
