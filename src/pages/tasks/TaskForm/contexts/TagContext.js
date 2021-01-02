import React, { useState, createContext, useCallback } from 'react';

export const TagContext = createContext();
export const TagActionContext = createContext();

const TagContextProvider = ({ children }) => {
    const [tags, setTs] = useState([]);
    const setTags = useCallback(tags => setTs(tags), [setTs]);

    return <TagContext.Provider value={tags}>
        <TagActionContext.Provider value={setTags}>
            {children}
        </TagActionContext.Provider>
    </TagContext.Provider>
}

export default TagContextProvider;