function diffProps() {

}

function diffChildren() {

}

export function diff(oldNode: ElementNode, newNode: ElementNode) {
  if (oldNode === newNode) {
    return;
  }
  if (oldNode.tag === newNode.tag && oldNode.key === newNode.key) {
    // change
    diffProps();
    diffChildren()
  }
  if (oldNode.tag !== newNode.tag) {
    // replace

  }
}
