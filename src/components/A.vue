<script setup lang="ts">
interface IAProps {
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
    <AChild v-bind="$attrs" />
  </div>
</template>