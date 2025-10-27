<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details p {
  margin: 0;
  text-align: right;
}
</style>