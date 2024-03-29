<template>
  <div class="class-home">
    <Head>这是首页</Head>
    <div class="body_wrap">
      <a-tabs
        v-model:activeKey="activeKey"
        tab-position="left"
        class="tabs_wrap"
      >
        <a-tab-pane key="book" tab="Tab 1">Content of Tab 1</a-tab-pane>
        <a-tab-pane key="style" tab="Tab 2">Content of Tab 2</a-tab-pane>
        <a-tab-pane key="other" tab="Tab 3">Content of Tab 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: { Head },
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  setup() {
    const activeKey = ref("book");

    return {
      activeKey,
    };
  },
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
import {} from "vue";
import Head from "../components/Head.vue";
</script>

<style lang="scss" scoped>
.class-home {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  .body_wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .tabs_wrap {
      height: 100%;
      flex: 1;
    }
  }
}
</style>
