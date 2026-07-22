import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router does not reset scroll position between route changes by
// default. Without this, navigating from the template gallery into a demo
// page (or back) would preserve whatever scroll offset the previous page
// was at, which feels broken on a marketing site.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
