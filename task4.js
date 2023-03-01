Array.prototype.filterArray = function(cb, thisArg = null) {
    const result = [];

    if (thisArg !== null) {
        cb = cb.bind(thisArg);
    }

    for (let item of this) {
        if (cb(item)) {
            result.push(item);
        }
    }
    return result;
};

function Company(name, salary) {
    const staff = {
        name,
        income: 0,
    }

    this.income = function(value) {
        Company.store.money += value - salary;
        staff.income += value - salary;
    }

    this.spend = function(value) {
        Company.store.money -= value;
        staff.income -= value;
    }

    Company.addStaff(staff);
};

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
};

Company.addStaff = function(staff) {
    Company.store.staffList.push(staff);
    Company.store.countStaff += 1;
};

Company.getLeaders = function() {
    let maxIncome = Company.store.staffList[0]?.income ?? 0;
    const result = [];

    for (const staff of Company.store.staffList) {
        if (staff.income === maxIncome) {
            result.push(staff);
        }

        if (staff.income > maxIncome) {
            if (result.length === 0) {
                result.push(staff)
            } else {
                result[result.length - 1] = staff;
            }
            maxIncome = staff.income;
        }
    }
    return result;
};