import { AsideContainer } from "./AsideContainer/AsideContainer"

const ASIDE_LINKS = [
    {
        name: 'Открытки',
        link: '/'
    },
    {
        name: 'Пользователи',
        link: '/users'
    }
]

export const ExportAside = () => <AsideContainer links={ASIDE_LINKS} userName={'Аткишкин Владислав Сергеевич'} />