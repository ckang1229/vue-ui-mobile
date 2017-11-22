import Message from './message.vue'
import Vue from 'vue'

Message.newInstance = (type, properties = {}) => {
  let _props;
  const animationDuration = 200;
  let duration = (properties.duration || 1000) + animationDuration * 2;

  if(Object.prototype.toString.call(properties) === '[object Object]'){
    _props = {type, ...properties};
  }else{
    _props = {type, content: properties};
  }

  const Instance = new Vue({
    data: _props,
    render(h){
      return h(Message, {
        props: _props
      })
    }
  })

  const component = Instance.$mount();
  document.body.appendChild(component.$el);
  const message = component.$children[0];

  message.show = true;

  setTimeout(() => {
    message.show = false;
    setTimeout(() => {
      message.$destroy();
    }, animationDuration)
  }, duration)
}

export default Message
