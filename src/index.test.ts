import { describe, it, test, expect, beforeEach } from 'vitest'
import { PXON } from './index'

describe('PXON', () => {
  let pxon: PXON

  beforeEach(() => {
    pxon = new PXON()
  })

  it('should initialize with default properties', () => {
    expect(pxon['_data']).toEqual({
      software: '',
      artist: '',
      imageDescription: '',
      userComment: '',
      copyright: '',
      dateTime: '',
    })
    expect(pxon['pixels']).toBeInstanceOf(Map)
  })

  describe('import', () => {
    it('should import the given data', () => {
      const data = {
        exif: {
          software: 'TestSoftware',
          artist: 'TestArtist',
          imageDescription: 'TestDescription',
          userComment: 'TestComment',
          copyright: 'TestCopyright',
          dateTime: 'TestDateTime',
        },
        pxif: {
          pixels: [
            {
              x: 0,
              y: 0,
              color: 'rgba(255, 255, 255, 1)',
              size: 1,
            },
            {
              x: 1,
              y: 1,
              color: 'rgba(0, 0, 0, 1)',
              size: 2,
            },
          ],
        },
        dataURL: 'TestDataURL',
      }

      pxon.import(data)

      expect(pxon.export()).toEqual(data)
    })
  })

  describe('getPixel and setPixel', () => {
    test('should get and set a pixel', () => {
      const pxon = new PXON()
      const pixel = {
        x: 1,
        y: 1,
        color: 'rgba(0, 0, 0, 1)',
        size: 2,
      }

      pxon.setPixel(pixel)

      expect(pxon.getPixel(pixel.x, pixel.y)).toEqual(pixel)
    })
  })

  describe('getAllPixels', () => {
    test('should get all pixels', () => {
      const pxon = new PXON()
      const pixels = [
        {
          x: 0,
          y: 0,
          color: 'rgba(255, 255, 255, 1)',
          size: 1,
        },
        {
          x: 1,
          y: 1,
          color: 'rgba(0, 0, 0, 1)',
          size: 2,
        },
      ]

      pixels.forEach(pixel => pxon.setPixel(pixel))

      expect(pxon.getAllPixels()).toHaveLength(2)
      expect(pxon.getAllPixels()).toEqual(expect.arrayContaining(pixels))
    })
  })

  describe('accessors', () => {
    const testData = {
      software: 'TestSoftware',
      artist: 'TestArtist',
      imageDescription: 'TestDescription',
      userComment: 'TestComment',
      copyright: 'TestCopyright',
      dateTime: 'TestDateTime',
      dataURL: 'data:image/png;base64,TEST',
    }

    for (const key in testData) {
      it(`should get and set ${key}`, () => {
        // @ts-expect-error - Use of dynamic property access
        pxon[key] = testData[key]
        // @ts-expect-error - Use of dynamic property access
        expect(pxon[key]).toEqual(testData[key])
      })
    }
  })
})
