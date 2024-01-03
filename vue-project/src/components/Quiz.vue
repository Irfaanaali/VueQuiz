<script setup>
 import quizData from '../assets/quizes.json'
 import Card from '../components/Card.vue'
 
</script>




<template>
     <div class="flex justify-center gap-12 mt-12 w-[1400px] mx-auto mt-5 p-4 mb-[485px]">
        <Card v-for="quiz in quizData" :key="quiz.id" :quiz="quiz">   
    </Card>
     </div>
   
</template>