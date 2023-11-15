<script setup lang="ts">
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
}

const idCounter = ref(0);

// Add todo form
const todo = ref("");

const todos = reactive<TodoItem[]>([]);
const showCompleted = ref(false);

const onItemChange = (event: CustomEvent) => {
  todo.value = (event.target as HTMLInputElement).value;
  // todo.value = (event.target as HTMLInputElement).value;
};

const onAddClick = () => {
  if (todo.value.length > 0) {
    todos.push({
      id: idCounter.value++,
      name: todo.value,
      completed: false,
    });
    todo.value = "";
  }
};

const onSwitchChange = (event: CustomEvent) => {
  showCompleted.value = !showCompleted.value;
};

const filteredTodos = computed(() => {
  return showCompleted.value
    ? todos.filter((todo) => todo.completed)
    : todos.filter((todo) => !todo.completed);
});

const onDeleteClick = (id: number) => {
  const index = todos.findIndex((t) => t.id === id);
  todos.splice(index, 1);
};

</script>

<template>
  <div>
    <div>
      <ui5-input
        :value="todo"
        @input="onItemChange"
        placeholder="Enter new Item"
      />
      <ui5-button @click="onAddClick">Add</ui5-button>
      <ui5-label>Show Watched</ui5-label>
      <ui5-switch :value="showCompleted" @change="onSwitchChange" />

    </div>
    <div>
      <ui5-table>
        <ui5-table-row v-for="todo in filteredTodos" :key="todo.id">
          <ui5-table-cell>
            <span>
              <input type="checkbox"
                v-model="todo.completed"
              />
            </span>
            <span>{{ todo.name }}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span>
              <ui5-button design="Negative" @click="onDeleteClick(todo.id)"
                >Delete Item</ui5-button
              >
            </span>
          </ui5-table-cell>
        </ui5-table-row>
        <ui5-table-column slot="columns">
          <span>Todo Items</span>
        </ui5-table-column>
        <ui5-table-column slot="columns">
          <span>Operation</span>
        </ui5-table-column>
      </ui5-table>
    </div>
  </div>
</template>
