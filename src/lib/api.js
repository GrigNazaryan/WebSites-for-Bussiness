// Central place that talks to the backend.
// In dev it defaults to localhost:4000, in production set VITE_API_URL
// (in your hosting provider's env vars) to your Render backend URL,
// e.g. https://yerevan-web-studio-api.onrender.com
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000'

/**
 * Sends a form submission to the backend.
 * @param {string} formType - one of: agency_contact, restaurant_reservation,
 *   barbershop_booking, carservice_request, realestate_lead
 * @param {object} data - the form fields
 */
export async function submitForm(formType, data) {
  let res
  try {
    res = await fetch(`${API_BASE}/api/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_type: formType, ...data }),
    })
  } catch (networkError) {
    throw new Error('Не удалось связаться с сервером. Проверьте интернет-соединение и попробуйте снова.')
  }

  let body = {}
  try {
    body = await res.json()
  } catch {
    // no JSON body — fine, we'll fall back to status text below
  }

  if (!res.ok) {
    throw new Error(body.error || 'Не удалось отправить форму. Попробуйте ещё раз.')
  }

  return body
}
