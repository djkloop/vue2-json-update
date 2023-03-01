<script setup lang="ts">
interface IAProps {
  id?: string,
  ele?: string,
  desc: {
    col: string
  },
  attrs: {
    class: string
  }
}

const props = withDefaults(defineProps<IAProps>(), {
  desc: () => ({ col: '1' }),
  attrs: () => ({ class: 'A--CLASS' })
})


</script>


<template>
  <div class="a-base">
    <AChild v-bind="$attrs" :key="`AChild_${props.id}`" />
  </div>
</template>