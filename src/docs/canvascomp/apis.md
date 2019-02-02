## API

### Canvas component

1. draw : function(g):

    Render methods, similar to vue's render methods, must be implemented.
    @params: Graphic Object
       The wrapper of [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) implements a chained call pattern.

        property -> setProperty, Ex. context.lineWidth = 2 -> g.setLineWidth(2)

        method -> method, Ex. context.moveTo(50, 140) -> g.moveTo(50, 140)

2. $to
