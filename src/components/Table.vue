<template>
  <table class="table">
    <thead>
        <tr>
          <th 
            v-for="column in columns"
            :key="column.name"
            :class="column.headerClasses"
            :style="column.headerStyle"
          >
            {{ column.label }}
          </th>
        </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in computedRows"
        :key="row.key"
      >
        <slot
          :name="`body-cell-${row.key}`"
        >
        </slot>
        <template
          v-for="column in row.columns"
        >
          <slot 
            :name="`body-cell-${column.name}`"
            v-bind:row="column.row"
          >
            <td
              :key="column.name"
              :class="column.classes"
              :style="column.headerStyle"
            >
              {{ column.label }}
            </td>
          </slot>
        </template>
      </tr>
    </tbody>
  </table>
  </template>
<script>

export default {
  name: 'TableComponent',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    computedRows () {
      const computedRows = this.rows.map((row, index) => {
        const columns = this.columns.map(column => {
          const { field, format, style, classes, name } = column
          let label
          if (typeof field === 'string') label = row[field]
          if (typeof field === 'function') label = field(row)
          if (typeof format === 'function') label = format(label)
          return {
            name,
            label,
            style,
            classes,
            row
          }
        })

        return {
          key: 'row-' + index,
          columns
        }
      })
      return computedRows
    }
  }
}

</script>
<style>
</style>
