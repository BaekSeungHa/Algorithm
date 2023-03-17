function solution(sides) {
    const Max = Math.max(...sides)
    return Max < sides.reduce((a, c) => a + c, 0 ) - Max ? 1 : 2
}   