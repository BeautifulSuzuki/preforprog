<template>
  <nav class="top-navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <router-link to="/" class="nav-link home">
          プログラミング学習ガイド
        </router-link>
      </div>
      <ul class="nav-links">
        <li v-for="lang in languages" :key="lang.id">
          <router-link
            :to="lang.path"
            class="nav-link"
            :class="[lang.id, { active: isActive(lang.path) }]"
          >
            {{ lang.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar',
  data() {
    return {
      languages: [
        { id: 'matlab', name: 'MATLAB', path: '/matlab' },
        { id: 'python', name: 'Python', path: '/python' },
        { id: 'c', name: 'C', path: '/c' },
        { id: 'cpp', name: 'C++', path: '/cpp' },
        { id: 'js', name: 'JavaScript', path: '/javascript' }
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path.startsWith(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }

  .nav-brand {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;

    .nav-link {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
  }

  .nav-link {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-weight: 500;

    &.home {
      background-color: transparent;
      color: #333;

      &:hover {
        background-color: #2288ff;
        color: white;
      }
    }

    &.matlab:hover,
    &.matlab.active {
      background-color: var(--matlab-color);
      color: white;
    }

    &.python:hover,
    &.python.active {
      background-color: var(--python-color);
      color: white;
    }

    &.c:hover,
    &.c.active {
      background-color: var(--c-color);
      color: white;
    }

    &.cpp:hover,
    &.cpp.active {
      background-color: var(--cpp-color);
      color: white;
    }

    &.js:hover,
    &.js.active {
      background-color: #323330;
      color: var(--js-color);
    }
  }
}
</style>
