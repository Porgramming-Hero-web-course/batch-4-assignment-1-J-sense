"use strict";
{
    const removeDuplicates = (arr) => {
        const removedarrey = [];
        arr.forEach(element => {
            if (!removedarrey.includes(element)) {
                removedarrey.push(element);
            }
        });
        return removedarrey;
    };
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);
}
