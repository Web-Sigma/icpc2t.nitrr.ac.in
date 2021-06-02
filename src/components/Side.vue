<template>
  <div>
    <aside id="text-16" class="widget widget_text">
      <h2 class="widget-title">Announcement</h2>
      <div class="textwidget">
        <p style="text-align: justify">
          <marquee
            style="color: #f25405; font-family: helvetica"
            scrollamount="2"
            scrolldelay="3"
            direction="up"
            onmouseover="this.stop()"
            onmouseout="this.start()"
            >*Doctors attending the conference will be awarded the credit points
            accredited by Medical Council of Chhattisgarh.</marquee
          >
        </p>
      </div>
    </aside>
    <aside id="text-11" class="widget widget_text">
      <h2 class="widget-title">Important dates</h2>
    </aside>
    <aside id="text-14" class="widget widget_text">
      <h2 class="widget-title">Sponsor</h2>
      <div class="textwidget">
        <p><strong>TEQIP-III</strong>(NIT Raipur).</p>
        <p><strong>Publishing partner:</strong></p>
        <p>
          <a href="wp-content/uploads/2018/10/Springer-logo-logotype.png"
            ><img
              class="alignnone wp-image-359"
              src="ieee.gif"
              alt=""
              width="144"
              height="108"
          /></a>
        </p>
        <!-- <p><strong>Media partner:</strong></p>
<p><strong><a href="../external.html?link=http://innovatiocuris.com/" target="_blank" rel="noopener"><img class="alignnone wp-image-259" src="wp-content/uploads/2018/04/download-300x132.png" alt="" width="157" height="69" /></a></strong></p> -->
        <p>&nbsp;</p>
      </div>
    </aside>
    <aside id="text-12" class="widget widget_text">
      <h2 class="widget-title">Brochure</h2>
      <div class="textwidget">
        <p> Downloads<a
            href="wp-content/uploads/2018/11/ICBEST2018_Final-brochure_Nov-06-converted.pdf"
            >here</a
          >
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Side",
};
</script>
