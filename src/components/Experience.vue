<template>
  <article>
    <div></div>
    <h2>/** experience */</h2>
    <img id="exp-photo" src="../assets/exp-photo.jpg" alt="exp-photo" />
    <div id="experience-text">
      I have above 10 years of experience in IT since 2014. I started as work in
      IT as QA Engineer and after 6 years I became a Frontend Developer.
      <br />
      <br />
      Given the different roles in my career, I learned how to pay attention to
      details when checking delivered product features, applying various types
      of automation testing, make a choose the best suitable framework, and
      setting up a CI/CD environment for this. I'm passionate about
      great-designed mockups and love bringing new life with pretty UI beautiful
      smooth scrolling pages and animation to old-fashion websites. I believe
      that great design and functionality should always go hand in hand, and I
      strive to create websites that look great and provide an exceptional user
      experience. Having worked in the world of startups, I learned how to
      quickly develop MVP serverless projects in order to deliver the product to
      users as soon as possible to check the market demand.

      <div>
        <h4>My stack:</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3 / SCSS / MUI / Styled-components / Storybook</li>
          <li>JavaScript / TypeScript</li>
          <li>ReactJS / NextJS / VueJS</li>
          <li>Context API / Redux (with Saga)</li>
          <li>Jest / Testing library / Puppeteer (Playwright) / Cypress</li>
          <li>Firebase / GCP</li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ExperienceContent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  display: grid;
  grid-template-columns: 210px auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
h2 {
  font-size: 22px;
}
#exp-photo {
  width: 210px;
  opacity: 0.85;
}
#experience-text {
  width: 480px;
  margin-left: 16px;
  text-align: justify;
}
ul {
  margin: 0;
}

@media only screen and (max-width: 768px) {
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #exp-photo {
    width: 180px;
  }
  #experience-text {
    margin-left: 0;
  }
}

@media only screen and (max-width: 540px) {
  #experience-text {
    width: 90vw;
  }
}

@media only screen and (max-width: 390px) {
  h2 {
    margin-bottom: 0;
  }
}
</style>
