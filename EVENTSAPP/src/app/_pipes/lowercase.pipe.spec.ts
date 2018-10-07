import { ToLowerCasePipe } from './lowercase.pipe';

describe('Losercase Pipe', () => {
  
  it('create an instance', () => {
    const pipe = new ToLowerCasePipe();
    expect(pipe).toBeTruthy();
  });

  describe("should convert to lowercase", () => {
    
    it('convert all capital word to lower ', () => {
        
        const pipe = new ToLowerCasePipe();
        
        expect(pipe.transform("TOLOWER")).toBe("tolower");
    });

    it('convert all lower word to lower ', () => {
        
        const pipe = new ToLowerCasePipe();
        
        expect(pipe.transform("tolower")).toBe("tolower");
    });
  
  });

});