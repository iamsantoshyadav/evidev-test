<template>
  <div>
    <table class="table">
      <thead>
        <th v-for="header in headers" :key="header">{{header.label}}
            <font-awesome-icon @click="sort(header.name)" v-if="header.sortable" :icon="currentSortingCol==header.name && currentSortingOrder=='desc' ?'arrow-down' :'arrow-up'" />
        </th>
      </thead>
      <tbody>
          <slot name="body" v-bind:items="sortedItems"></slot>
      </tbody>
    </table>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  props: {
      data: {
          type: Array,
          default: null
      },
      headers: {
          type: Array,
          default: null
      }
  },
  setup(props) {
    const items = ref(props.data);
    const currentSortingCol = ref(null);
    const currentSortingOrder = ref('desc');

    const sortedItems = computed(() => {
        return items.value.sort((a,b) => {
            let modifier = 1;
            if(currentSortingOrder.value === 'desc') modifier = -1;
            if(a[currentSortingCol.value] < b[currentSortingCol.value]) return -1 * modifier;
            if(a[currentSortingCol.value] > b[currentSortingCol.value]) return 1 * modifier;
            return 0;
        });
    })

    function sort(col) {
        if(col === currentSortingCol.value) {
            currentSortingOrder.value = currentSortingOrder.value==='asc'?'desc':'asc';
        }
        currentSortingCol.value = col;
    }
    return {
        items,
        currentSortingCol,
        currentSortingOrder,
        sortedItems,
        sort
    }
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table td,
.table th {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
}

.table th {
  background-color: #92c9e6;
  color: #ffffff;
}

.table tbody tr:nth-child(even) {
  background-color: #d1e8f5;
}

/*responsive*/

@media (max-width: 500px) {
  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }
  .table tr {
    margin-bottom: 15px;
  }
  .table td {
    padding-left: 50%;
    text-align: left;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
