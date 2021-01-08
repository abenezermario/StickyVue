<template>

 <ul id="sticky">
    <li>
        <div class="add-button">
        <div class="sub-button tl"></div>
        <div class="sub-button tr"></div>
        <div class="sub-button bl"></div>
        <div class="sub-button br"></div>
      </div>
    </li>
  </ul>
</template>


<script>
import StickyNote from './Sticky'
export default {
    name: "Notes",
    components: {StickyNote},

    data() {
        
    }
    
}
</script>
<style  scoped>
</style>