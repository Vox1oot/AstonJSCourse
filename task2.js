
const deepCopyObject = (obj) => {
    const copyObject = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (!(value instanceof Object)) {
            copyObject[key] = value;
        } else if (Array.isArray(value)) {
            const arr = [];

            value.forEach((item, index) => {
                arr[index] = deepCopyObject(item);
            });
            copyObject[key] = arr;
            return copyObject;
        } else {
            return copyObject[key] = { ...deepCopyObject(value) };
        }
    });
    return copyObject;
};

const getInterval = (arr, from, to) => {
    const isIntegers = arr.every((num) => typeof num === 'number');

    if (!isIntegers) {
        throw new Error(`В функцию getInterval были переданы невалидные параметры. Параметр arr
        должен содержать только числовые значения.`);
    }

    if (!typeof from === 'number') {
        throw new Error(`В функцию getInterval были переданы невалидные параметры. Параметр from
        должен быть числом.`);
    }

    if (!typeof to === 'number') {
        throw new Error(`В функцию getInterval были переданы невалидные параметры. Параметр to
        должен быть числом.`);
    }
    return from < to ? arr.slice(from, (to + 1)) :  arr.slice(to, from);
};

function createLiker() {
    const liker = {
        rating: 0,

        like() {
            this.rating += 1;
            return this;
        },

        dislike() {
            this.rating -= 1;
            return this;
        },

        val() {
            return this.rating;
        }
    };
    return liker;
};

const getUniqArray = (arr) => {
    const isIntegers = arr.every((num) => typeof num === 'number');

    if (!isIntegers) {
        throw new Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
    }

    return Array.from(new Set(arr));
};

