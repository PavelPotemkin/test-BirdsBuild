export default function useThrottle (
  callback: (args?: unknown[]) => void,
  time = 500
) {
  let isThrottled = false

  return () => {
    if (isThrottled) {
      return
    }

    callback()
    isThrottled = true
    setTimeout(function () {
      isThrottled = false
    }, time)
  }
}
