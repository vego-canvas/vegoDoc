## Key features

**vego-canvas**: canvas wrapper. It has width, height properties and basic events emiters. And it can fit different devicePixelRatio. All components within this tag must implement draw function which named as  *canvas components*.

**eventDispatcher**: a mixin mimic mouse event, iucludes click, mousedown, mouseup and ect. It will mixin into *canvas component* when created.

**drawStack**:  a mixin into *canvas component* when created. It injects function `_updateContext` for every *canvas components*.

**tweenMixin**: a mixin used to calculate tweening when declared data changed.

**spriteSheet**: a *canvas component* to display a sprite sheet.

**vego-container**:  a *canvas component* to contain other *canvas components* and it has own coordiantes-origin from left top.

**ticker**: a internal ticker drive stack to draw graphics.



## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present Tony Wang