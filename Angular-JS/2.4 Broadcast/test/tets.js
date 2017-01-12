describe('Test for Angular Broadcast Service', function () {
beforeEach(module('myApp'));
 var service
  beforeEach(inject(function (encryption) {
    service =encryption;
  }));

      it("it should encrypt the plain text Correctly", function () {
        var msg = service.simpleEncrypt("hello");
        expect(msg).toEqual("ifmmp");
      })

      it("it should encrypt the plain text InCorrectly", function () {
        var msg = service.simpleEncrypt("Hello");
        expect(msg).not.toEqual("ifmmp");
      })

      it("it should Decrypt the plain text Correctly", function () {
        var msg = service.simpleDecrypt("ifmmp");
        expect(msg).toEqual("hello");
      })

      it("it should Decrypt the plain text InCorrectly", function () {
        var msg = service.simpleDecrypt("IFmmp");
        expect(msg).not.toEqual("hello");
      })



})
