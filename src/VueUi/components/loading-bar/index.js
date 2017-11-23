import LoadingBar from './loading-bar'

//Config
let color = '#3399ff';
let height = '2px';
let spin = false;

let widthDuration = 300;
const opacityDuration = 200;
let timmer, startTime, finishTime;
let compelete = true;
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

async function finish(){
  clearTimer()

  update({
    current: 100
  })

  await widthTransition()

  update({
    show: false
  })

  await opacityTransition()

  update({
    current: 0
  })

  await widthTransition()

  compelete = true
}

function clearTimer(){
  timmer && clearInterval(timmer);
  timmer = null;
}

//模拟opacity变化所需要的等待时间
function opacityTransition(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, opacityDuration)
  })
}

//模拟loading-bar 宽度变化所需要的等待时间
function widthTransition(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, widthDuration)
  })
}

function animation(current, waitTime){
  return new Promise(resolve => {
    update({
      current
    })

    timmer = setTimeout(resolve, widthDuration + waitTime)
  })
}

function config({color: newColor, height: newHeight, spin: newSpin}){
  if(newColor){
    color = newColor;
  }

  if(newHeight){
    height = newHeight;
  }

  if(newSpin){
    spin = newSpin;
  }
}

function destroy(){
  if(!LoadingBarInstance) return

  const instance = getLoadingBarInstance()
  LoadingBarInstance  = null;

  clearTimer();
  instance.destroy()
}

export default {
  async start(options){
    if(!compelete) return;

    //如果有配置项 则需要重新创建实例
    if(options){
      config(options)
      destroy()
    }

    startTime = new Date();

    update({
      show: true
    })

    await opacityTransition();

    await animation(20, 1000)

    await animation(80, 0)
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
  async finish(){
    finishTime = new Date()

    if(finishTime - startTime < opacityDuration){
      await opacityTransition()
      finish()
    }else{
      finish()
    }
  },
  config,
  destroy
}
