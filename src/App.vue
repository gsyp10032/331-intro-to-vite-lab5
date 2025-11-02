<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div id="layout">
    <div class="text-center font-sans text-gray-700 antialias">
      <header>
        <div id="flashMessage" class="animate-fade" v-if="message">
          <h4>{{ message }}</h4>
        </div>
        <div class="wrapper">
                  <nav class="py-6">
                    <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view'}">Event</RouterLink> |
                    <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student-list-view'}">Students</RouterLink> |
                    <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about'}">About</RouterLink>
                  </nav>          <div class="per-page-nav">
            <span>Display</span>
            <RouterLink :to="{ name: 'event-list-view', query: { perPage: 2 } }">2</RouterLink> |
            <RouterLink :to="{ name: 'event-list-view', query: { perPage: 3 } }">3</RouterLink> |
            <RouterLink :to="{ name: 'event-list-view', query: { perPage: 4 } }">4</RouterLink>
            <span>per page</span>
          </div>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style>





</style>
