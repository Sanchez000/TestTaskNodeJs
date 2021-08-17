export class UserNotFoundException extends Error {
    constructor(id: string) {
        super(`Пользователь с id -> ${id} не найден`);
    }
}

export default UserNotFoundException;