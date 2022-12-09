<template>
  <div>
    <div class="title">弹弹堂公式</div>
    <Form :model="form" :label-width="80">
      <FormItem label="屏距：">
        <RadioGroup v-model="form.screenSpacing" type="button" size="large">
          <Radio v-for="(item, index) in 20" :label="item"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="风向：">
        <RadioGroup v-model="form.windDirection">
          <Radio :label="1">顺风</Radio>
          <Radio :label="0">逆风</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="风力：">
        <RadioGroup v-model="form.windPowerInt" type="button" size="large">
          <Radio v-for="(item, index) in 6" :label="index"></Radio>
        </RadioGroup>
        <div>
          <RadioGroup v-model="form.windPowerDot" type="button" size="large">
            <Radio v-for="(item, index) in 10" :label="dotValue(index)"></Radio>
          </RadioGroup>
        </div>
      </FormItem>
      <div style="width: 100%; text-align: center">
        <Button type="success" @click="submitSearch">查询</Button>
      </div>
    </Form>
    <div v-if="powerList.length > 0">
      <Row>
        <div v-for="(item, index) in powerList">
          <Card>
            <Col>
              <div>
                {{ item.name }}
              </div>
              <div>力度:{{ item.power }}</div>
              <div>
                角度:{{ item.angle }}
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
  components: {},

  methods: {
    dotValue(index) {
      if (index === 0) {
        return 0
      }
      return '0.' + index
    },
    submitSearch() {
      if (this.form.windPowerDot === 0) {
        this.form.windPower = this.form.windPowerInt + '.' + this.form.windPowerDot
      }
      let {data} = search(
          this.form.screenSpacing,
          this.form.windDirection,
          this.form.windPower
      )
      console.log(data)
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
</style>
