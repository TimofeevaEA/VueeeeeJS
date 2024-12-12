<template>
  <div class="login-container">
    <h2>Вход</h2>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Введите email" />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" placeholder="Введите пароль" />
      </div>
      <button type="submit" class="button_login"><a href="/src/components/UsersPage/UsersTable.vue">Вход</a></button>
    
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
</script>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

input {
  padding: 10px;
  font-size: 14px;
}

.button_login {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.button_login:hover {
  background-color: #45a049;
}
</style>