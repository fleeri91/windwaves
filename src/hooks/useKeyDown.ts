import { useEffect } from 'react'

interface UseKeyDownProps {
  key: string
  callback: () => void
}

const useKeyDown = ({ key, callback }: UseKeyDownProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [key, callback])
}

export default useKeyDown
