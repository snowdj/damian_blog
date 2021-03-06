<p>I have implemented reveal.js slides for vIPer (I will publish a
post about that the next days...).</p>
<p>Then, I showed the resulting slides <a class="reference external" href="http://www.slideviper.oquanta.info/reveal/Example_new_slides.html">http://www.slideviper.oquanta.info/reveal/Example_new_slides.html</a>
to some IPython team members and one of them, Brian, says:</p>
<blockquote>
&quot;it would be great if nbcovert could output reveal.js slides.&quot;</blockquote>
<p>and then, Fernando (if you know what is IPython, you know these guys) replies:</p>
<blockquote>
&quot;we can certainly add that kind of functionality as output options...&quot;</blockquote>
<p>So, keeping in mind the implementation in vIPer, I provided a dirty and basic
new implementation to get reveal-based slides from nbconvert.</p>
<!-- TEASER_END -->
<p>To test it just go to:</p>
<blockquote>
<a class="reference external" href="https://github.com/damianavila/nbconvert.git">https://github.com/damianavila/nbconvert.git</a></blockquote>
<p>switch to branch slider_converter,</p>
<p>and type:</p>
<blockquote>
python nbconvert.py -f slider example_slide.ipynb</blockquote>
<p>You can see a video showing the basic functionality here
(big sorry for the quality, I will post a better one soon):</p>
<iframe width="420" height="315" src="http://www.youtube.com/embed/mNEAJvFDneE" frameborder="0" allowfullscreen></iframe><p>There is a lot of stuff to do with that... I will do it when I get some free time.</p>
<p>Just my two cents!</p>
<p>Enjoy!</p>
<p>Damián.</p>
