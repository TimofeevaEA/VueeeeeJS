<template>
  <button class="button_add"  @click="showModal = true">Добавить пользователя</button>
  <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Добавить пользователя</h3>
        <form @submit.prevent="addUser">
          <div>
            <label for="name">Имя:</label>
            <input type="text" id="name" v-model="newUser.name" required />
          </div>
          <div>
            <label for="email">Почта:</label>
            <input type="email" id="email" v-model="newUser.email" required />
          </div>
          <div>
            <label for="avatar">Аватар (URL):</label>
            <input type="url" id="avatar" v-model="newUser.avatar" />
          </div>
          <button type="submit" class="button_save">Сохранить</button>
          <button type="button" class="button_cancel" @click="showModal = false">Отмена</button>
        </form>
      </div>
    </div>
  <div class="users-table">
    <div class="users-table__row">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Аватар</div>
      <div class="users-table__cell"></div>
      <div class="users-table__cell"></div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.name }}</div>
      <div class="users-table__cell">{{ user.email }}</div>
      <div class="users-table__cell">{{ user.created }}</div>
      <div class="users-table__cell">
        <img :src="user.avatar" alt="Аватар" class="user-avatar" />
      </div>
      <div class="users-table__cell">
        <button class="button_delete">удалить</button>
      </div>
      <div class="users-table__cell">
        <button class="button_edit">редактировать</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type UserType = {
  id: number
  name: string
  email: string
  created: string | Date
  avatar: string
}

const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`
})

const users = ref<UserType[]>([
  {
    id: 0,
    name: 'Ann',
    email: 'alex@alex.alex',
    created: createdMockDate.value,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7X3UeIJ4hf3RVDDjLzfwuXuvW0n-ZjsSFg&s'
  },
  {
    id: 1,
    name: 'Alex',
    email: 'ann@ann.ann',
    created: createdMockDate.value,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBlmgTNf0MMCV705z4_e4bXC9DMp4l4JYoA&s'
  },
  {
    id: 2,
    name: 'Art',
    email: 'art@art.art',
    created: createdMockDate.value,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qFjphJ-i7TLsMm7ZBOwAvnAec_KpPv3Sgg&s'
  },
  {
    id: 3,
    name: 'you',
    email: 'you@you.you',
    created: createdMockDate.value,
    avatar: 'https://cool.klev.club/uploads/posts/2024-05/cool-klev-club-gsch-p-prikolnie-kartinki-milie-kotiki-na-avu-2.jpg'
  },
  {
    id: 4,
    name: 'artemka',
    email: 'artyomkaprivprivetik',
    created: createdMockDate.value,
    avatar: 'https://vet-centre.by/wp-content/uploads/2016/11/kot-eti-udivitelnye-kotiki.jpg'
  }
])
const showModal = ref(false)

const newUser = ref<UserType>({
  id: 0,
  name: '',
  email: '',
  avatar: ''
})

const addUser = () => {
  const nextId = users.value.length > 0 ? users.value[users.value.length - 1].id + 1 : 1
  users.value.push({ ...newUser.value, id: nextId })
  newUser.value = { id: 0, name: '', email: '', avatar: '' }
  showModal.value = false
}
</script>

<style scoped>
.users-table {
  display: flex;
  flex-direction: column;
}

.users-table__row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.button_edit {
  background-color: rgb(42, 75, 165);
  color: #d8d3d3;
  padding: 12px 20px;
  width: 150px;
  border: none;
  border-radius: 5px;
}

.button_edit:hover {
  background-color: rgb(6, 7, 95);
}

.button_delete {
  background-color: brown;
  color: #d8d3d3;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;

}

.button_delete:hover {
  background-color: rgb(95, 6, 6);
}

.button_add {
  background-color: rgb(112, 165, 42);
  color: #d8d3d3;
  padding: 12px 20px;
  width: 150px;
  border: none;
  border-radius: 5px;
}

.button_add:hover {
  background-color: rgb(34, 95, 6);
}

.users-table__cell {
  min-width: 80px;
  background-color: #e8eef1;
  border: 1px solid rgb(41, 31, 39);
  text-align: center;
  padding: 10px;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal-content h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
}

form div {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

form input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button_save {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.button_save:hover {
  background-color: #45a049;
}

.button_cancel {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.button_cancel:hover {
  background-color: #e53935;
}
</style>