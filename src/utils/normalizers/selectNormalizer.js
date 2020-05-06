const selectNormalizer = data => {
    return data?.map(d => (
        {
            value: d._id,
            label: d.name
        }
    ));
}

export default selectNormalizer;