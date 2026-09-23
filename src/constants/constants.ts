

export const upcomingDeliveriesTableHeader = ['Customer', 'Order', 'Delivery', 'Status']


export enum SideBarLocators {
    OVERVIEW = 'app-nav-link-dashboard-OVERVIEW',
    CROPPLANNING = 'app-nav-link-planning-OVERVIEW',
    GROWINGBATCHES = 'app-nav-link-batches-FARM OPERATIONS',
    HASRVESTS = 'app-nav-link-harvests-FARM OPERATIONS'
}



export const sideBarItem = {
    overview: {
        locator: 'app-nav-link-dashboard-OVERVIEW',
        expectedUrl: 'https://kovai-greens.vercel.app/'
    }, 
    cropPlanning: {
        locator: 'app-nav-link-planning-OVERVIEW',
        expectedUrl: 'https://kovai-greens.vercel.app/planning'
    },
    growingBatches: {
        locator: 'app-nav-link-batches-FARM OPERATIONS',
        expectedUrl: 'https://kovai-greens.vercel.app/batches'
    },
    harvests: {
        locator: 'app-nav-link-harvests-FARM OPERATIONS',
        expectedUrl: 'https://kovai-greens.vercel.app/harvests'
    }
}



export const tableStatus = {
    planned: {
        dropdownValue: 'PLANNED',
        tableStatusvalue: 'Planned'
    },
     sown: {
        dropdownValue: 'SOWN',
        tableStatusvalue: 'Sown'
    },
     germinating: {
        dropdownValue: 'GERMINATING',
        tableStatusvalue: 'Germinating'
    },

}