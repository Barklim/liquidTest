import { useMemo } from 'react'

function useWebpSupport() {
  return useMemo(() => {
    const elem =
      typeof document === 'object' ? document.createElement('canvas') : {}
    if (elem.toDataURL) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
    return true
  })
}
export default useWebpSupport
