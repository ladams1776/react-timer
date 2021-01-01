const selectNormalizer = data => {
    return (data instanceof Array)
        ? data?.map(d => (
            {
                value: d?._id || d.value,
                label: d?.name || d.label
            }
        ))
        : [];
}

export default selectNormalizer;