# BoilerPenguin
A set of html/css/js templates to get coding going faster. This boilerplate can help get projects get going faster, or setup sandbox files quicker to test new techniques. Rather then creating a framework that could be used by everybody, this is the boilerplate that I use in my own work. As such there are a few things that reflect my personal preferance, such as the use of LESS.

### Markup

The markup is clean, semantic html5.

### LESS

The LESS superset of CSS brings a lot of functionality to CSS that developers have been wanting: variables, functions, nested selectors... as a whole LESS enables faster css development, leaner CSS files, and a more enjoyable development process in general. As such, BoilerPenguin is centered around LESS. A lot of people use Sass, which is also fantastic. The features are so similar that it's a matter of preference, and I've included LESS files as that's what I use in my own workflow.

You only need to compile style.less and ie.less

### library.less

This file imports your variables, css3 library, and any other libraries you wish to include. It also contains your mixins.

### css3.less

I've included a few css3 mixins to make using css3 faster. Rather than including the full breadth of css3 I've just included items that I've found myself using on every project.

### responsive.less

A few media queries are found in responsive.less which is included in the bottom of style.less These specific sizes are just a starting point. 

### Normalize vs. Eric Meyer

Eric Meyer's global css reset has been the long standard in the css reset world. Normalize is quickly gaining traction though, so I've included both as there are great things about both approaches. I haven't yet settled on switching to Normalize from Eric Meyer's reset yet, and I imagine others might want to try out both as well.