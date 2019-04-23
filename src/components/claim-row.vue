<template>
  <section class="[ hp-cover ] [ js-hp-cover ] [  grid__row  ]">

    <h1 class="[ hp-cover__title ] [ js-hp-cover__title ]">
      <img src="/Asset/Img//logoBianco.svg" alt="New or Review design" title="New or Review design">
    </h1>
    <a class="[ hp-cover__btn ] [  js-hp-cover__btn ]" href="#"> <i class="[ fa fa-chevron-down ]" aria-hidden="true"></i>  </a>

  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    pippo: String,
  }
}
</script>
