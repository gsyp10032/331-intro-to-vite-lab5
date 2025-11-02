<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { RouterLink } from 'vue-router'
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})
const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / props.perPage)
  return props.page < totalPages
})
const page = computed(() => props.page)
onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(props.perPage, props.page)
      .then((response) => {
        events.value = response.data
        totalEvents.value = Number(response.headers['x-total-count'])
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination flex w-[290px]">
      <RouterLink
        id="page-prev"
        class="flex-1 no-underline text-[#2c3e50] text-left"
        :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        class="flex-1 no-underline text-[#2c3e50] text-right"
        :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNexPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>
