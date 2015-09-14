---
layout: post
title:  "Using Custom Navigation with Slick.js"
date:   2015-03-21 00:26:20
categories: slick, jquery
---

<p class="intro">I use the <a href="http://kenwheeler.github.io/slick/">slick.js slider</a> often. It's small, easy to use and very customizable. I've been asked a few times how to control the slick slider with custom anchor links like on the homepage of this site so here's how to do that.</p>

All you have to do is turn the sliders off with arrows: false. Then, attach your new links using the SlickGoTo method.

<div class="updated">
 <p>Update: Updated the code to work with newer versions of slick > 1.4. I also noticed a lot of people getting to this page looking for <a href="#">custom prev/next arrows for slick</a> so I wrote that up too.</p>
</div>

## HTML

Create a navigation and your slider. Add the custom data-slide attribute to the links (or whatever you're using as buttons) and use the slide number you'd like to link to. Start at 0.

{% highlight html %}

<ul class="slider-nav">
  <li><a href="javascript:void(0)" data-slide="0">Slide one</a></li>
  <li><a href="javascript:void(0)" data-slide="1">Slide two</a></li>
  <li><a href="javascript:void(0)" data-slide="2">Slide three</a></li>
</ul>

<section class="slider">
  <div class="slider__slide">
    <p>Slide one</p>
  </div>
  <div class="slider__slide">
    <p>Slide two</p>
  </div>
  <div class="slider__slide">
    <p>Slide three</p>
  </div>
</section>


{% endhighlight %}

## Javascript

Then use the slickGoTo method to hook it all up.

{% highlight js %}

$(function(){
  var $slider = $('.slider'),
      $trigger = $('.slider-nav li');

  $slider.slick({
    arrows: 'false' // optional
  });

  $trigger.click(function(){
    var slide = $(this).attr('dataSlide');
    $slider.slick('slickGoTo', slide)
  })
});

{% endhighlight %}

<a href="http://codepen.io/anon/pen/yYBNoK">View on CodePen</a>

And that's it. You can do this with multiple elements too: just add the data-slide attribute to the link and the element to the $trigger variable.






