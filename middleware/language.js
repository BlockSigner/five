export default function (context) {
  // If request exists (safeguard for avoiding generate errors)
  if (context.req) {
    const currentPath = context.route.path
    // These paths will not be redirected
    const explicitPaths = ['/ch/en', '/ch/de']

    // If path is not part of an explicit path
    if (!explicitPaths.includes(currentPath)) {
      const lang = context.req.headers['accept-language'].substring(0, 2)
      // If browser language is set to German, redirect to german page
      if (lang === 'de') context.redirect(`/ch/de`)
      // Otherwise redirect to english page
      else context.redirect(`/ch/en`)
    }
  }
}
