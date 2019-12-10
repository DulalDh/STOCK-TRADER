<template>
    <div class="container">
      <app-header style="margin-top:30px"></app-header>
      <div class="row">
          <div class="col-md-12">
                <transition name="slide" mode="out-in">
                  <router-view></router-view>
                </transition>
          </div>
      </div>
    </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  },
  data () {
    return {
      
    }
  },
  created(){
    this.$store.dispatch('initStock');
  }
}
</script>
<style>
  body{
     background-image: url("https://previews.123rf.com/images/bbbaaaaz/bbbaaaaz1607/bbbaaaaz160700001/61569391-modern-background-with-plexus-style-perfect-for-website-or-banner-backgrounds-or-as-a-wallpaper.jpg");
  }

      .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
