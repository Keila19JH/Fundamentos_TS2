export const areaTriangulo = (base: number, altura: number): number => {
    let resulTri = (base * altura) / 2;
    return resulTri;
}

export const areaRectangulo = (base: number, altura: number): number => {
    let resulRec = base * altura;
    return resulRec;
}

export const areaCuadrado = (lado: number): number => {
    let resulCu = lado * lado;
    return resulCu;
}

export const areaCirculo = (radio: number): number => {
    //const pi: number = 3.1416;
    const base: number = 2;
    let resulCi = Math.PI * Math.pow(radio , base);
    return resulCi;
}