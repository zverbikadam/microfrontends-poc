<script setup lang="ts">
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Switch";
import { ref } from "vue";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element";

const newItem = ref("");
const checked = ref(false);

const onItemChange = (event: CustomEvent) => {
  newItem.value = (event.target as HTMLInputElement).value;
};

const onAddClick = () => {
  console.log(newItem.value);
};

const onSwitchChange = (event: CustomEvent) => {
  checked.value = !checked.value;
  console.log(checked.value);
};
</script>

<template>
  <div>
    <ui5-input
      :value="newItem"
      @input="onItemChange"
      placeholder="Enter new Item"
    />
    <ui5-button @click="onAddClick">Add</ui5-button>
    <ui5-label>Show Watched</ui5-label>
    <ui5-switch v-bind="checked" @change="onSwitchChange" />
  </div>
</template>
