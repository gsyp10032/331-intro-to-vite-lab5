<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'
import StudentCard from '@/components/StudentCard.vue'

interface Student {
  name: string
  surname: string
  gpa: number
}

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch(() => {
      // // 使用模拟数据
      // students.value = mockStudents
      console.log('获取学生数据失败')
    })
})
</script>

<template>
  <h1>Student Information</h1>
  <div class="students">
    <div v-if="students">
      <StudentCard v-for="(student, index) in students" :key="index" :student="student" />
    </div>
    <div v-else>Loading students...</div>
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
