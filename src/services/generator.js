export function generateId() {
    const stringAndNumber = '0123456789abcdefghijklmnoprstuwxyz';
    let tab = [];
    for (let i = 0; i < 16; i++) {
        let strNumIndex = Math.floor(Math.random() * stringAndNumber.length);
        let strNum = stringAndNumber.charAt(strNumIndex);
        tab.push(strNum);
    }

    tab[5] = '_';
    let ciagStrNum = tab.join("");
    return ciagStrNum;
}