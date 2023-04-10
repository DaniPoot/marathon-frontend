<template>
<td class="td-actions text-right">
  <button type="button" rel="tooltip" class="btn btn-success btn-icon btn-sm btn-simple" data-original-title="" title="" @click="$emit('onEdit')">
    <i class="ni ni-ruler-pencil pt-1"></i>
  </button>
  <button type="button" rel="tooltip" class="btn btn-danger btn-icon btn-sm btn-simple" data-original-title="" title="" @click="$emit('onDelete')">
    <i class="ni ni-fat-remove pt-1"></i>
  </button>
</td>
</template>

<script>
export default {
  name: 'TableActions',
  props: { 
    showEdit: {
      type: Boolean,
      value: () => true
    },
    showRemove: {
      type: Boolean,
      value: () => true
    }
  }
}
</script>
<style>
  
</style>
