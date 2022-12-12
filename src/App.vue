<template>
  <div>
    <div class="title">弹弹堂公式</div>
    <Form :model="form" :label-width="80">
      <FormItem label="屏距：">
        <RadioGroup @on-change="submitSearch" v-model="form.screenSpacing" type="button" size="large">
          <Radio v-for="(item, index) in 20" :label="item"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="风向：">
        <RadioGroup @on-change="submitSearch" v-model="form.windDirection">
          <Radio :label="1">顺风</Radio>
          <Radio :label="0">逆风</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="风力：">
        <RadioGroup @on-change="submitSearch" v-model="form.windPowerInt" type="button" size="large">
          <Radio v-for="(item, index) in 6" :label="index"></Radio>
        </RadioGroup>
        <div>
          <RadioGroup @on-change="submitSearch" v-model="form.windPowerDot" type="button" size="large">
            <Radio v-for="(item, index) in 10" :label="dotValue(index)"></Radio>
          </RadioGroup>
        </div>
      </FormItem>
    </Form>
    <div style="margin-top: 10px;width: 100%;display: flex;justify-content: center" v-if="powerList.length > 0">
      <Row>
        <div v-for="(item, index) in powerList">
          <Card>
            <Col>
              <div class="text-title">
                {{ item.name }}
              </div>
              <div>力度:<span class="red">{{ item.power }}</span></div>
              <div>
                角度:<span class="text red">{{ item.angle }}</span>
              </div>
            </Col>
          </Card>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
import {search} from '@/utils/search'

export default {
  name: 'App',
  data() {
    return {
      form: {
        screenSpacing: 1,
        windDirection: 1,
        windPower: 0,
        windPowerInt: 0,
        windPowerDot: 0,
      },
      powerList: [],
    }
  },
  created() {
    this.submitSearch()
  },
  methods: {
    dotValue(index) {
      if (index === 0) {
        return 0
      }
      return '0.' + index
    },
    submitSearch() {
      console.log(this.form.windPowerDot)
      if (this.form.windPowerDot === 0) {
        this.form.windPower = this.form.windPowerInt + '.' + this.form.windPowerDot
      } else {
        if (this.form.windPowerInt === 0) {
          this.form.windPower = this.form.windPowerDot
        } else {
          this.form.windPower = this.form.windPowerInt * 1 + this.form.windPowerDot * 1
        }
      }
      console.log(this.form.windPower)
      let {data} = search(
          this.form.screenSpacing,
          this.form.windDirection,
          this.form.windPower
      )
      this.powerList = data
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
}

.text-title {
  font-size: 20px;
  font-weight: 500;
}

.red {
  color: red;
}
</style>
