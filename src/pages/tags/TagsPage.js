import React, { useEffect, useState } from 'react';
import AddTagPage from './AddTagPage';


const TagsPage = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch('/api/tags');
                const tags = await result.json();
                // const isOk = tags.status !== 500;
                setTags(tags);
            } catch (err) {
                setTags([]);
            }
        })();
    }, []);

    return (
        <div>
            <ul className="testing">
                <li className="testingLi">
                {tags.map(tag => {
                    return <div key={tag.name}>{tag.name}</div>
                })}
                </li>
            </ul>
            <AddTagPage />
        </div>
    )
};

export default TagsPage;