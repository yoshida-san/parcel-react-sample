import mySum from '../src/functions/mySum'

describe('mySumのテスト', () => {
  test('1+1', () => {
    expect(mySum(1, 1)).toEqual(2)
  })
  test('1+(-1)', () => {
    expect(mySum(1, -1)).toEqual(0)
  })
})
