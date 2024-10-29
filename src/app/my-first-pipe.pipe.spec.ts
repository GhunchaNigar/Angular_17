import { MyFirstPipePipe } from './my-first-pipe.pipe';

describe('MyFirstPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyFirstPipePipe();
    expect(pipe).toBeTruthy();
  });
});
