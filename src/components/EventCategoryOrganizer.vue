<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-category-organizer">
    <div class="category">Category: {{ event.category }}</div>
    <div class="organizer">Organizer: {{ event.organizer }}</div>
  </div>
</template>

<style scoped>
.event-category-organizer {
  text-align: right;
  margin-bottom: 10px;
}

.category,
.organizer {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>