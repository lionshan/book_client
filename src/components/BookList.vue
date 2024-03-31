<template>
  <div class="class-book-list">
    <div class="head_wrap">
      <a-button type="primary" class="margin_style" @click="showCreateModal"
        >创建小说</a-button
      >
      <a-radio-group
        v-model:value="listType"
        button-style="solid"
        class="margin_style"
      >
        <a-radio-button value="create">我创建的</a-radio-button>
        <a-radio-button value="join">我参与的</a-radio-button>
      </a-radio-group>
    </div>
    <div class="search_order">
      <a-input
        class="search_input"
        v-model:value="searchKey"
        placeholder="搜索小说名称"
      />
      <a-space class="select_wrap">
        <a-select
          ref="select"
          v-model:value="stateType"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option value="incomplete">未完成小说</a-select-option>
          <a-select-option value="complete">已完成小说</a-select-option>
        </a-select>
        <a-select v-model:value="orderType" style="width: 120px">
          <a-select-option value="create_up">创建时间-升序</a-select-option>
          <a-select-option value="create_down">创建时间-降序</a-select-option>
          <a-select-option value="name_up">名称-升序</a-select-option>
          <a-select-option value="name_down">名称-降序</a-select-option>
        </a-select>
      </a-space>
    </div>
    <div class="list_wrap">
      <a-card
        class="list_item"
        hoverable
        style="width: 300px"
        v-for="item in bookList"
        :key="item.id"
      >
        <template #cover>
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        </template>
        <template class="ant-card-actions" #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta :title="item.name" :description="timeStr(item.createTime)">
        </a-card-meta>
      </a-card>
    </div>

    <a-modal
      v-model:visible="createShow"
      title="创建小说"
      @ok="handleCreateBook"
    >
      <a-input
        class="create_input"
        v-model:value="bookName"
        placeholder="请输入小说名称"
      />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "BookList",
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
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
import { ref, computed } from "vue";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
const listType = ref("create");
const searchKey = ref("");
const stateType = ref("incomplete");
const orderType = ref("create_up");
const createShow = ref(false);
const bookName = ref("");
const bookList = ref([
  {
    name: "测试小说",
    id: 122,
    createTime: new Date().getTime(),
    file: 3,
    state: "incomplete",
  },
  {
    name: "测试小说w3w",
    id: 1224,
    createTime: new Date().getTime() - 100000,
    file: 1,
    state: "complete",
  },
  {
    name: "测试小说w322w",
    id: 12234,
    createTime: new Date().getTime() - 100000,
    file: 1,
    state: "complete",
  },
]);

const timeStr = (time) => {
  let dateObj = new Date(time);
  return `${dateObj.toDateString()}`;
};

const handleChange = (value) => {
  console.log(`select:${value}`);
};

const handleCreateBook = (e) => {
  console.log("handleCreateBook", bookName);
  createBook(bookName);
};

const createBook = (bookName) => {
  //发起接口
  let newBook = {
    name: bookName,
    id: Math.random() * 100000,
    createTime: new Date().getTime(),
    file: 0,
    state: "incomplete",
  };

  bookList.valuea.push(newBook);
};
const showCreateModal = () => {
  createShow.value = true;
};
</script>

<style lang="scss" scoped>
.class-book-list {
  height: calc(100vh - 41px);
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .head_wrap {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #000;
    .margin_style {
      margin: 0px 24px;
    }
  }

  .search_order {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
    .search_input {
      margin: 0 24px;
    }

    .select_wrap {
      margin: 0 24px;
    }
  }
  .list_wrap {
    width: 100%;
    overflow: scroll;
    min-height: 0;
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    .list_item {
      margin: 24px;
      height: 350px;
    }
  }
}
</style>
