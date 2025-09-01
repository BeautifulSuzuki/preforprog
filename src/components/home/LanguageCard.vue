<template>
  <div
    class="language-card"
    :class="language.id"
    :data-language="language.id"
    :data-color="language.color"
    @mouseenter="startAnimation"
    @mouseleave="stopAnimation"
  >
    <canvas ref="canvas" class="particle-canvas"></canvas>
    <span class="language-icon">{{ language.icon }}</span>
    <h3>{{ language.name }}</h3>
    <h4>{{ language.subtitle }}</h4>
    <p>{{ language.description }}</p>
    <ul>
      <li v-for="(feature, index) in language.features" :key="index">
        {{ feature }}
      </li>
    </ul>
    <router-link :to="language.path" class="cta-button">
      学習を始める →
    </router-link>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'LanguageCard',
  props: {
    language: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const canvas = ref(null)
    let animationId = null
    let particles = []
    let ctx = null
    let isAnimating = false
    let mouseX = 0
    let mouseY = 0

    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2
      const velocity = Math.random() * 2 + 1

      return {
        x: x || Math.random() * canvas.value.width,
        y: y || Math.random() * canvas.value.height,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 3 + 1,
        life: 1,
        decay: Math.random() * 0.01 + 0.005,
        hue: Math.random() * 30 - 15,
        pulse: Math.random() * Math.PI * 2
      }
    }

    const updateParticles = () => {
      if (isAnimating && Math.random() < 0.5) {
        particles.push(createParticle(mouseX, mouseY))
      }

      if (isAnimating && Math.random() < 0.1 && particles.length < 80) {
        particles.push(createParticle())
      }

      particles = particles.filter(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > 5) {
          particle.vx += dx / distance * 0.05
          particle.vy += dy / distance * 0.05
        }

        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > 3) {
          particle.vx = (particle.vx / speed) * 3
          particle.vy = (particle.vy / speed) * 3
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= particle.decay
        particle.pulse += 0.05

        if (particle.x < 0 || particle.x > canvas.value.width) particle.vx *= -0.8
        if (particle.y < 0 || particle.y > canvas.value.height) particle.vy *= -0.8

        return particle.life > 0
      })
    }

    const drawParticles = () => {
      const [r, g, b] = props.language.color.split(',').map(n => parseInt(n.trim()))

      // パーティクル間の接続線を描画
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = (1 - distance / 100) * Math.min(p1.life, p2.life) * 0.3
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // パーティクルを描画
      particles.forEach(particle => {
        const opacity = particle.life
        const size = particle.size * (1 + Math.sin(particle.pulse) * 0.2)

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 3
        )

        gradient.addColorStop(0, `rgba(${r + 50}, ${g + 50}, ${b + 50}, ${opacity})`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

      updateParticles()
      drawParticles()

      if (isAnimating || particles.length > 0) {
        animationId = requestAnimationFrame(animate)
      }
    }

    const startAnimation = (e) => {
      isAnimating = true
      const rect = canvas.value.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      animate()
    }

    const stopAnimation = () => {
      isAnimating = false
    }

    const handleMouseMove = (e) => {
      if (canvas.value) {
        const rect = canvas.value.getBoundingClientRect()
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
      }
    }

    const resizeCanvas = () => {
      if (canvas.value) {
        const parent = canvas.value.parentElement
        canvas.value.width = parent.offsetWidth
        canvas.value.height = parent.offsetHeight
      }
    }

    onMounted(() => {
      ctx = canvas.value.getContext('2d')
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
      canvas.value.parentElement.addEventListener('mousemove', handleMouseMove)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    })

    return {
      canvas,
      startAnimation,
      stopAnimation
    }
  }
}
</script>

<style lang="scss" scoped>
.language-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px 0 rgba(31, 38, 135, 0.5);
  }

  h3 {
    color: #2980b9;
    margin-bottom: 10px;
    font-size: 1.8em;
  }

  h4 {
    color: #7f8c8d;
    font-weight: normal;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    padding: 5px 0;
    padding-left: 20px;
    position: relative;
    transition: transform 0.3s ease;

    &:before {
      content: "▸";
      position: absolute;
      left: 0;
      color: #3498db;
      transition: transform 0.3s ease;
    }
  }

  &:hover li {
    transform: translateX(5px);

    &:before {
      transform: translateX(5px);
    }
  }

  .cta-button {
    display: inline-block;
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    text-decoration: none;
    margin-top: 15px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255,255,255,0.3) 0%, transparent 100%);
      transition: left 0.5s ease;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  }

  .particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .language-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 3em;
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  &:hover .language-icon {
    opacity: 0.2;
    transform: rotate(15deg) scale(1.1);
  }
}
</style>
