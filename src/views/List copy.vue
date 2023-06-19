<template>
<v-container>
  <v-row>
    <v-col cols="12">
      <h1>事項</h1>
    </v-col>
    <v-col cols="12">
      <v-text-field 
      v-model="newItem" 
      label="新增事項" 
      append-icon="mdi-plus"
      @keydown.enter="onInputSubmit"
      @click:append="onInputSubmit"
      :rules="[rules.required, rules.length]"
      ref="newItemInput"
      >
    </v-text-field>
      <v-table>
        <thead>
          <tr>
          <th>名稱</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in items" :key="item.id">
          <td>
              <v-text-field 
              v-model="item.model" 
              :rules="[rules.required, rules.length]"
              autofocus
              ref="editItemInput"
              @keydown.enter="confirmEditItem(item.id, i)"
              >
            </v-text-field>
            <span v-show="!item.edit">
            {{ item.name }}
          </span>
          </td>
          <td>
            <template v-if="item.edit">
            <v-btn icon="mdi-check" color="green" variant="text" @click="onEditInputSubmit(item.id, i)"></v-btn>
            <v-btn icon="mdi-undo" color="red" variant="text" @click="cancelEditItem(item.id)"></v-btn>
            </template>
            <template v-else>
              <v-btn icon="mdi-pencil" color="green" variant="text" @click="editItem(item.id)"></v-btn>
              <v-btn icon="mdi-delete" color="red" variant="text" @click="delItem(item.id)"></v-btn>
            </template>
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useListStore } from '@/store/list';
import { storeToRefs } from 'pinia';

const list = useListStore()
const { addItem, editItem, cancelEditItem, delItem, confirmEditItem } = list
const { items } = storeToRefs(list)

const newItem = ref('')
const newItemInput = ref(null)
const editItemInput = ref([])

const onInputSubmit = async () => {
  const validate = await newItemInput.value.validate()
  console.log(validate)
  if (validate.length > 0) return
  addItem(newItem.value)
  newItemInput.value.blur()
  newItemInput.value.reset()
}

const onEditInputSubmit = async (id, i) => {
  const validate = await editItemInput.value[i].validate()
  console.log(validate)
  confirmEditItem(id)
}

const rules = {
  required: (value) => Boolean(value) || '欄位必填',
  length: (value) => value.length >= 3 || '必須三個字以上'
}
</script>