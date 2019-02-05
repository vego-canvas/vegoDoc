## API

### Canvas component

1. draw: function(g)

    Render methods, similar to vue's render methods, must be implemented.

    @parameters:
    - g: Graphic Object

    The wrapper of [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) implements a chained call pattern.

``` javascript
    // vanilla
    context.lineWidth = 2
    context.moveTo(50, 140)

    // chained pattern
    g.setLineWidth(2).moveTo(50, 140)
```

2. $to: function(state, duration, easing|easingFunc)

    Function to change the current component state to achieve tween animation.

    @parameters:
    - state: data change in root scope

    @return:
    - Promise object

    Temporarily only supports numerical and color changes.

``` javascript
    this.$to({
        x: 200,
        color: 'yellow',
        regX: 40,
        regY: 20,
        rotaion: 180,
    }, 1000, 'easeInOutQuad');
```

3. vegoDisplayObject
