import _ from 'lodash';

export default class ChartOptionsGenerator {
  constructor(options = {}) {
    this.options = _.cloneDeep(options);
  }

  set(path, value) {
    this.options = _.set(this.options, path, value);
    return this;
  }

  remove(path) {
    this.options = _.omit(this.options, path);
    return this;
  }

  merge(options) {
    this.options = _.merge(this.options, options);
    return this;
  }

  custom(cb) {
    this.options = cb(this.options, _);
    return this;
  }

  pieData(data, series = 0) {
    let pieOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 0,
        bottom: 0,
        data: []
      }
    };

    pieOptions = _.set(pieOptions, `series[${series}]`, {
      type: 'pie',
      data: []
    });

    data.forEach(item => {
      pieOptions.legend.data.push(item.name);
      pieOptions.series[series].data.push(item);
    });

    this.options = _.merge(this.options, pieOptions);
    return this;
  }

  pieRing(ring = ['48%', '72%'], series = 0) {
    this.options = _.set(this.options, `series[${series}].radius`, ring);
    return this;
  }

  pieRose(type = 'radius', series = 0) {
    this.options = _.set(this.options, `series[${series}].roseType`, type);
    return this;
  }

  final() {
    const finalOptions = this.options;
    this.options = null;
    return finalOptions;
  }
}
