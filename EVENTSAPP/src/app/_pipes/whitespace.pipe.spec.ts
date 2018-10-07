import { NOwhiteSpacePipe } from './whitespace.pipe';

describe('WhiteSpace Pipe', () => {
  
  it('create an instance', () => {
     const pipe = new NOwhiteSpacePipe();
     expect(pipe).toBeTruthy();
  });

  it("should remove all spaces", () => {
     const pipe = new NOwhiteSpacePipe();

     expect(pipe.transform("white space")).toBe("whitespace");
  });

});