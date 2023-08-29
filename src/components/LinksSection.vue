<template>
  <section id="links">
    <a href="https://www.linkedin.com/in/sirrius7/" target="_blank">
      <img alt="ln" src="../assets/ln.png" />
    </a>
    <a href="https://github.com/sirreus" target="_blank">
      <img alt="gh" src="../assets/gh.png" />
    </a>
    <a href="https://t.me/ehrowk" target="_blank">
      <img alt="tg" src="../assets/tg2.png" />
    </a>
    <a href="mailto:inu.grey@gmail.com" target="_blank">
      <img alt="gm" src="../assets/gm.png" />
    </a>
    <a
      href="https://www.upwork.com/freelancers/~0141e2d6d3b4a6d5f0"
      target="_blank"
    >
      <img
        alt="upw"
        src="../assets/upw.png"
        style="height: 28px; width: 28px"
      />
    </a>
  </section>
</template>

<script>
export default {
  name: "LinksSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#links {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 16px 0;
}
a {
  display: flex;
  align-items: center;
}
img {
  width: 32px;
  height: 32px;
}
</style>
