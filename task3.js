const deleteElementFromArray = (arr, elem) => {
    const index = arr.findIndex((currentNumber) => currentNumber === elem);
    return index !== -1 ? [...arr.slice(0, index), ...arr.slice(index + 1)] : arr;
};

const addElementsToArray = (arr, index) => {
    if (index) {
        if (index < 0 || !Number.isInteger(index)) {
            throw new Error("the index cannot be a negative number or a fractional number ");
        }
    }

    const result = arr.slice();

    const inner = (...elems) => {
        if (index < arr.length) {
            return [...arr.slice(0, index), ...[...elems], ...arr.slice(index)];
        }
        return [...result, ...[...elems]];
    };
    return inner;
};

const createPerson = (options = {}) => {
    const person = {
        name: 'New User',
        skills: [],
        ...options
    };

    person.addSkill = function(newSkill) {
        isExistSkill = this.skills.find((skill) => skill === newSkill);

        if (!isExistSkill) {
            this.skills.push(newSkill);
        }
        return this;
    };

    person.removeSkill = function(removableSkill) {
        this.skills = [...this.skills.filter((skill) => skill !== removableSkill)];
        return this;
    };

    person.addName = function(name) {
        this.name = name;
        return this;
    };
    return person;
};
