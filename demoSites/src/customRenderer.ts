import { DOMElement, ReactElement } from "react";
import ReactReconciler from "react-reconciler";
const hostConfig = {}
const ReactReconcilerInst = ReactReconciler(hostConfig)

export default {
  render: (reactElement: ReactElement, domElement, callback) => {
    // 创建根节点
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(domElement, false)
    }
    return ReactReconcilerInst.updateContainer(reactElement, domElement._rootContainer, null, callback)
  }
}