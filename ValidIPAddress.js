function isValidIPv4(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    
    for (let part of parts) {
        if (isNaN(part) || part < 0 || part > 255 || part !== String(Number(part))) {
            return false;
        }
    }
    return true;
}

console.log(isValidIPv4("192.168.1.1"));  // true
console.log(isValidIPv4("256.168.1.1"));  // false
