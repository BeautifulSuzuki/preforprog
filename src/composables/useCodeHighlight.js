import { nextTick, onMounted } from 'vue'
import Prism from 'prismjs'

export function useCodeHighlight() {
  const highlightCode = async () => {
    await nextTick()
    Prism.highlightAll()
  }

  onMounted(() => {
    highlightCode()
  })

  return {
    highlightCode
  }
}
