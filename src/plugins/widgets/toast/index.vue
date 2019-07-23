<template>
  <div class="toast-wrap" v-if="show">
    <div class="toast-title" v-if="title">{{title}}</div>
    <div class="toast-content" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        timer: 0
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 3000
      }
    },
    watch: {
      content (val, old) {
          val && this.durationFade();
      }
    },
    methods: {
      durationFade () {
        this.show = true;
        window.clearTimeout(this.timer);
        if (this.duration > 0) {
          this.timer = window.setTimeout(() => {
            this.show = false;
            if (typeof this.clear === 'function') {
              this.clear();
            }
          }, this.duration);
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  .toast-wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 22px;
    font-size: 24px;
    border-radius: 3px;
    text-align: center;
    .toast-title {

    }
    .toast-content {
      display: inline-block;
    }
  }
</style>
