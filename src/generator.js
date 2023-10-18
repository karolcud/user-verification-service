export function generateId() {
    let liczby = [];
    for (let i = 0; i < 10; i++) {
        let pojedynczaLosowaLiczba = Math.floor(Math.random() * 9 + 1)
        liczby.push(pojedynczaLosowaLiczba)
    };

    let ciagLiczb = liczby.join("");

    return ciagLiczb;
}