<script setup>
import { useRoute } from 'vue-router';
import quizData from '../assets/quizes.json'
const route = useRoute();

const quiz = quizData.find(quiz => quiz.id === parseInt(route.params.id))
 
</script>

<template>
   <div class=" w-[1400px] mx-auto mt-3 p-4 mb-64">
     <img :src="quiz.img" class="m-5 mx-auto">
    {{ quiz.details }}
   </div>
</template>