const getYoungestCommonAncestor = require('../../problems/getYoungestCommonAncestor');

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }

  addAsAncestor(descendants) {
    for (const descendant of descendants) {
      descendant.ancestor = this;
    }
  }
}

const ancestralTrees = {};
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
for (const letter of ALPHABET) {
  ancestralTrees[letter] = new AncestralTree(letter);
}
ancestralTrees.A.addAsAncestor([
  ancestralTrees.B,
  ancestralTrees.C,
  ancestralTrees.D,
  ancestralTrees.E,
  ancestralTrees.F,
]);
ancestralTrees.B.addAsAncestor([
  ancestralTrees.G,
  ancestralTrees.H,
  ancestralTrees.I,
]);
ancestralTrees.C.addAsAncestor([ancestralTrees.J]);
ancestralTrees.D.addAsAncestor([ancestralTrees.K, ancestralTrees.L]);
ancestralTrees.F.addAsAncestor([ancestralTrees.M, ancestralTrees.N]);
ancestralTrees.H.addAsAncestor([
  ancestralTrees.O,
  ancestralTrees.P,
  ancestralTrees.Q,
  ancestralTrees.R,
]);
ancestralTrees.K.addAsAncestor([ancestralTrees.S]);
ancestralTrees.P.addAsAncestor([ancestralTrees.T, ancestralTrees.U]);
ancestralTrees.R.addAsAncestor([ancestralTrees.V]);
ancestralTrees.V.addAsAncestor([
  ancestralTrees.W,
  ancestralTrees.X,
  ancestralTrees.Y,
]);
ancestralTrees.X.addAsAncestor([ancestralTrees.Z]);

describe('getYoungestCommonAncestor()', () => {
  test('Test Case #1', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.A,
      ancestralTrees.B
    );
    expect(yca).toEqual(ancestralTrees.A);
  });

  test('Test Case #2', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.B,
      ancestralTrees.F
    );
    expect(yca).toEqual(ancestralTrees.A);
  });

  test('Test Case #3', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.G,
      ancestralTrees.M
    );
    expect(yca).toEqual(ancestralTrees.A);
  });

  test('Test Case #4', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.U,
      ancestralTrees.S
    );
    expect(yca).toEqual(ancestralTrees.A);
  });

  test('Test Case #5', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.Z,
      ancestralTrees.M
    );
    expect(yca).toEqual(ancestralTrees.A);
  });

  test('Test Case #6', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.O,
      ancestralTrees.I
    );
    expect(yca).toEqual(ancestralTrees.B);
  });

  test('Test Case #7', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.T,
      ancestralTrees.Z
    );
    expect(yca).toEqual(ancestralTrees.H);
  });

  test('Test Case #8', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.T,
      ancestralTrees.V
    );
    expect(yca).toEqual(ancestralTrees.H);
  });

  test('Test Case #9', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.T,
      ancestralTrees.H
    );
    expect(yca).toEqual(ancestralTrees.H);
  });

  test('Test Case #10', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.W,
      ancestralTrees.V
    );
    expect(yca).toEqual(ancestralTrees.V);
  });

  test('Test Case #11', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.Z,
      ancestralTrees.B
    );
    expect(yca).toEqual(ancestralTrees.B);
  });

  test('Test Case #12', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.Q,
      ancestralTrees.W
    );
    expect(yca).toEqual(ancestralTrees.H);
  });

  test('Test Case #13', () => {
    const yca = getYoungestCommonAncestor(
      ancestralTrees.A,
      ancestralTrees.A,
      ancestralTrees.Z
    );
    expect(yca).toEqual(ancestralTrees.A);
  });
});
