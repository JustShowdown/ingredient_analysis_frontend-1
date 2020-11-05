<template>
  <div class="index_upload">
    <div class="title">成分检测上传图像</div>
    <Upload />
  </div>
</template>

<script>
import Upload from "../components/index_upload/upload";
export default {
  name: "Index_upload",
  components: {
    Upload,
  },
};
</script>

<style lang="scss" scoped>
.index_upload{
  height: 100%;
  .title {
  font-size: 60px;
  margin:30px 0px ;
}
}

</style>
