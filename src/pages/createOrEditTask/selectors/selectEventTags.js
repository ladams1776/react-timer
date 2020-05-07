const selectEventTags = allTags => event => {
    const findTags = tag => tag.value;

    return allTags.filter(tag => event.tags.map(findTags).includes(tag._id));
};


export default selectEventTags;