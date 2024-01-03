
<script setup>
import { defineProps } from 'vue';


const {quiz}= defineProps(['quiz'])

</script>

<template>
    <Router-link :to="`/quiz/${quiz.id}`"> <div class="bg-gray-400 w-72 text-white">  
        <img :src="quiz.img">
        <h1 class="text-center">{{quiz.name}}</h1>
        <h1 class="text-center">{{quiz.questions}}</h1>
      
   </div>
</Router-link> 
</template>