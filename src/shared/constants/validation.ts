export enum ValidationType {
    Login = 'login',
    Password = 'password',
    Email = 'email',
    Phone = 'phone',
    Name = 'name',
}
// TODO добавить переводы для валидации
export const ValidationPattern = {
    login: {
        value: /^(?=.*[\D])[\w-]{3,20}$/g,
        message:
            '3-20 символов, допустимые символы: латин. буквы, цифры, дефис, подчеркивание _',
    },
    password: {
        value: /^(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#-$%^_&*]{8,40}$/g,
        message: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    email: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
        message: 'Невалидный email',
    },
    name: {
        value: /^[A-Z|А-Я|Ë][A-ZА-ЯËa-zа-яё-]+$/g,
        message:
            'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
    },
    phone: {
        value: /^[\d|+][\d]{10,15}$/i,
        message: '10-15 цифр, может начинаться с плюса',
    },
};
