class testObject {
    constructor(input) {
        this.input = input;
        this.statement = function () {
            console.log("Hi, this is " + input);
        };
    }
}
export default testObject;