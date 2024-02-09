<template>
  <div  class="app-container">
    <h1> To-Do</h1>
    <h5> HERE'S THE  MENU</h5>
    <AddTask @add="addTask" />
    <TaskList :tasks="tasks" @completeTask="completeTask" />
    <div class="footer">
      Created by <span class="creator">Rajveer Singh</span>
    </div>  
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';

const date = new Date();
export default {
  
  components: {
    AddTask,
    TaskList
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks.push({
        id: Date.now(),
        title: newTask.title,
        completed: false,
        created_at: date.getDate().toLocaleString() + '/' + date.getMonth().toLocaleString() + '/' + date.getFullYear().toLocaleString()
      });
      this.saveTasks();
    },
    completeTask(task) {
      task.completed = true;
      this.saveTasks();
    },
    saveTasks() {
      fetch('http://localhost:3030/tasks', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tasks: this.tasks })
      })
        .then(() => {
          console.log('Tasks saved successfully.');
        })
        .catch(error => {
          console.error('Error saving tasks:', error);
        });
    },
    fetchTasks() {
      fetch('http://localhost:3030/tasks', {
        method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
 
}
      )
        .then(response => response.json())
        .then(data => {
          this.tasks = data.tasks || [];
        })
        .catch(error => {
          console.error('Error fetching tasks:', error);
        });
    }
  },
  mounted() {
    this.fetchTasks(); // Fetch tasks when the app starts
  }
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
  background: url('https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover fixed;
}
h1 {
  font-family : arial Black, sans-serif;
  margin-bottom: 0px;
}
h5{
  font-size: 12px; 
  font-family: verdana, sans serif;
  font-weight: 200;
  margin-top: 0px;
  margin-bottom: 30px;
}
.app-container {
  font-family: sans-serif;
  display: flex;
  margin: 60px 620px 0px 620px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background: rgba(96, 114, 116, 0.1);
  border: 2px solid #000;
}
.footer {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
  color: #555;
}

.creator {
  font-weight: bold;
  color: #333;
}

</style>
