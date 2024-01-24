export interface MenuDataItem {
    icon: string;
    label: string;
    route: string | null;
    subMenu?: MenuDataItem[];
}

export const menuDataItems : MenuDataItem[] = [
    {
        icon:'home',
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        icon:'campaign',
        label: 'Campañas',
        route: './campañas'
    },
    {
        icon:'campaign',
        label: 'Clientes',
        route: './clientes'
    },
    {
        icon:'campaign',
        label: 'Proveedores',
        route: './provaider'
    },
    {
        icon:'manage_search',
        label: 'Usuarios',
        route: '',
        subMenu: [
            {
                icon: 'group',
                label: 'Grupos',
                route: './usuarios'
            },
            {
                icon: 'assignment_ind',
                label: 'Tipo Documento',
                route: './tipo-documento'
            }
        ]
    },

]