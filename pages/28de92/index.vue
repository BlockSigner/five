<template>
  <main>
    <div class="zeugs">
      <coming-soon />
      <small
        >Wir arbeiten gemeinsam mit Swisscom Trust Services an einer Lösung für
        die QES-Identifikation. Die Plattform für Video-Identifikation,
        videoident.me, wird in den nächsten Tagen zur Verfügung stehen. Sobald
        der Service genutzt werden kann, informieren wir über
        <a
          href="https://share.hsforms.com/1OCy9Xqw6Sza1rbvGUaKnqQ309ws"
          target="_blank"
          >unseren Newsletter</a
        >. <br /><br />Bestehende Skribble-Nutzer werden wir zusätzlich per
        E-Mail informieren.</small
      >
    </div>
  </main>
</template>

<script>
import ComingSoon from '~/components/ComingSoon.vue'

export default {
  components: {
    ComingSoon,
  },
}
</script>

<style scoped>
body {
  font: bold 20px/1 Arial;
  color: #60718e;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
img {
  width: 414px;
  max-width: 90%;
}
.zeugs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px 20px;
}
ul {
  list-style-type: none;
}
small {
  max-width: 420px;
  margin-top: 12px;
  text-align: center;
  font: 12px/1.2 Arial;
}
small a {
  display: inline;
  text-decoration: underline;
  color: #60718e;
}
</style>
