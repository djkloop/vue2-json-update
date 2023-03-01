<script setup lang="ts">
interface IBProps {
  id?: string,
  ele?: string,
  desc: {
    col: string
  },
  attrs: {
    class: string
  },
  children?: IBProps[]
}

const props = withDefaults(defineProps<IBProps>(), {
  desc: () => ({ col: '1' }),
  attrs: () => ({ class: 'B--CLASS' }),
  children: () => []
})

</script>


<template>
  <div class="b-base">
    <BChild v-bind="$attrs" :key="'BChild_' + props.id" />
    <component style="padding-left:20px" v-for="(child, index) in props.children" v-bind="child.attrs"
      :key="'key_child' + child.ele + '_' + index" :id="child.id" :ele="child.ele" :is="child.ele" :attrs="child.attrs"
      :desc="child.desc" />
  </div>
</template>