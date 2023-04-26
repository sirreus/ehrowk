<template>
  <section id="personality">
    <article>
      <h2>/** personality */</h2>
      <div id="plug"></div>
      <div id="personality-text">
        Outside of work, I enjoy drawing sketches and going to art events and
        museums. From time to time going to the gym to hold myself in shape and
        in a good mood. In the wintertime, I love going to the hill and riding
        through fluffy white snow on my snowboard.I am inquisitive and in my
        travels, I always try to feel the local flavor, how people live and what
        they do, habits, and peculiarities.
        <br />
        <br />
        But sometimes I need to go into the wilderness to enjoy nature and stay
        away from the bustle and noise of the city, walking with dogs through
        the forests and enjoying the view of the sea stretching into the horizon
        from the edge of a cliff. That is why I fell in love with the northern
        countries and the Baltic countries so much. A combination of comfort for
        life and socialization in the conditions of digitalized states and the
        desire for nature, personal space, and solitude. In general -
        <strong>Lagom!</strong>
        <br />
        <br />
        I believe that maintaining a good work-life balance is key to achieving
        success in all areas of life.
      </div>
      <img id="pers-photo" src="../assets/pers-photo1.jpg" alt="person-photo" />
    </article>
    <ScrollButton id="next" @click="scrollTo" isRotatable="true" />
  </section>
</template>

<script>
import ScrollButton from "./ScrollButton.vue";

export default {
  name: "PersonalitySection",
  components: {
    ScrollButton,
  },
  data() {
    return {
      nextSection: "contacts",
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      if (this.nextSection === "contacts") {
        this.nextSection = "experience";
      } else {
        this.nextSection = "contacts";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 22px;
}
article {
  display: grid;
  grid-template-columns: auto 210px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
#pers-photo {
  width: 210px;
  opacity: 0.85;
}
#personality {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}
#personality-text {
  width: 480px;
  margin-right: 16px;
  text-align: justify;
}

@media only screen and (max-width: 768px) {
  #personality {
    flex-direction: column;
    height: fit-content;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #plug {
    order: 1;
  }
  h2 {
    order: 2;
  }
  #pers-photo {
    width: 180px;
    order: 3;
  }
  #personality-text {
    margin-right: 0;
    order: 4;
  }
  #next {
    position: initial;
    margin: 88px 0 32px;
  }
}

@media only screen and (max-width: 540px) {
  #personality-text {
    width: 90vw;
  }
}
@media only screen and (max-width: 390px) {
  #personality {
    justify-content: space-between;
  }
  h2 {
    margin-bottom: 0;
  }
}
</style>
