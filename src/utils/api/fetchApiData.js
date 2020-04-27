
const fetchApiData = (url, { body, ...settings }) => {
    const headers = { 'Content-Type': 'application/json' };
    const config = {
        method: body ? 'POST' : 'GET',
        ...settings,
        headers: {
            ...headers,
            ...settings.headers,
        }
    };

    if (body) config.body = JSON.stringify(body);

    return (async () => {
        const response = await fetch(`/api/${url}`, config);
        const data = await response.json();
        if (response.ok) return data
        return Promise.reject(data);
    })();
}

export default fetchApiData;