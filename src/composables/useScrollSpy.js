import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sections) {
  const activeSection = ref('')
  let ticking = false

  const updateActiveSection = () => {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        const sectionTop = element.offsetTop
        const sectionHeight = element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          activeSection.value = section.id
        }
      }
    })
  }

  const scrollHandler = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', scrollHandler)
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler)
  })

  return {
    activeSection
  }
}
