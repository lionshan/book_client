<template>
  <div class="class-head">
    <div class="title_name">画本网站</div>
    <div class="page_content">
      <slot> </slot>
    </div>
    <div class="operation_wrap">
      <div>头像</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  components: {},
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
import {} from "vue";
</script>

<style lang="scss" scoped>
.class-head {
  width: 100vw;
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2b3648;
  border-bottom: 1px solid #fff;
  .title_name {
    margin: 0 20px;
    font-size: 24px;
    color: #fff;
  }
  .operation_wrap {
    margin: 0 20px;
    color: #fff;
  }

  .page_content {
    margin: 0 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
