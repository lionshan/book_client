<template>
  <div class="class-file">
    <Head>这是画本列表页面</Head>
  </div>
</template>

<script>
export default {
  name: "File",
  components: { Head },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  setup() {},
  computed: {},
  watch: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUnmount() {},
  unmount() {},
  beforeUpdate() {},
  updated() {},
  deactivated() {},
  activated() {},
  methods: {},
};
</script>
<script setup>
import Head from "../components/Head.vue";
import {} from "vue";
</script>

<style lang="scss" scoped>
.class-file {
}
</style>
