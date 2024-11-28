<template>
  <div class="users-table">
    <div class="users-table__row">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Аватар</div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.name }}</div>
      <div class="users-table__cell">{{ user.email }}</div>
      <div class="users-table__cell">{{ user.created }}</div>
      <div class="users-table__cell">
        <img :src="user.avatar" alt="Аватар" class="user-avatar" />
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
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
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
</script>
  
  <style scoped>
  .users-table {
    display: flex;
    flex-direction: column;
  }
  
  .users-table__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  
  .users-table__cell {
    min-width: 120px;
    background-color: #d8d3d3;
    border: 3px solid rgb(41, 31, 39);
    text-align: center;
    padding: 80px;
  }
  .user-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
  </style>