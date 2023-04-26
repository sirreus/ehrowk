<template>
  <section id="contacts">
    <article>
      <div></div>
      <h2>/** contact me */</h2>
      <img
        id="contacts-photo"
        src="../assets/contact-photo.jpg"
        alt="contact-photo"
      />
      <div id="contacts-text">
        If you have any questions or would like to discuss a potential project,
        please don't hesitate to reach out to me via:
        <br />
        <ul>
          <li class="contacts-item">
            <img class="contacts-img" alt="tg" src="../assets/tg2.png" />
            telegram:
            <div class="copy-btn" @click="copy(tg)">{{ tg }}</div>
            <span
              :class="
                isVisible ? 'copy-notification visible' : 'copy-notification'
              "
              >copied!</span
            >
          </li>
          <li class="contacts-item">
            <img class="contacts-img" alt="gm" src="../assets/gm.png" />
            email:
            <div class="copy-btn" @click="copy(gm)">{{ gm }}</div>
            <span
              :class="
                isVisible ? 'copy-notification visible' : 'copy-notification'
              "
              >copied!</span
            >
          </li>
        </ul>
        <br />
        <div id="bye-bye">
          Looking forward to meeting with you!
          <br />
          <br />
          Thanks for stopping by! 🎉
        </div>
      </div>
    </article>
    <ScrollButton id="next" @click="scrollTo" order="last" />
  </section>
</template>

<script>
import ScrollButton from "./ScrollButton.vue";

export default {
  name: "ExperienceSection",
  components: {
    ScrollButton,
  },
  data() {
    return {
      nextSection: "personality",
      tg: "@ehrowk",
      gm: "inu.grey@gmail.com",
      isVisible: false,
    };
  },
  methods: {
    scrollTo() {
      let element = document.getElementById(this.nextSection);
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    copy(value) {
      window.navigator.clipboard.writeText(value);
      this.isVisible = !this.isVisible;
      setTimeout(() => {
        this.isVisible = !this.isVisible;
      }, 3000);
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
  grid-template-columns: 210px auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
ul {
  margin: 0;
  padding-inline-start: 16px;
}
#contacts-photo {
  width: 210px;
  opacity: 0.85;
}
#contacts {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100vh;
}
#contacts-text {
  width: 480px;
  margin-left: 16px;
  text-align: justify;
}
.contacts-item {
  display: flex;
  align-items: center;
}
.contacts-img {
  width: 28px;
  height: 28px;
}
.copy-btn {
  margin-left: 8px;
  cursor: pointer;
}
.copy-notification {
  display: none;
  margin-left: 32px;
  color: rgb(113, 172, 113);
}
.copy-notification.visible {
  display: inline;
}

@media only screen and (max-width: 768px) {
  #contacts {
    flex-direction: column;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #contacts-photo {
    width: 180px;
  }
  #contacts-text {
    margin-left: 0;
  }
  ul {
    margin-top: 16px;
    padding: 0;
  }
  #bye-bye {
    margin-top: 32px;
    text-align: center;
  }
}

@media only screen and (max-width: 540px) {
  #contacts-text {
    width: 90vw;
  }
}
</style>
