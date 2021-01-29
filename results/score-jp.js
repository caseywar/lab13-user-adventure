function scoreJp(jp) {
    if (jp < -4) {
        return 'dead';
    }
    if (jp > -3 && jp < 9) {
        return 'average';
    }
    return 'great';
}
export default scoreJp;