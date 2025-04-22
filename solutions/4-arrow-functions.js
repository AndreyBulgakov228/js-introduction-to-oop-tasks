// BEGIN
export default function each(collection, colback) {
    for (let i = 0; i < collection.length; i++) {
        colback.call(collection[i]);
    }
}
// END
