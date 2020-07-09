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
      items-center
      py-2
      px-4
      border border-transparent
      shadow-sm
      text-sm
      leading-4
      font-medium
      rounded-full
      text-white
      bg-gray-600
      hover:bg-gray-700
      transition-colors
      duration-300
