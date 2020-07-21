<template>
  <div class="crud_table">
    <a-alert message="Rick And Morty Characters~" type="info">
      <template #description>
        Thanks for Rick and Morty API! You can visit
        <a href="https://rickandmortyapi.com/" target="_blank">the official website.</a>
      </template>
    </a-alert>

    <a-card v-gap>
      <a-form-model layout="inline" :model="form">
        <a-form-model-item label="Status" prop="status">
          <a-select v-size:w="180" v-model="form.status" placeholder="Please select Status">
            <a-select-option
              v-for="option in options.status"
              :key="option.value"
              :value="option.value"
              >{{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Gender" prop="gender">
          <a-select v-size:w="180" v-model="form.gender" placeholder="Please select Gender">
            <a-select-option
              v-for="option in options.gender"
              :key="option.value"
              :value="option.value"
              >{{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Name" prop="name">
          <a-input v-model="form.name" placeholder="Please input Name"></a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="onQuery">Submit</a-button>
          <a-button v-gap:ml="8" @click="onReset">Reset</a-button>
        </a-form-model-item>
      </a-form-model>

      <a-table
        v-gap:mt="12"
        class="table"
        row-key="id"
        size="middle"
        :loading="isLoading"
        :columns="tableColumns"
        :pagination="pagination"
        :data-source="tableData"
        @change="handleTableChange"
      >
        <template #index="text, record, index">
          <span>{{ (pagination.current - 1) * pagination.pageSize + index + 1 }}</span>
        </template>
        <template #image="text">
          <a-avatar shape="square" :src="text" size="large"></a-avatar>
        </template>
        <template #status="text">
          <a-tag v-if="text === 'Alive'" color="green">{{ text }}</a-tag>
          <a-tag v-if="text === 'Dead'" color="orange">{{ text }}</a-tag>
          <a-tag v-if="text === 'unknown'">{{ text }}</a-tag>
        </template>
        <template #action="text, record">
          <a-button size="small" type="primary" @click="onViewProfile(record)">Profile</a-button>
          <a-popconfirm title="Are you sure delete this character?" @confirm="onDelete(record)">
            <a-button ghost size="small" type="danger" v-gap:ml="4">Delete </a-button>
          </a-popconfirm>
        </template>
      </a-table>
    </a-card>

    <character-viewer ref="refCharacterViewer"></character-viewer>
  </div>
</template>

<script>
import { reqFetchCharacters } from '../../api/characters';
import CharacterViewer from './CharacterViewer';
import { asyncTimeout } from '@/utils/helpers';

export default {
  name: 'Table',

  components: { CharacterViewer },

  data() {
    return {
      isLoading: false,
      form: {
        status: undefined,
        gender: undefined,
        name: undefined
      },
      options: {
        status: [
          { label: 'Alive', value: 'alive' },
          { label: 'Dead', value: 'dead' },
          { label: 'Unknown', value: 'unknown' }
        ],
        gender: [
          { label: 'Female', value: 'female' },
          { label: 'Male', value: 'male' },
          { label: 'Genderless', value: 'genderless' },
          { label: 'Unknown', value: 'unknown' }
        ]
      },
      tableData: [],
      pagination: {
        current: 1,
        pageSize: 20,
        total: 0
      },
      tableColumns: [
        { key: 'index', title: '#', width: 64, scopedSlots: { customRender: 'index' } },
        { dataIndex: 'name', title: 'Name', ellipsis: true },
        { dataIndex: 'image', title: 'Avatar', scopedSlots: { customRender: 'image' } },
        { dataIndex: 'gender', title: 'Gender' },
        { dataIndex: 'species', title: 'Subspecies' },
        { dataIndex: 'type', title: 'Type or Subspecies', ellipsis: true },
        { dataIndex: 'status', title: 'Status', scopedSlots: { customRender: 'status' } },
        { dataIndex: 'origin.name', title: 'Origin', ellipsis: true },
        { dataIndex: 'location.name', title: 'Location', ellipsis: true },
        { key: 'action', fixed: 'right', scopedSlots: { customRender: 'action' } }
      ]
    };
  },

  created() {
    this.getTableData();
  },

  methods: {
    async getTableData(page = 1) {
      try {
        this.isLoading = true;

        const res = await reqFetchCharacters({
          page: page,
          name: this.form.name,
          status: this.form.status,
          gender: this.form.gender
        });
        this.tableData = res.data.results;
        this.pagination.total = res.data.info.count;
        this.pagination.current = page;
      } finally {
        this.isLoading = false;
      }
    },
    handleTableChange(pagination) {
      this.getTableData(pagination.current);
    },
    onQuery() {
      this.getTableData(1);
    },
    onReset() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = undefined;
      });
      this.getTableData(1);
    },
    onViewProfile(record) {
      this.$refs.refCharacterViewer.open({ id: record.id });
    },
    async onDelete() {
      try {
        this.isLoading = true;

        await asyncTimeout(500);
        this.$message.success('Fake Success~');

        const page =
          this.tableData.length === 1 && this.pagination.current > 1
            ? this.pagination.current - 1
            : this.pagination.current;
        this.getTableData(page);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
