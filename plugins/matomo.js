/*
 ** Follows Nuxt's official recommendation for adding analytics code: https://nuxtjs.org/faq/google-analytics/
 */

/* eslint-disable */

export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  if (process.env.NODE_ENV !== 'production') return
  // <!-- Matomo Tag Manager -->
  var _mtm = _mtm || []
  _mtm.push({ 'mtm.startTime': new Date().getTime(), event: 'mtm.Start' })
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0]
  g.type = 'text/javascript'
  g.async = true
  g.defer = true
  g.src = 'https://analytics.skribble.com/js/container_cMJBxLRK.js'
  s.parentNode.insertBefore(g, s)
  // <!-- End Matomo Tag Manager -->
}
