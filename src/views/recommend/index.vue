<template>
  <div>
    <h1>推荐</h1>
    <ContentLoader :speed="2" primaryColor="#c0c0c0" secondaryColor="#0080ff">
      <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
      <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
      <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
    </ContentLoader>

    <ContentLoader
      :height="160"
      :width="400"
      :speed="2"
      primaryColor="#8080c0"
      secondaryColor="#ff0080"
    >
      <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
      <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
      <circle cx="306.17" cy="133.21" r="50.54" />
    </ContentLoader>
  </div>
</template>

<script>
import ContentLoader from "../../components/ContentLoader";
export default {
  components: {
    ContentLoader
  }
};
</script>

<style>
</style>
