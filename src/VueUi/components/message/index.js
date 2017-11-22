import Message from './message'

export default {
  default(options){
    Message.newInstance('default', options)
  },
  info(options){
    Message.newInstance('info', options)
  },
  success(options){
    Message.newInstance('success', options)
  },
  warning(options){
    Message.newInstance('warning', options)
  },
  error(options){
    Message.newInstance('error', options)
  }
}
