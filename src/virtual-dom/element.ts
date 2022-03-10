export function el(tag: string, props: Record<string, any>, key: string, children: ElementNode[] | string[]) {
  return new Element({tag, props, key, children})
}

class Element implements ElementNode {
  children: ElementNode[] | string[] = [];
  props: object = {};
  key?: string = '';
  tag: string = '';
  text?: string;

  constructor(props: ElementNode) {
    this.key = props.key;
    this.tag = props.tag;
    this.props = props.props;
    this.text = props.text;
    this.children = props.children || []
  }

  render() {
    const el = document.createElement(this.tag) as HTMLElement
    const props: Record<string, any> = this.props;
    for (const key in props) {
      setAttr(el, key, props[key]);
    }
    if (this.children.length > 0) {
      this.children.forEach((child) => {
        if (child instanceof Element) {
          el.appendChild(child.render())
        }
        if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        }
      })
    }
    return el;
  }
}

function setAttr(node: HTMLElement & {value?: any}, key: string, value: any) {
  switch (key) {
    case 'style':
      node.style.cssText = value;
      break;
    case 'value': {
      const tagName = node.tagName.toLowerCase() || '';
      if (tagName === 'input' || tagName === 'textarea') {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    }
    default:
      node.setAttribute(key, value);
      break;
  }
}
