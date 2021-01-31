<template>
  <div>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ content }}
      </b-card-text>
      <div class="text-center">
        <b-button :href="href" variant="primary">voir</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
