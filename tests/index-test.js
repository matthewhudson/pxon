const expect = require("expect");
const PXON = require("src").default;
const { exif, pxif, dataURL } = require("./fixtures");

describe("PXON", () => {
  describe("Module", () => {
    const pxon = new PXON();

    it("Returns an `Object`", () => {
      expect(pxon).toBeAn(Object);
    });

    it("Has a public `name` property", () => {
      expect(pxon.name)
        .toExist()
        .toBeAn("string");
    });

    it("Has a 'private' `_data` property", () => {
      expect(pxon._data)
        .toExist()
        .toBeAn(Object);
    });

    it("Has a public `pixels` property", () => {
      expect(pxon.pixels)
        .toExist()
        .toBeAn(Map);
    });
  });

  describe("Import", () => {
    const pxon = new PXON();
    before(() => {
      pxon.import({ exif, pxif, dataURL });
    });

    describe("Imports EXIF correctly", () => {
      it("Sets `exif.software`", () => {
        expect(pxon.software).toEqual(exif.software);
      });
      it("Sets `exif.artist`", () => {
        expect(pxon.artist).toEqual(exif.artist);
      });
      it("Sets `exif.imageDescription`", () => {
        expect(pxon.imageDescription).toEqual(exif.imageDescription);
      });
      it("Sets `exif.userComment`", () => {
        expect(pxon.userComment).toEqual(exif.userComment);
      });
      it("Sets `exif.copyright`", () => {
        expect(pxon.copyright).toEqual(exif.copyright);
      });
      it("Sets `exif.dateTime`", () => {
        expect(pxon.dateTime).toEqual(exif.dateTime);
      });
    });

    describe("Imports PXIF correctly", () => {
      it("Sets `pxif.pixels` as a HashMap", () => {
        expect(pxon.pixels).toBeAn(Map);
      });
    });
  });

  describe("Export", () => {
    const pxon = new PXON();
    let exported = null;

    before(() => {
      pxon.import({ exif, pxif, dataURL });
      exported = pxon.export();
    });

    describe("Exports PXON correctly", () => {
      it("Returns an `Object`", () => {
        expect(exported).toBeAn(Object);
      });

      it("Returns only three keys: `exif`, `pxif`, and `dataURL`", () => {
        expect(Object.keys(exported).length).toEqual(3);
        expect(exported.exif).toExist();
        expect(exported.pxif).toExist();
        expect(exported.dataURL).toExist();
      });
    });
    // exports an object with key exif
    //  - and has propersties
    // exports an object with key pxif
    //  - has a pixel array
    //  - pixel array is in correct format
    // exports an object with key dataURL
  });

  describe("Set EXIF Data", () => {
    const pxon = new PXON();

    it("Set `software`", () => {
      pxon.software = exif.software;
      expect(pxon.software).toEqual(exif.software);
    });

    it("Set `artist`", () => {
      pxon.artist = exif.artist;
      expect(pxon.artist).toEqual(exif.artist);
    });

    it("Set `imageDescription`", () => {
      pxon.imageDescription = exif.imageDescription;
      expect(pxon.imageDescription).toEqual(exif.imageDescription);
    });

    it("Set `userComment`", () => {
      pxon.userComment = exif.userComment;
      expect(pxon.userComment).toEqual(exif.userComment);
    });

    it("Set `copyright`", () => {
      pxon.copyright = exif.copyright;
      expect(pxon.copyright).toEqual(exif.copyright);
    });

    it("Set `dateTime`", () => {
      pxon.dateTime = exif.dateTime;
      expect(pxon.dateTime).toEqual(exif.dateTime);
    });
  });

  describe("Set PXIF Data", () => {
    const pxon = new PXON();

    describe("Set a single pixel by `x` and `y` (no `size` or `color`)", () => {
      before(() => {
        pxon.setPixel(0, 0);
      });

      it("Default color is `rgba(255, 255, 255, 1)`", () => {
        expect(pxon.getPixel(0, 0).color).toEqual("rgba(255, 255, 255, 1)");
      });

      it("Default size is `1`", () => {
        expect(pxon.getPixel(0, 0).size).toEqual(1);
      });
    });

    describe("Set a single pixel with `x`, `y`, `size`, and `color`", () => {
      before(() => {
        pxon.setPixel(0, 0, "rgba(0, 0, 0, 1)", 25);
      });

      it("Pixel color is `rgba(0, 0, 0, 1)`", () => {
        expect(pxon.getPixel(0, 0).color).toEqual("rgba(0, 0, 0, 1)");
      });

      it("Pixel size is `25`", () => {
        expect(pxon.getPixel(0, 0).size).toEqual(25);
      });
    });
  });
});
