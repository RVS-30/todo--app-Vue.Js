<template>
  <div>
    <h3>OPEN TASKS :</h3>
    <ul>
       <li v-for="task in openTasks" :key="task.id">
         {{task.title}} <br>Date- {{ task.created_at}}
         <br>
         <button @click="completeTask(task)">Done</button>
       </li>
    </ul>

    <h3>COMPLETED TASKS :</h3>
    <ul>
       <li v-for="task in completedTasks" :key="task.id" id="com">
         {{task.title}} 
       </li>
    </ul>
  </div>
</template>

<script>
 export default {
    props: {
        tasks: Array
    },
    methods: {
      completeTask(task) {
        this.$emit('completeTask', task);
      }
    },
    computed: {
      openTasks() {
        return this.tasks.filter(task => !task.completed);
      },
      completedTasks() {
        return this.tasks.filter(task => task.completed);
      }
    }
 };
</script>

<style scoped>
 h3 {
  font-family: verdana,sans-serif;
  font-weight: 500;
  fonr-size: 10px;
  margin-bottom: 4px;
  
 }
 ul {
    margin-top: 3px;
    list-style-type: none;
    font-family: sans-serif;
  
    padding: 0;
 }

 li {
    margin-bottom: 3px;
    font-family: sans-serif;
    font-weight: bold;
    background-color: #FDBF60;
   }
      #com{
    background-color: #A4BE7B;
   }
  

</style>
