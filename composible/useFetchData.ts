import { ref } from '#imports'

export default function useFetchData (callback: () => Promise<void>) {
  const isLoading = ref(false)
  const isError = ref(false)
  const isSuccess = ref(false)
  const errorText = ref('')

  const fetch = async () => {
    try {
      isLoading.value = true
      await callback()
      isError.value = false
      isSuccess.value = true
      errorText.value = ''
    } catch (error) {
      isError.value = true
      isSuccess.value = false
      if (error instanceof Error) {
        errorText.value = error.message
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    isError,
    isSuccess,
    errorText,
    fetch
  }
}
