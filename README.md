# My Personal Site

This site is built with React and a WebGL library called Three.js.

## Under Renovation

I'm currently migrating to a Gatsby powered approach (most likely adopting the NetlifyCMS along the way). Will prioritise current design for home but add a blog like section.

## TODO

Learning that particle system. I've got down to a double loop in my animation frame function, but I will still aim to improve it (how can I exploit the nature of those trig functions... they _are_ repetitive after all). Moreover, I want to swoosh them in to the screen, fly around and then form the blanket so the user can clearly see their mouse interacting with the particle system.

I actually want to be able to allow the user to alter the particle system on the fly. I currently have got 2 animation functions active (that randomly gets selected to be the performance for the user on load), one of these is exactly described below.

```javascript
sphere.position.y =
  -3000 +
  (Math.sin((ix + this.count) * 0.5) * (500 + (15 / this.count) * 1000) +
    Math.cos((iy + this.count) * 0.5) * (500 + (15 / this.count) * 1000));
sphere.position.x +=
  Math.sin((ix + this.count) * 0.1) * 100 +
  Math.cos((iy + this.count) * 0.2) * 100;
sphere.position.z +=
  Math.sin((ix + this.count) * 0.1) * 70 +
  Math.cos((iy + this.count) * 0.2) * 70;
```

I mean these are just some variables in the end of the day where you can change the frequency and amplitude of the displacement, imagine a slider that simply passes it's state down to the particle generator altering the graphic on the fly. That'd be cool!
