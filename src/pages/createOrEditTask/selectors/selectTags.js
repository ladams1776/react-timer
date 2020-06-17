const selectTags = allTags => (selectedTags = []) => {
    const findTags = tag => tag?.value || tag._id;

    return allTags.filter(tag => selectedTags.map(findTags).includes(tag._id));
};


export default selectTags;