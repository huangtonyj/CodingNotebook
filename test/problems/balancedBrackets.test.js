const balancedBrackets = require('../../problems/balancedBrackets');

test('balancedBrackets()', () => {

  expect(balancedBrackets(
      '()[]{}{'))
    .toEqual(false);

  expect(balancedBrackets(
      '(((((({{{{{[[[[[([)])]]]]]}}}}}))))))'))
    .toEqual(false);

  expect(balancedBrackets(
      '()()[{()})]'))
    .toEqual(false);

  expect(balancedBrackets(
      '(()())((()()()))'))
    .toEqual(true);

  expect(balancedBrackets(
      '{}()'))
    .toEqual(true);

  expect(balancedBrackets(
      '()([])'))
    .toEqual(true);

  expect(balancedBrackets(
      '((){{{{[]}}}})'))
    .toEqual(true);

  expect(balancedBrackets(
      '([])(){}(())()()'))
    .toEqual(true);

  expect(balancedBrackets(
      '((({})()))'))
    .toEqual(true);

  expect(balancedBrackets(
      '(([]()()){})'))
    .toEqual(true);

  expect(balancedBrackets(
        '(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())'))
    .toEqual(true);

  expect(balancedBrackets(
      '{[[[[({(}))]]]]}'))
    .toEqual(false);

  expect(balancedBrackets(
      '[((([])([]){}){}){}([])[]((())'))
    .toEqual(false);

  expect(balancedBrackets(
      ')[]}'))
    .toEqual(false);

  });