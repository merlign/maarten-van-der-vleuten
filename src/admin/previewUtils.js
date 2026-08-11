// Converts a Decap entry (Immutable Map) into a plain JS object, and resolves
// any image fields to a usable preview URL (getAsset handles both already
// committed paths and freshly-uploaded-but-unsaved files).
export const getEntryData = (entry) => {
    const data = entry.getIn(['data']);
    return data && data.toJS ? data.toJS() : {};
};

export const resolveImage = (getAsset, path) => {
    if (!path) return path;
    const asset = getAsset(path);
    return asset ? asset.toString() : path;
};
