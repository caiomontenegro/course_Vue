<template>
    <li>
      <div>
        <h1>{{name}}</h1>
        <h2>{{age}}</h2>
      </div>
    </li>
</template>


<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }
  
}
</script>