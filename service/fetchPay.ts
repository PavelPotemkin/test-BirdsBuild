interface ApiResponse {
  id: number,
  ok: boolean
}

export const fetchPay = async (id: number): Promise<ApiResponse> => {
  // const response = await fetch(apiUrls.pay, {
  //   method: 'post',
  //   body: JSON.stringify({ id })
  // })

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        ok: true
      })
    }, 200)
  })
}
