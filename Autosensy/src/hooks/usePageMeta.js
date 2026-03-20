import { useEffect } from 'react'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

export default function usePageMeta({ title, description, pathname }) {
  useEffect(() => {
    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: `${window.location.origin}${pathname}`,
    })

    upsertCanonical(`${window.location.origin}${pathname}`)
  }, [description, pathname, title])
}
