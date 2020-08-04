import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';

function Foo() {
    const { t } = useTranslation();
    return (
        <div>
            Энэ бол Roboto фонт
            {t('Home.1')}
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Foo
