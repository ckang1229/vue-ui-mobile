import Dialog from './dialog'

let DialogInstance;

function getDialogInstance(){
  DialogInstance = DialogInstance || Dialog.newInstance();

  return DialogInstance
}

export default {
  showDialog(config){
    const instance = getDialogInstance();

    instance.showDialog(config)
  }
}
