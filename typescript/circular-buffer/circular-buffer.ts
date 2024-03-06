export class BufferEmptyError extends Error {}
export class BufferFullError extends Error {}

export default class CircularBuffer<T> {
  private buffer: T[]
  private bufferSize: number

  constructor(bufferSize: number) {
    this.buffer = []
    this.bufferSize = bufferSize
  }

  write(value: T): void {
    if (this.buffer.length === this.bufferSize) throw new BufferFullError()

    this.buffer.unshift(value)
  }

  read(): T {
    if (this.buffer.length === 0) throw new BufferEmptyError()

    return this.buffer.pop()!
  }

  forceWrite(value: T): void {
    if (this.buffer.length === this.bufferSize) this.buffer.pop()

    this.buffer.unshift(value)
  }

  clear(): void {
    this.buffer.splice(0)
  }
}
