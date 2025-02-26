const dashboard = {
    'user': {
        'Find Packers And Movers' : { link: '/find-agent' },
        'Register Quatation' : { link: '/quatation-register' },
        'Submit Feedback' : { link: '/feedback' },
        'My Account' : { link: '/update' },
        'Logout' : { link: '/' }
    },
    'agent': {
        'View Quatation': { link: '/quatation-report'},
        'My Account': { link: '/update'},
        'Logout': { link: '/'}
    },
    'admin': {
        'Quatation Management': { 'link': '/quatation-report' },
        'Service Management': { 'link': '/service-management' },
        'Feedback Management': { 'link': '/feedback-details' },
        'Customers Management': { 'link': '/all-customers' },
        'Agent Management': { 'link': '/all-agents' },
    }
}


export default dashboard