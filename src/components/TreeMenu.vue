<template>
    <div class="tree-menu">
      <!-- <div class="first-tree" :style="indent" @click="toggleChildren">{{ label }}</div> -->
        <div class="first-tree" :style="indent" @click="toggleChildren(label, nodes, depth)">
            <div v-if="depth < 2" class="toggle-sport">
                <img src="@/assets/images/icons/caret-right-solid-black.svg" style="width: 10px;"/>
            </div>
            <div class="filter-sport">
                <img v-if="depth == 0" class="sport-icon" :src="label.icon">
                {{label.name}}
            </div>
        </div>

      <tree-menu 
        v-if="showChildren"
        v-for="node in nodes" 
        :nodes="node.leagueList" 
        :label="node"
        :depth="depth + 1"
        class="child-menu"
      >
      </tree-menu>
    </div>
</template>
<script>
    export default { 
      props: [ 'label', 'nodes', 'depth' ],
      data() {
        return { showChildren: false }
      },
      inject: ['$api'],
      name: 'tree-menu',
      computed: {
        indent() {
          return { transform: `translate(${this.depth * 10}px)` }
        }
      },
      mounted() {
        // console.log(this.nodes)
        // this.getSportBettingList()
      },
      methods: {
        getSportBettingList() {
            let data = {}
            this.$api.getSportBettingList(data, (res =>{
                console.log(res.data.list.matches)
				if (res.data){

					// this.succeedCreationModalShow = true
				}
			}), err => {
				console.log(err)
			})
        },
        toggleChildren() {
          this.showChildren = !this.showChildren;
        }
      }
    }
</script>
<style scoped lang="scss">
 .toggle-sport {
        float: left;
        width: 25px;
    }
    .filter-sport {
        margin-left: 15px;
        width: calc(100% - 15px);
    }
    .sport-icon {
        margin-left: auto;
        margin-right: 7px;
        height: 20px;
        vertical-align: middle;
    }












    .first-tree {
        color: #1c1c1c;
        padding: 12px 5px;
        font-weight: 700;
        border-bottom: 1px solid #c1c1c1;
        background: linear-gradient(180deg,#f1f1f1 0,#d7d7d7);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1",endColorstr="#d7d7d7",GradientType=0);
        font-size: 12px;
        text-decoration: none;
        display: block;
        outline: 0;
    }
    .child-menu {
        background-color: aqua !important;
        .first-tree {
            color: #1c1c1c;
            padding: 12px 5px;
            font-weight: 700;
            border-bottom: 1px solid #c1c1c1;
            // background: linear-gradient(180deg,#f1f1f1 0,#d7d7d7);
        // background-color: aqua !important;
        background: linear-gradient(180deg,#04e5e5 0,#7d0707)!important;

            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1f1f1",endColorstr="#d7d7d7",GradientType=0);
            font-size: 12px;
            text-decoration: none;
            display: block;
            outline: 0;
        }
    }
</style>