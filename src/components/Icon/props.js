// 该文件负责定义组件的属性 props
export default {
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  rotation: {
    type: [String, Number],
  },
  flip: {
    type: [String, Number],
  },
  beat: Boolean,
  'beat-fade': Boolean,
  bounce: Boolean,
  fade: Boolean,
  shake: Boolean,
  spin: Boolean,
  'spin-reverse': Boolean,
  'spin-pulse': Boolean,
  type: {
    type: String,
  },
  color: {
    type: String,
  },
}
