<template lang="html">
  <div id="post-cat">
    <h1>Post New Random Cat</h1>
    <md-card>
      <md-card-media>
        <div v-if="err" class="error-handler">
          <p>Oops, can't find a cat for you</p>
        </div>
        <div v-else class="random-cat">
          <div v-if="loading" class="loading-spinner">
            <md-spinner md-indeterminate v-if="loading"></md-spinner>
            <p>Looking a cute cat for you . . .</p>
          </div>
          <img v-else :src="randomCat.url">
        </div>
      </md-card-media>

      <md-card-content>
        <md-input-container>
          <label>What do you think about this cat?</label>
          <md-textarea v-model="randomCat.comment"></md-textarea>
        </md-input-container>
        <md-input-container>
          <label>Wanna give some detail?</label>
          <md-textarea v-model="randomCat.detail"></md-textarea>
        </md-input-container>
      </md-card-content>

      <md-card-actions>
        <md-button type="button" class="md-raised md-primary" @click.native="postCat">Post</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomCat: {
        url: '',
        comment: '',
        detail: ''
      },
      loading: true,
      err: false
    }
  },
  methods: {
    getCat () {
      this.$http.get('http://random.cat/meow')
        .then((response) => {
          this.randomCat.url = response.data.file
          setTimeout(() => { this.loading = false }, 1000)
        })
        .catch((err) => {
          this.err = err
        })
    },
    postCat () {
      console.log('postCat ', this.randomCat)
      this.$db.ref('cats').push(this.randomCat, () => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.getCat()
  }
}
</script>

<style lang="css" scoped>
#post-cat,
.md-card {
  width: 100%;
}
.md-card-media {
  text-align: center;
}
</style>
