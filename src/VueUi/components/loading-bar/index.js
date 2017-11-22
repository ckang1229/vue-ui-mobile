import LoadingBar from './loading-bar'

//Config
let color = '#3399ff';
let height = '2px';
let spin = false;

let widthDuration = 300;
const opacityDuration = 200;
let timmer;
let LoadingBarInstance;

function getLoadingBarInstance(){
  LoadingBarInstance = LoadingBarInstance || LoadingBar.newInstance({
    color,
    height,
    spin
  })

  return LoadingBarInstance;
}

function update(conf){
  let instance = getLoadingBarInstance();

  instance.update(conf)
}

function finish(){
  clearTimer()

  update({
    current: 100
  })

  setTimeout(() => {
    update({
      show: false
    })
    setTimeout(() => {
      update({
        current: 0
      })
    }, opacityDuration)
  }, widthDuration)
}

function clearTimer(){
  timmer && clearInterval(timmer);
  timmer = null;
}

function animation(current, waitTime){
  return new Promise(resolve => {
    update({
      current
    })

    timmer = setTimeout(() => {
      resolve()
    }, widthDuration + waitTime)
  })
}

export default {
  start(){
    if(timmer) return;

    update({
      show: true
    })

    timmer = setTimeout(async () => {
      await animation(20, 1200)

      await animation(80, 0)
    }, opacityDuration)
  },
  update(conf){
    if(conf.current == 100){
      finish()
    }else{
      update({
        current: conf.current,
        show: true
      })
    }
  },
  finish(){
    finish()
  },
  config({color: newColor, height: newHeight, spin: newSpin}){
    if(newColor){
      color = newColor;
    }

    if(newHeight){
      height = newHeight;
    }

    if(newSpin){
      spin = newSpin;
    }
  },
  destroy(){
    if(!LoadingBarInstance) return

    const instance = getLoadingBarInstance()
    LoadingBarInstance  = null;

    clearTimer();
    instance.destroy()
  }
}
