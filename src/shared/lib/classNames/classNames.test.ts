import {classNames} from "./classNames";

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional', () => {
    expect(classNames('someClass', {}, ['additional'])).toBe('someClass additional')
  })
  test('with mods', () => {
    expect(classNames('someClass', {modsOne: true, modsTwo: false})).toBe('someClass modsOne')
  })
})