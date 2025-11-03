<script setup lang="ts">
defineProps<{
  student: {
    name: string
    surname: string
    gpa: number
  }
}>()
</script>

<template>
  <div class="student-card">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

h3 {
  margin-top: 0;
  font-size: 20px;
}

p {
  font-size: 14px;
}
</style>