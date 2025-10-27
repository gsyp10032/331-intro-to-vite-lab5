<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import type { Student } from '@/types'
import { ref, onMounted } from 'vue'

const students = ref<Student[] | null>(null)

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching student data!', error)
    })
})
</script>

<template>
  <h1>Student List</h1>
  <div class="students">
    <StudentCard v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
