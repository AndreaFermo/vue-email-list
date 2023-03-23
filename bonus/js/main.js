const { createApp } = Vue

createApp({
  data() {
    return {
      n: 10,
      emails: [],
    }
  },
  mounted() {
    for(i=0; i < this.n; i++  ) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            this.emails.push(response.data.response);
        }
    )
    }
  }
}).mount('#app')