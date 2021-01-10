interface FetchParams {
  body?: any;
  headers: {};
}

type dispatchParam = (data: {}) => void;

const fetchApiData = async (url: string, { body, ...settings }: FetchParams, dispatch: dispatchParam) => {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...settings,
    headers: {
      ...headers,
      ...settings.headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(`/api/${url}`, config);
  const data = await response.json();
  if (data && response.ok) dispatch(data);
};

export default fetchApiData;
