import { BufferAttribute, BufferGeometry } from "three";

export interface NodeDecorator<D = Object> {
  prepareData(nodeName: string): Promise<D>;
  decorateRgbaBufferAttribute(attribute: BufferAttribute, preData: D): void;
  decorateBufferGeometry(geometry: BufferGeometry, preData: D): void;
}
