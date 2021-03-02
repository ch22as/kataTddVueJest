<template>
  <div class="container">

    <SearchForm/>
    <SpeakerList :speakers="speakers"/>

  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm';
import SpeakerList from '@/components/SpeakerList';
import { mapGetters } from 'vuex';

export default {
    name: 'SpeakersView',
    components:{
      SearchForm,
      SpeakerList
    },
    computed: {
      ...mapGetters({speakers: 'speakers'})
    }
}
</script>

<style>

</style>