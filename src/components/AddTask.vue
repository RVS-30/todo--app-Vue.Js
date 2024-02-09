<template>
  <div>
    <form @submit.prevent="addTask">
      
      <input type="text" id="title" placeholder="Add Task" v-model="newTask.title" required />
      <button  type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: {
                title: ''
            }
        };
    },
    methods: {
        addTask(){
            this.$emit('add', this.newTask);
            this.newTask.title = '';
        }
    }
};
</script>

<style scoped>

h3 {
    font-family: sans-serif;
    margin-bottom: 6px;
    text-align: center;
  
}
form {
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
      
}
input {
    border-radius: 5px;
    width: 200px;
    height: 20px;
   
}
button{
    height: 25px;
    font-weight: 600;
    border-radius: 5px;
    
    background-color: #7071E8;
}
label {
    margin-bottom: 10px;
}
</style>


