<script setup lang="ts">
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import { reactive, ref } from "vue";

interface TodoItem {
    id: number;
    name: string;
};

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
            name: todo.value
        });
        todo.value = "";
    }
    // console.log(todo.value);
};

const onSwitchChange = (event: CustomEvent) => {
    showCompleted.value = !showCompleted.value;
};
</script>

<template>
    <div>
        <div>
            <ui5-input :value="todo" @input="onItemChange" placeholder="Enter new Item" />
            <ui5-button @click="onAddClick">Add</ui5-button>
            <ui5-label>Show Watched</ui5-label>
            <ui5-switch :value="showCompleted" @change="onSwitchChange" />
        </div>
        <div>
            <ui5-table>
                <ui5-table-row v-for="todo in todos">
                    <ui5-table-cell>
                        <span>{{ todo.name }}</span>
                    </ui5-table-cell>
                    <ui5-table-cell>
                        <span v-if="!showCompleted">Complete</span>
                        <span>Remove</span>
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