import { apiUrls } from '~/api/urls'

interface ApiResponse {
  id: number,
  ok: boolean
}

export const fetchPay = async (id: number): Promise<ApiResponse> => {
  const response = await fetch(apiUrls.pay, {
    method: 'post',
    body: JSON.stringify({ id })
  })

  return await response.json()
}
