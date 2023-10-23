export function generateId() {
    let part1 = randomStrNum(5);
    let part2 = randomStrNum(10);
    return `${part1}_${part2}`;
}

function randomStrNum(length) {
    const stringAndNumber = '0123456789abcdefghijklmnoprstuwxyz';
    let part = "";
    for (let i = 1; i <= length; i++) {
        let strNumIndex = Math.floor(Math.random() * stringAndNumber.length);
        let strNum = stringAndNumber.charAt(strNumIndex);
        part += strNum;
    }
    return part;
}