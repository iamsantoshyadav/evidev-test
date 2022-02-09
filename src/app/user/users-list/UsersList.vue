<template>
  <custom-table
    v-if="flattenUsers.length"
    :data="flattenUsers"
    :headers="headers"
  >
    <template v-slot:body="props">
      <tr v-for="(row, index) in props.items" :key="index">
        <td data-label="S.No">{{ index + 1 }}</td>
        <td data-label="Name">{{ row.name }}</td>
        <td data-label="dob">{{ row.dob }}</td>
        <td data-label="email">{{ row.email }}</td>
        <td data-label="location">{{ row.location }}</td>
        <td data-label="location">{{ row.phone }}</td>
        <td data-label="location">
          <img :src="row.picture" :alt="row.picture" />
        </td>
      </tr>
    </template>
  </custom-table>
</template>
<script>
import { fetchUsers } from "@/app/user/shared/services";
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
import { tableHeaders } from "@/app/user/shared/utils";
export default {
  name:"UsersList",
  setup() {
    // Data variables
    const headers = tableHeaders;
    const users = ref([]);

    // Methods
    const getUsers = async () => {
      users.value = await fetchUsers();
    };

    // Hooks
    onBeforeMount(() => {
      getUsers();
    });

    // Computed
    const flattenUsers = computed(() => {
      if (!users.value.results == undefined) {
        return [];
      }
      return users.value.results.map(function (user) {
        let data = {};
        data.name =
          user.name.title + " " + user.name.first + " " + user.name.last;
        data.dob = user.dob.date;
        data.email = user.email;
        data.location =
          user.location.coordinates.latitude +
          " " +
          user.location.coordinates.longitude;
        data.phone = user.phone;
        data.picture = user.picture.thumbnail;
        return data;
      });
    });

    return {
      users,
      getUsers,
      flattenUsers,
      headers,
    };
  },
};
</script>
<style scoped>
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

