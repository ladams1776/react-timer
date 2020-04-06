
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const INFO = 'INFO';
export const RESET = 'RESET';

const useFlashMessageReducer = (state, action) => {
    const { type, message } = action;

    switch (type) {
        case SUCCESS: {
            return {
                success: true,
                info: false,
                error: false,
                message
            }
        }
        case INFO: {
            return {
                success: false,
                info: true,
                error: false,
                message
            }
        }
        case ERROR: {
            return {
                success: false,
                info: false,
                error: true,
                message
            }
        }
        case RESET: {
            return {
                success: false,
                info: false,
                error: false,
                message: null,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${type}`);
        }
    }
}

export default useFlashMessageReducer;