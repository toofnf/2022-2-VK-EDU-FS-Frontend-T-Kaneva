/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(null)).toBe(false)
  expect(convertBytesToHuman('5')).toBe(false)
  expect(convertBytesToHuman('incorrect input')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(false)).toBe(false)
  expect(convertBytesToHuman(undefined)).toBe(false)
  expect(convertBytesToHuman(typeof(0))).toBe(false)
});

test('Возвращает false для неправильного класса чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman(-1e-100)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(-Infinity)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B')
  expect(convertBytesToHuman(-0)).toBe('0 B')
  expect(convertBytesToHuman(1)).toBe('1 B')
  expect(convertBytesToHuman(1023.9)).toBe('1023.9 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(9876543210 / 123456789)).toBe('80 B')
  expect(convertBytesToHuman(2 ** 30)).toBe('1 GB')
  expect(convertBytesToHuman(2 ** 30 + 1)).toBe('1 GB')
  expect(convertBytesToHuman(2 ** 30 - 1)).toBe('1024 MB')
  expect(convertBytesToHuman(2 ** 45)).toBe('32 TB')
  expect(convertBytesToHuman(12345678901234567890.909090)).toBe('10965.17 PB')
});