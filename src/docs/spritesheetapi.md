## API

### SpriteSheet component
The following parameters must be passed in when using spritesheet:
- config {
    - framerate: Number :framerate of spritesheet,
    - image: String :image source of sptitesheet,
    - frames: Object :{
        - width: Number :The width of each frame
        - height: Number :The height of each frame
        - count: Number :The count of all frames
    - },
    - patterns: Object :{
        - 'pattern': Object :{
            - frame: [from, to], :The beginning and the end of a pattern
            - next: 'next  pattern', :The next pattern
        - }
    - }
- }

- pattern.sync : String : From config patterns.