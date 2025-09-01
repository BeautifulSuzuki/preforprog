<template>
  <div class="header-section">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header-section {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 700;
    border: none;
    padding: 0;
    color: var(--primary-color);
  }

  .subtitle {
    font-size: 1.3rem;
    color: #666;
    margin-bottom: 30px;
  }

  .description {
    max-width: 800px;
    margin: 0 auto;
    color: #555;
    line-height: 1.8;
  }
}
</style>
