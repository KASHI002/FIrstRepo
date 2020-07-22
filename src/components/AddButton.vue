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
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
    "
  >
    <!-- Heroicon name: solid/mail -->
    <svg
      class="-ml-0.5 mr-2 h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      heig