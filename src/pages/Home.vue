<template>
  <div class="class-home">
    <Head>这是首页</Head>
    <div class="body_wrap">
      <a-tabs
        v-model:activeKey="activeKey"
        tab-position="left"
        class="tabs_wrap"
      >
        <a-tab-pane key="book" tab="我的小说" class="book_wrap">
          <BookList />
        </a-tab-pane>
        <a-tab-pane key="style" tab="角色样式">Content of Tab 2</a-tab-pane>
        <a-tab-pane key="other" tab="导出管理">Content of Tab 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import request from '../utils/request'
export default {
  name: "Home",
  components: { Head, BookList },
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
  mounted() {
    request.get("/api/authInfo").then((res) => {
      console.log(res, '用户信息')
      // setUserID(res.data.ID)
    }).catch(res => {
      message.error(res.msg || '异常错误')
    })
  },
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
import BookList from "../components/BookList.vue";
</script>

<style lang="scss" scoped>
.class-home {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  .body_wrap {
    flex: 1;
    display: flex !important;
    align-items: center;
    justify-content: center;
    min-height: 0;
    .tabs_wrap {
      display: flex;
      height: 100%;
      flex: 1;
      min-height: 0;
      display: flex;
      .book_wrap {
        flex: 1;
        min-height: 0;
        padding: 0;
      }
    }
  }
}
</style>
