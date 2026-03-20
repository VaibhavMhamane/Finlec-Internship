const INBOX_EMAIL = 'autosensy@gmail.com'
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${INBOX_EMAIL}`
const EMAIL_TEMPLATE = 'table'

function formatFieldValue(value) {
  if (typeof value !== 'string') {
    return value ?? '-'
  }

  const trimmed = value.trim()
  return trimmed || '-'
}

export function createMailtoHref(subject, lines) {
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(lines.join('\n'))

  return `mailto:${INBOX_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`
}

export async function submitFormToInbox({ formName, subject, fields }) {
  const payload = {
    _subject: subject,
    _captcha: 'false',
    _template: EMAIL_TEMPLATE,
    form_name: formName,
    submitted_at: new Date().toISOString(),
  }

  Object.entries(fields).forEach(([key, value]) => {
    payload[key] = formatFieldValue(value)
  })

  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => null)
  const submissionSucceeded = data?.success === true || data?.success === 'true'

  if (!response.ok || !submissionSucceeded) {
    throw new Error(data?.message || 'We could not send your request right now.')
  }

  return data
}
