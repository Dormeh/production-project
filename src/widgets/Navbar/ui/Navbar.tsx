import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { AuthForm } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isUserAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);
    const logout = () => {
        dispatch(userActions.logout());
    };

    return (
        <div
            className={classNames(cls.Navbar, {}, [className])}
        >
            <Button
                className={cls.links}
                onClick={isUserAuth ? logout : openModal}
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >
                {isUserAuth ? t('Выйти') : t('Войти') }
            </Button>
            {!isUserAuth && (
                <Modal isOpen={isModalOpen} onClose={closeModal} lazy>
                    <AuthForm
                        focus={isModalOpen}
                        formClose={closeModal}
                    />
                </Modal>
            )}

        </div>
    );
};
