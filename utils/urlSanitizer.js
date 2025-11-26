// Service function used in /models/trip.js for validation

export const sanitizeAndNormalizeUrl = (input, image = false) => {
  if (!input) return null

  let url = String(input).trim()

  // If no protocol, assume https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    url = 'https://' + url
  }

  let u
  try {
    u = new URL(url)
  } catch {
    return null // invalid URL
  }

  // Normalize host casing
  u.host = u.host.toLowerCase()

  // Remove tracking parameters
  const trackingParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'fbclid',
    'gclid',
  ]

  trackingParams.forEach((param) => u.searchParams.delete(param))

  // Remove trailing slashes from pathname
  u.pathname = u.pathname.replace(/\/+$/, '')

  // If image check is requested
  if (image) {
    const imageExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.webp',
      '.bmp',
      '.tiff',
      '.svg',
    ]
    const pathLower = u.pathname.toLowerCase()
    const isImage = imageExtensions.some((ext) => pathLower.endsWith(ext))

    if (!isImage) return null
  }

  return u.toString()
}
