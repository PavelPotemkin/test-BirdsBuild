export default function useDebounce (
  callback: (args?: unknown[]) => void,
  time = 500
) {
  let timer: NodeJS.Timeout

  return (...args: unknown[]) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback(args)
    }, time)
  }
}
