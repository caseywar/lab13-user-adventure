function scoreJp(jp) {
    if (jp < -4) {
        return 'dead';
    }
    if (hp > -3 && hp < 9) {
        return 'average';
    }
    return 'great';
}
export default scoreJp;