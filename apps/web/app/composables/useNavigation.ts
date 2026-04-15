import {
    LayoutDashboard,
    FileText,
    ScanLine,
    BarChart2,
    Download,
    CheckSquare,
    Users,
    Settings,
} from 'lucide-vue-next'

export const useNavigation = () => {
    const navMain = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            title: 'Comprobantes',
            href: '/evidences',
            icon: FileText,
            badge: '24',
        },
        {
            title: 'Escanear',
            href: '/evidences/scan',
            icon: ScanLine,
        },
    ]

    const navManagement = [
        {
            title: 'Reportes',
            href: '/reports',
            icon: BarChart2,
        },
        {
            title: 'Exportar',
            href: '/export',
            icon: Download,
        },
        {
            title: 'Conciliación',
            href: '/reconciliation',
            icon: CheckSquare,
            badge: '3',
            badgeVariant: 'warning' as const,
        },
    ]

    const navAccount = [
        {
            title: 'Usuarios',
            href: '/users',
            icon: Users,
        },
        {
            title: 'Configuración',
            href: '/settings',
            icon: Settings,
        },
    ]

    return { navMain, navManagement, navAccount }
}