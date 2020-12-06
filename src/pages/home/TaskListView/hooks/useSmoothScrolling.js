import { useEffect } from "react";

/**
 * @TODO: Do I still need description?
 * @param {Object} refs references to the tasks
 * @param {String} id of the task we are scrolling to
 * @param {String} description of the task, we want to do smooth scrolling when description changes. I can't remember why this is happening. Will have to experiment with it.
 */
const useSmoothScrolling = (refs, id, description) => {
    useEffect(() => {
        const scroll = () => refs[id]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        window.addEventListener('load', scroll);
        return () => {
            window.removeEventListener('load', scroll);
        };
    }, [refs, id, description]);
};

export default useSmoothScrolling;