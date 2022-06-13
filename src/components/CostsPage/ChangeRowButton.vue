<template>
  <div class='relative'>
    <button @click='showWindow' class='material-symbols-outlined modal-btn control'>
      more_vert
    </button>
    <div class='modal-change control' v-if='modalWindow'>
      <button @click='$change.openFormModal(item)' class='modal-change__btn control'>
        <span class='material-symbols-outlined control'>
          edit
        </span>
        change
      </button>
      <button @click='deleteData(item)' class='modal-change__btn control'>
        <span class='material-symbols-outlined control'>
          delete_forever
        </span>
        delete
      </button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ChangeRowButton',
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      modalWindow: false
    };
  },
  methods: {
    showWindow() {
      this.modalWindow = !this.modalWindow;
    },
    closeModal(e) {
      if (!e.target.classList.contains('control')) {
        this.modalWindow = false;
      }
    }
    /*deleteData(item) {
      console.log(this.$change, item);
    }*/
  },
  created() {
    document.body.addEventListener('click', (e) => {
      this.closeModal(e);
    });
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.closeModal);
  }

};
</script>

<style lang='scss' scoped>
$btnSize: 26px;
$colorHover: #dee2e6;
.modal-btn {
  height: $btnSize;
  width: $btnSize;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
  transition: 1s;

  &:hover {
    background-color: $colorHover;
  }
}

span {
  margin: 0 auto;
}

.relative {
  position: relative;
}

.modal-change {
  z-index: 2;
  width: 100px;
  background-color: #fff;
  position: absolute;
  top: $btnSize + 2px;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 4px 6px 1px rgb(0 0 0 / 7%);

  &__btn {
    border: none;
    display: flex;
    align-items: center;
    height: 30px;
    width: 100%;
    background-color: #fff;
    font-size: 12px;

    &:hover {
      background-color: cornsilk;
    }

    span {
      margin: 0 5px 0 0;

    }

  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0,
    'wght' 200,
    'GRAD' 0,
    'opsz' 20
  }
}
</style>