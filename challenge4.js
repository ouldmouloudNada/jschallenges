function checkSeason(month) {
    if (['December', 'January', 'February'].includes(month)) {
        return 'Winter';
    } else if (['March', 'April', 'May'].includes(month)) {
        return 'Spring';
    } else if (['June', 'July', 'August'].includes(month)) {
        return 'Summer';
    } else if (['September', 'October', 'November'].includes(month)) {
        return 'Autumn';
    } else {
        return 'Invalid month';
    }
}

console.log(checkSeason('March'));  // Example usage
