export function getMediaTypeString(type) {
    switch (type) {
        case 0: return "Ethernet";
        default: return "";
    }
}

export function getMediaSubTypeString(subtype) {
    switch (subtype) {
        case 1: return "Wireless 802.11b";
        case 2: return "Wireless 802.11a";
        case 3: return "Wireless 802.11";
        default: return "";
    }
}

export function getMediaString(type, subtype) {
    if (subtype !== 0) {
        return getMediaSubTypeString(subtype);
    } else {
        return getMediaTypeString(type);
    }
}
