## imageloader.js
``` javascript
export default {
    props: {
        source: String,
    },
    data() {
        return {
            img: null
        }
    },
    mounted(){
        this.loadImage(this.source)
    },
    methods: {
        loadImage(src){
            const img = new Image();
            img.onload = () => {
                this.img = img;
            }
            img.src = src;
        },
    },
}
```
## util.js
```javascript
export function getAngle(px,py,mx,my){
    let angle,x,y;
    x=px-mx;
    y=py-my;
    angle=Math.atan2(x,y);
    angle=(180/Math.PI*angle)*-1;
    return angle;
}
```