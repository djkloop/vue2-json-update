<script lang="ts" setup>
import { ref, set } from 'vue';


const testJson = ref([
  {
    id: "f1",
    ele: 'A',
    attrs: {
      class: "A-class"
    },
    desc: {
      col: "1"
    }
  },
  {
    id: "f2",
    ele: 'B',
    attrs: {
      class: "B-class"
    },
    desc: {
      col: "2"
    },
  },
  {
    id: "f3",
    ele: 'B',
    attrs: {
      class: "B-class"
    },
    desc: {
      col: "2"
    },
    children: [
      {
        id: "f3-1",
        ele: 'A',
        attrs: {
          class: "A-C1-class"
        },
        desc: {
          col: "1"
        }
      }
    ]
  }
])

let index = 999;

const randomClass = (ele: string) => `${Math.random()}_class_${ele}`
const randomId = (ele: string) => `f${index++}_${ele}`


const addMainDesc = () => {
  // 在加进去一个主的
  testJson.value.push({
    id: randomId('A'),
    ele: 'A',
    attrs: {
      class: "A-CC-class"
    },
    desc: {
      col: "1"
    }
  })
}

const addChildDesc = () => {
  // 在加进去一个子的
  if (testJson.value[2]?.children) {
    testJson.value[2].children.push({
      id: randomId('B'),
      ele: 'B',
      attrs: {
        class: randomClass("B")
      },
      desc: {
        col: "1"
      }
    })
  }

}

const useSetDesc = () => {
  if (testJson.value[2]?.children) {
    const r = Math.random()
    // 这里精准修改了，但又没精准修改...多加几个子集又不行了
    set(testJson.value[2].children[0]?.attrs, "class", "A-CC-class" + r)
  }
}

</script>
<template>
  <div>
    <div v-for="(item, index) in testJson" :key="item.ele + '_' + index">
      <component :is="item.ele" :id="item.id" :key="item.id" v-bind="item.attrs" :attrs="item.attrs" :desc="item.desc"
        :children="item.children" :ele="item.ele" />
    </div>
    <button @click="useSetDesc">修改desc</button>
    <button @click="addMainDesc">增加主</button>
    <button @click="addChildDesc">增加子</button>
  </div>
</template>

<style>
button {
  margin: 10px;
}
</style>