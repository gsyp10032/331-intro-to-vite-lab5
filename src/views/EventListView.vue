<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { RouterLink } from 'vue-router'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    default: 4,
  },
})
const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)
const router = useRouter()

const handlePageSizeChange = (e: any) => {
  const target = e.target as HTMLSelectElement
  const newSize = parseInt(target.value)
  router.push({
    name: 'event-list-view',
    query: { page: 1, pageSize: newSize },
  })
}
const hasNexPage = computed(() => {
  const totalPages = Math.ceil(Number(totalEvents.value) / 3)
  return page.value < totalPages
})
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <div v-if="events" class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <RouterLink
          id="page-prev"
          :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
          rel="prev"
          v-if="page != 1"
          >< Prev Page</RouterLink
        >

        <RouterLink
          id="page-next"
          :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
          rel="next"
          v-if="hasNexPage"
          >Next Page ></RouterLink
        >
      </div>
    </div>
    <div v-else>Loading events...</div>
  </div>
</template>

<style scoped>

</style>
