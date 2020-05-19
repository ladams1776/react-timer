const selectEventTags = allTags => (selectedTags = []) => {
    const findTags = tag => tag.value;

    return allTags.filter(tag => selectedTags.map(findTags).includes(tag._id));
};


export default selectEventTags;