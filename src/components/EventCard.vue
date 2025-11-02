<script setup lang="ts">
import type { Event } from '@/types'
import EventDetails from './EventDetails.vue'
import { RouterLink } from 'vue-router'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <EventDetails :event="event" />
    </div>
  </RouterLink>
</template>

<style scoped>


</style>
