interface FetchParams {
  body?: any;
  headers?: {};
  method: string;
}

type dispatchParam = (data: {}) => void;

const fetchApiDataWithFlashMessageAndReduxActions = async (url: string, { method, body, ...settings }: FetchParams, dispatch: dispatchParam) => {
  const headers = { 'Content-Type': 'application/json' };
  console.log('fetchApiDataWithF;lash', body)
  const config = {
    method: method ? method : body ? 'POST' : 'GET',
    ...settings,
    headers: {
      ...headers,
      ...settings.headers,
    },
    body: body ? JSON.stringify(body) : null,
  };
  
  console.log('fetchAPiDataWithF;lash', config);
  
  const response = await fetch(`/api/${url}`, config);
  const data = await response.json();
  if (data && response.ok) dispatch({ data: data, type: data.type });
};

export default fetchApiDataWithFlashMessageAndReduxActions;
