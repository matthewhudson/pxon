/**
 * Interface for PXON metadata
 */
interface PXONData {
  software: string
  artist: string
  imageDescription: string
  userComment: string
  copyright: string
  dateTime: string
  dataURL?: string
}

/**
 * Interface for a single pixel
 */
interface Pixel {
  x: number
  y: number
  color: string
  size: number
}

/**
 * Interface for PXON import data
 */
interface PXONImportData {
  exif?: {
    artist?: string
    software?: string
    imageDescription?: string
    userComment?: string
    copyright?: string
    dateTime?: string
  }
  pxif?: {
    pixels: Pixel[]
  }
  dataURL?: string
}

/**
 * Interface for PXON export data
 */
interface PXONExportData {
  exif: {
    software: string
    artist: string
    imageDescription: string
    userComment: string
    copyright: string
    dateTime: string
  }
  pxif: {
    pixels: Pixel[]
  }
  dataURL: string
}

/**
 * Class representing a PXON file.
 */
export class PXON {
  private _data: PXONData
  private pixels: Map<string, Pixel>

  /**
   * @constructor
   */
  constructor() {
    this._data = {
      software: '',
      artist: '',
      imageDescription: '',
      userComment: '',
      copyright: '',
      dateTime: '',
    }
    this.pixels = new Map<string, Pixel>()
  }

  /**
   * Import the PXON data as an object.
   * @param data - The PXON import data.
   */
  import(data: PXONImportData): void {
    const { exif = {}, pxif = { pixels: [] }, dataURL = '' } = data

    this.artist = exif.artist || ''
    this.software = exif.software || ''
    this.imageDescription = exif.imageDescription || ''
    this.userComment = exif.userComment || ''
    this.copyright = exif.copyright || ''
    this.dateTime = exif.dateTime || ''
    this.dataURL = dataURL

    // Exposes iterable for easy use in applications
    pxif.pixels.forEach(pixel => {
      this.setPixel({ ...pixel })
    })
  }

  /**
   * Export the PXON data as an object.
   * @returns Hash with all PXON properties.
   */
  export(): PXONExportData {
    return {
      exif: {
        software: this.software,
        artist: this.artist,
        imageDescription: this.imageDescription,
        userComment: this.userComment,
        copyright: this.copyright,
        dateTime: this.dateTime,
      },
      pxif: {
        pixels: [...this.pixels.values()],
      },
      dataURL: this.dataURL,
    }
  }

  /**
   * Get a pixel by its coordinates.
   * @param x - The x coordinate.
   * @param y - The y coordinate.
   * @returns A single pixel's data, or undefined if not found.
   */
  getPixel(x = 0, y = 0): Pixel | undefined {
    return this.pixels.get(`${x}:${y}`)
  }

  /**
   * Set a pixel.
   * @param pixel - The pixel data.
   */
  setPixel(pixel: Partial<Pixel> = {}): void {
    const { x = 0, y = 0, color = 'rgba(255, 255, 255, 1)', size = 1 } = pixel

    this.pixels.set(`${x}:${y}`, {
      x,
      y,
      color,
      size,
    })
  }

  /**
   * Get all pixels.
   * @returns An array of all pixels.
   */
  getAllPixels(): Pixel[] {
    return [...this.pixels.values()]
  }

  /**
   * Set the artist who created this PXON.
   * @param artist - The artist's name.
   */
  set artist(artist: string) {
    this._data.artist = artist
  }

  /**
   * Returns the artist who created this PXON.
   * @returns The artist.
   */
  get artist(): string {
    return this._data.artist
  }

  /**
   * Set the software who created this PXON.
   * @param software - The software name.
   */
  set software(software: string) {
    this._data.software = software
  }

  /**
   * Returns the software that created this PXON.
   * @returns The software.
   */
  get software(): string {
    return this._data.software
  }

  /**
   * Set the imageDescription for this PXON.
   * @param imageDescription - The image description.
   */
  set imageDescription(imageDescription: string) {
    this._data.imageDescription = imageDescription
  }

  /**
   * Returns the imageDescription for this PXON.
   * @returns The image description.
   */
  get imageDescription(): string {
    return this._data.imageDescription
  }

  /**
   * Set the userComment for this PXON.
   * @param userComment - The user comment.
   */
  set userComment(userComment: string) {
    this._data.userComment = userComment
  }

  /**
   * Returns the userComment for this PXON.
   * @returns The user comment.
   */
  get userComment(): string {
    return this._data.userComment
  }

  /**
   * Set the copyright for this PXON.
   * @param copyright - The copyright.
   */
  set copyright(copyright: string) {
    this._data.copyright = copyright
  }

  /**
   * Returns the copyright for this PXON.
   * @returns The copyright.
   */
  get copyright(): string {
    return this._data.copyright
  }

  /**
   * Set the date of creation for this PXON.
   * @param dateTime - The date/time.
   */
  set dateTime(dateTime: string) {
    this._data.dateTime = dateTime
  }

  /**
   * Returns the date of creation for this PXON.
   * @returns The date/time.
   */
  get dateTime(): string {
    return this._data.dateTime
  }

  /**
   * Set the dataURL for this PXON.
   * @param dataURL - The data URL.
   */
  set dataURL(dataURL: string) {
    this._data.dataURL = dataURL
  }

  /**
   * Returns the dataURL for this PXON.
   * @returns The data URL.
   */
  get dataURL(): string {
    return this._data.dataURL || ''
  }
}
