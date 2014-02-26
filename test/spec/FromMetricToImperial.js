describe ("My Converter : metric to imperial", function() {
    it("should convert metric weight to imperial", function() {
        expect (Converter.convertFromImperialToMetric(2.2)).toBe(1);

    })
    it("should be able to deal with strings", function() {

        expect (function() {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("Not a number"));
    })
})
