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
export default {
  name: "StickyNote",
  data() {
    return {
      
    }
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300);

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
@import "font-awesome";
ul#sticky li {
  display: block;
  list-style: none;
  z-index: 1;
  float: left;
  margin: 30px;
  padding: 15px 15px 50px 15px;
  width: 300px;
  height: 300px;
  // border: 3px solid #800000;
  background-color: #e1d350;
  color: #800000;
  text-decoration: none;
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  -o-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
  overflow: hidden;
}

ul#sticky li span.sticky {
  font-family: Verdana, Helvetica, sans-serif;
  font-size: 200%;
}

/* 
 * rotation
 */
ul#sticky li:nth-child(even) {
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
}

ul#sticky li:nth-child(odd) {
  -webkit-transform: rotate(-1deg);
  -moz-transform: rotate(-1deg);
  -o-transform: rotate(-1deg);
  -ms-transform: rotate(-1deg);
  transform: rotate(-1deg);
}

ul#sticky li:nth-child(3n) {
  -webkit-transform: rotate(1deg);
  -moz-transform: rotate(1deg);
  -o-transform: rotate(1deg);
  -ms-transform: rotate(1deg);
  transform: rotate(1deg);
}

/* 
   Transform demo 
   Uses the transition (defined above) to ease in.
*/
ul#sticky li:hover {
  -webkit-box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.4);
  -o-box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.4);
  -webkit-transform: rotate(0deg) scale(1.25);
  -moz-transform: rotate(0deg) scale(1.25);
  -o-transform: rotate(0deg) scale(1.25);
  -ms-transform: rotate(0deg) scale(1.25);
  transform: rotate(0deg) scale(1.25);
  z-index: 10;
}
/* 
  button css
*/
.add-button {
  position: relative;
  // bottom: 600px;
  top: 400px;
  left: 300px;
  width: 56px;
  height: 56px;
  overflow: visible;
  -webkit-transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  -moz-transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  transition: transform 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46),
    color 0s ease 0.4s, font-size 0.2s;
  text-align: center;
  line-height: 56px;
  font-size: 28px;
  color: rgba(255, 255, 255, 1);
}

.add-button:before {
  position: relative;
  z-index: 100;
  content: "+";
}

.add-button:hover {
  color: rgba(255, 255, 255, 0);
  transform: rotate(45deg);
}

.sub-button {
  position: absolute;
  display: inline-block;
  background-color: #1a5a2d;
  color: rgba(163, 67, 219, 0);
  width: 28px;
  height: 28px;
  line-height: 48px;
  font-family: "FontAwesome";
  font-size: 12px;
  -webkit-transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
  -moz-transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
  transition: top 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    left 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    bottom 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    right 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    width 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    height 0.2s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.2s,
    transform 0.1s ease 0s, border-radius 0.2s ease 0.2s;
}

.tl {
  top: 0;
  left: 0;
  border-radius: 28px 0 0 0;
}

.tr {
  top: 0;
  right: 0;
  border-radius: 0 28px 0 0;
}

.bl {
  bottom: 0;
  left: 0;
  border-radius: 0 0 0 28px;
}

.br {
  bottom: 0;
  right: 0;
  border-radius: 0 0 28px 0;
}

.tl:before {
  content: "";
}

.tr:before {
  content: "";
}

.bl:before {
  content: "";
}

.br:before {
  content: "";
}

.add-button:hover .sub-button {
  width: 48px;
  height: 48px;
  transform: rotate(-45deg);

  color: rgba(255, 255, 255, 1);
  -webkit-transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s, color 0.3s ease 0.8s,
    transform 0.3s ease 0.8s, border-radius 0.4s ease 0.6s;
  -moz-transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s, color 0.3s ease 0.8s,
    transform 0.3s ease 0.8s, border-radius 0.4s ease 0.6s;
  transition: top 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    left 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    bottom 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    right 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    width 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s,
    height 0.4s cubic-bezier(0.58, -0.37, 0.45, 1.46) 0.4s, color 0.3s ease 0.8s,
    transform 0.3s ease 0.8s, border-radius 0.4s ease 0.6s;
}

.add-button:hover .tl {
  top: -25px;
  left: -25px;
  border-radius: 28px;
}

.add-button:hover .tr {
  top: -25px;
  right: -25px;
  border-radius: 28px;
}

.add-button:hover .bl {
  bottom: -25px;
  left: -25px;
  border-radius: 28px;
}

.add-button:hover .br {
  bottom: -25px;
  right: -25px;
  border-radius: 28px;
}

// .button_holder {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   left: 80%;
//   top: -10%;
//   background-color: #fafad2;
//   &:after {
//     content: "";
//     position: absolute;
//     z-index: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: rgba(#fafad2, 0.7);
//   }

// .plus{
//     position: right=40; top: 40;
//     z-index: 1;
//     width:45px;
//     height: 45px;
//     color: #1a1a1a;
//     background: #ed1c5b;
//     border-radius: 50%;
//     border: none;
//     transition: box-shadow 400ms cubic-bezier(.2,0,.7,1), transform 200ms cubic-bezier(.2,0,.7,1);
//     &:after{
//         content: "+";
//         font-size: 2.5em;
//         line-height: 1.1em;
//     }
//     &:hover{
//         transform: rotate(45deg);
//         box-shadow: 0 0 1px 15px rgba(#8A3B58, 0.4),
//         0 0 1px 30px rgba(#8A3B58, 0.1),
//         0 0 1px 45px rgba(#8A3B58, 0.1);
//     }
// }
//   h2 {
//     margin: {
//       right: 1em;
//     }
//     text-align: center;
//     color: #8a3b58;
//   }
// }
</style>
