<template>
  <button
    type="button"
    :disabled="disabled"
    :class="{
      'opacity-50': disabled,
    }"
    class="
      my-4
      inline-flex
    