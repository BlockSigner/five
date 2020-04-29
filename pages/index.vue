<template>
  <main>
    <div class="zeugs">
      <back-soon />
      <small>Elektronische Signaturen und digitales Vertrauen sind brandaktuelle Themen. Wegen Unterhaltsarbeiten bei Swisscom ist der VideoIdent Service temporär offline. Bitte probieren Sie es später nochmals.</small>
    </div>
    <!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
	portalId: "5051692",
	formId: "cb565705-2dda-41e1-b87a-1ccc50926592"
});
</script>
  </main>
</template>

<script>
import BackSoon from '~/components/BackSoon.vue'

export default {
  components: {
    BackSoon,
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
