<template>
  <div>
    <div class="row m-5">
      <div class="col-sm-12 my-5">
        <b-card
          overlay
          img-src="https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          img-alt="Card Image"
          text-variant="white"
          title="Besoin de liberté ?"
          style="max-width: 100rem"
        >
          <b-card-text>
            Ce site référence par catégorie les bon plan et évenement liée à la
            communauté des motards et des amoureux de la balade.
          </b-card-text>
        </b-card>
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Grafitti"
          image="https://images.unsplash.com/photo-1528875286060-c8d025d7c15c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          content="Les tableaux de la rue !"
          href="./Grafitti"
        />
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Stunt"
          image="https://images.unsplash.com/photo-1539858997092-d526a54ed2d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
          content="Besoin d'adrenaline ?"
        />
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Mécanique"
          image="https://images.unsplash.com/photo-1534789266363-adfa086f3f63?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          content="Un souci mécanique ?"
        />
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Communauté"
          image="https://images.unsplash.com/photo-1561386944-117e1e6a8b5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          content="Trouver une communauté"
        />
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Course"
          image="https://images.unsplash.com/photo-1533709957924-e946c7e881c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          content="Suivre les courses"
        />
      </div>
      <div class="col-sm-4 my-3">
        <little-card
          title="Boutique"
          image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          content="La boutique"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LittleCard from "../LittleCard";
export default {
  components: { LittleCard },
};
</script>

<style lang="scss" scoped></style>
