<template>
  <h1>
    <span>
      <slot></slot>
    </span>
  </h1>
</template>

<style lang="scss" scoped>
h1{
  font-size: 32px;
  width: 90%;
  max-width: 700px;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
  span{
    font-weight: bold;
  }
}
</style>