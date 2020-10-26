<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
          >Ticker</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
            v-model="ticker"
            @keydown.enter="add"
            type="text"
            name="wallet"
            id="wallet"
            class="
              block
              w-full
              pr-10
              border-gray-300
              text-gray-900
              focus:outline-none focus:ring-gray-500 focus:border-gray-500
              sm:text-sm
              rounded-md
            "
            placeholder="Example BTC"
          />
        </div>
      </div>
    </div>
    <add-button @click="add" :disabled="disabled"> </add-button>
  </section>
</template>

<script>
import AddButton from "./AddButton";

export default {
  data() {
    return {
      ticker: "",
    };
  },

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: {
    "add-ticker": (value) => typeof value === "string" && value.length > 0,
  },

  components: {
    AddButton,
  },

  methods: {
    add() {
      if (this.ticker.length === 0) {
        return;
      }
      this.$emit("add-ticker", this.ticker);
      this.ticker = "";
    },
  },
};
</script>
