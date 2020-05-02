const selectEventTags = allTags => event => {
    return allTags.filter(tag => event?.tags?.includes(tag._id));
};

export default selectEventTags;