export enum ApiErrorTypes {
    DATA_EMPTY_ERROR = 'Ошибка получения данных',
    UNKNOWN_SERVER_ERROR = 'Неизвестная ошибка сервера',
    AUTH_ERROR = 'Ошибка авторизации',
    PROFILE_GET_ERROR = 'Ошибка получения профиля',
    PROFILE_UPDATE_ERROR = 'Ошибка обновления профиля',
    ARTICLE_GET_ERROR = 'Ошибка получения статьи',
    COMMENT_GET_ERROR = 'Ошибка получения комментариев',
}

export interface ApiError {
    message: string;
}

export type ApiErrorType = ApiError | ApiErrorTypes;
