## API

### Canvas component

1. draw : function(ctx):

    Render methods, similar to vue's render methods, must be implemented.
    @params: ctx

   ​	type: [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)


2. mouseevent:

    mouse event object
    - type: event type
    - target: target of event
    - originEvent: canvas triggered event
    - x: the x coordinate value relative to the canvas origin
    - y: the y coordinate value relative to the canvas origin
    - stopPropagation: Function: to stop bubble phase

3. Inherited method:
    - @click(event)
    - @mousedown(event)
    - @mousemove(event)
    - @pressmove(event): Pressmove provides additional parameters anchorX and anchorY to record the location of the mousedown
    - @mouseup(event)
    - @mouseenter(event)
    - @mouseleave(event)

4. tweenmixin:

    A component that USES tween needs to reference this mixin, which introduces a new property to specify the parameter of tween.

    - tween: {
        - duration: Number,
        - easing: String|Function,
        - observe: Array of props or datas
    - }

    Currently support for digital and hexadecimal colors and RGB colors tweening.

    - @tweenend(): An additional tweenend event was introduced to identify the end.

5. vego-container:

    In addition to setting the x,y coordinates relative to the upper left corner of the canvas, vego container can also set its coordinate origin position with respect to x, y through rawX, rawY, and add additional rotate parameters to set the deflection angle about its coordinate origin.
    - rawX
    - rawY
    - rotation