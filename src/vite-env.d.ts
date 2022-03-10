/// <reference types="vite/client" />

interface ElementNode {
  tag: string;
  props: object;
  key?: string;
  text?: string;
  children?: ElementNode[] | string[]
}
