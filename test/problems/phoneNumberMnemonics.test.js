const phoneNumberMnemonics = require('../../problems/phoneNumberMnemonics');

describe('phoneNumberMnemonics()', () => {
  
  it('Test Case 1', () => {
    const expected = [ "1w0j", "1w0k", "1w0l", "1x0j", "1x0k", "1x0l", "1y0j", "1y0k", "1y0l", "1z0j", "1z0k", "1z0l"];
    expect(phoneNumberMnemonics("1905")).toEqual(expected);
  });
    
  it('Test Case 2', () => {
    const expected = ["1111"];
    expect(phoneNumberMnemonics("1111")).toEqual(expected);
  });
    
  it('Test Case 3', () => {
    const expected = ["00a", "00b", "00c"];
    expect(phoneNumberMnemonics("002")).toEqual(expected);
  });
    
  it('Test Case 4', () => {
    const expected = [ "ggg", "ggh", "ggi", "ghg", "ghh", "ghi", "gig", "gih", "gii", "hgg", "hgh", "hgi", "hhg", "hhh", "hhi", "hig", "hih", "hii", "igg", "igh", "igi", "ihg", "ihh", "ihi", "iig", "iih", "iii"];
    expect(phoneNumberMnemonics("444")).toEqual(expected);
  });
    
  // it('Test Case 5', () => {
  //   const expected = [ "w0jmmm1adg", "w0jmmm1adh", "w0jmmm1adi", "w0jmmm1aeg", "w0jmmm1aeh", "w0jmmm1aei", "w0jmmm1afg", "w0jmmm1afh", "w0jmmm1afi", "w0jmmm1bdg", "w0jmmm1bdh", "w0jmmm1bdi", "w0jmmm1beg", "w0jmmm1beh", "w0jmmm1bei", "w0jmmm1bfg", "w0jmmm1bfh", "w0jmmm1bfi", "w0jmmm1cdg", "w0jmmm1cdh", "w0jmmm1cdi", "w0jmmm1ceg", "w0jmmm1ceh", "w0jmmm1cei", "w0jmmm1cfg", "w0jmmm1cfh", "w0jmmm1cfi", "w0jmmn1adg", "w0jmmn1adh", "w0jmmn1adi", "w0jmmn1aeg", "w0jmmn1aeh", "w0jmmn1aei", "w0jmmn1afg", "w0jmmn1afh", "w0jmmn1afi", "w0jmmn1bdg", "w0jmmn1bdh", "w0jmmn1bdi", "w0jmmn1beg", "w0jmmn1beh", "w0jmmn1bei", "w0jmmn1bfg", "w0jmmn1bfh", "w0jmmn1bfi", "w0jmmn1cdg", "w0jmmn1cdh", "w0jmmn1cdi", "w0jmmn1ceg", "w0jmmn1ceh", "w0jmmn1cei", "w0jmmn1cfg", "w0jmmn1cfh", "w0jmmn1cfi", "w0jmmo1adg", "w0jmmo1adh", "w0jmmo1adi", "w0jmmo1aeg", "w0jmmo1aeh", "w0jmmo1aei", "w0jmmo1afg", "w0jmmo1afh", "w0j... view full output ;
  //   expect(phoneNumberMnemonics("9056661234")).toEqual(expected);
  // });
    
  // it('Test Case 6 ', () => {
  //   const expected = [ "g1mdga0000", "g1mdgb0000", "g1mdgc0000", "g1mdha0000", "g1mdhb0000", "g1mdhc0000", "g1mdia0000", "g1mdib0000", "g1mdic0000", "g1mega0000", "g1megb0000", "g1megc0000", "g1meha0000", "g1mehb0000", "g1mehc0000", "g1meia0000", "g1meib0000", "g1meic0000", "g1mfga0000", "g1mfgb0000", "g1mfgc0000", "g1mfha0000", "g1mfhb0000", "g1mfhc0000", "g1mfia0000", "g1mfib0000", "g1mfic0000", "g1ndga0000", "g1ndgb0000", "g1ndgc0000", "g1ndha0000", "g1ndhb0000", "g1ndhc0000", "g1ndia0000", "g1ndib0000", "g1ndic0000", "g1nega0000", "g1negb0000", "g1negc0000", "g1neha0000", "g1nehb0000", "g1nehc0000", "g1neia0000", "g1neib0000", "g1neic0000", "g1nfga0000", "g1nfgb0000", "g1nfgc0000", "g1nfha0000", "g1nfhb0000", "g1nfhc0000", "g1nfia0000", "g1nfib0000", "g1nfic0000", "g1odga0000", "g1odgb0000", "g1odgc0000", "g1odha0000", "g1odhb0000", "g1odhc0000", "g1odia0000", "g1odib0000", "g1o... view full output ;
  //   expect(phoneNumberMnemonics("4163420000")).toEqual(expected);
  // });
    
  it('Test Case 7 ', () => {
    const expected = ["1"] ;
    expect(phoneNumberMnemonics("1")).toEqual(expected);
  });
    
  it('Test Case 8 ', () => {
    const expected = ["0"] ;
    expect(phoneNumberMnemonics("0")).toEqual(expected);
  });
    
  it('Test Case 9 ', () => {
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] ;
    expect(phoneNumberMnemonics("23")).toEqual(expected);
  });
    
  it('Test Case 10 ', () => {
    const expected = ["1a1a", "1a1b", "1a1c", "1b1a", "1b1b", "1b1c", "1c1a", "1c1b", "1c1c"] ;
    expect(phoneNumberMnemonics("1212")).toEqual(expected);
  });
    
  it('Test Case 11 ', () => {
    const expected = [ "wp", "wq", "wr", "ws", "xp", "xq", "xr", "xs", "yp", "yq", "yr", "ys", "zp", "zq", "zr", "zs"];
    expect(phoneNumberMnemonics("97")).toEqual(expected);
  });
    
  it('Test Case 12', () => {
    const expected = [ "wt001m", "wt001n", "wt001o", "wu001m", "wu001n", "wu001o", "wv001m", "wv001n", "wv001o", "xt001m", "xt001n", "xt001o", "xu001m", "xu001n", "xu001o", "xv001m", "xv001n", "xv001o", "yt001m", "yt001n", "yt001o", "yu001m", "yu001n", "yu001o", "yv001m", "yv001n", "yv001o", "zt001m", "zt001n", "zt001o", "zu001m", "zu001n", "zu001o", "zv001m", "zv001n", "zv001o"];
    expect(phoneNumberMnemonics("980016")).toEqual(expected);
  });

});