function scoreCp(cp) {
    if (cp < -5) {
        return 'shame';
    }
    if (cp > -5 && cp < 14) {
        return 'decent';
    }
    return 'hero';
}
export default scoreCp;