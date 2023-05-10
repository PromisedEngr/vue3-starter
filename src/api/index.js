import apiCall from './apiCall'
export default {
    apiTest(data, cb, error){apiCall('/api/v1/user/apiTest', 'POST', data, cb, error)},
    // sport
    getSportsList(data, cb, error){apiCall('/api/v1/sport/getSportsList', 'POST', data, cb, error)},
    getSportBettingList(data, cb, error){apiCall('/api/v1/sport/getSportBettingList', 'POST', data, cb, error)},
    getLiveMatches(data, cb, error){apiCall('/api/v1/sport/getLiveMatches', 'POST', data, cb, error)},
    getResultData(data, cb, error){apiCall('/api/v1/sport/getResultData', 'POST', data, cb, error)},
    // getSportBettingList(data, cb, error){
    //     console.log(data)
    // },







    getAccountData(data, cb, error){apiCall('/api/v1/account/getAccountData', 'POST', data, cb, error)},
    getProfile(data, cb, error){apiCall('/api/v1/account/getProfile', 'POST', data, cb, error)},
    updateProfile(data, cb, error){apiCall('/api/v1/account/updateProfile', 'POST', data, cb, error)},

    
    createTownHall(data, cb, error){apiCall('/api/v1/townhall/createTownHall', 'POST', data, cb, error)},
    getTownhallList(data, cb, error){apiCall('/api/v1/townhall/getTownhallList', 'POST', data, cb, error)},
    updateTownHall(data, cb, error){apiCall('/api/v1/townhall/updateTownHall', 'POST', data, cb, error)},
    getTownhallData(data, cb, error){apiCall('/api/v1/townhall/getTownhallData', 'POST', data, cb, error)},
    joinTownhall(data, cb, error){apiCall('/api/v1/townhall/joinTownhall', 'POST', data, cb, error)},

    
    // mytownhall
    getMyTownhall(data, cb, error){apiCall('/api/v1/townhall/getMyTownhall', 'POST', data, cb, error)},

    // announcement
    createBroadcast(data, cb, error){apiCall('/api/v1/announce/createBroadcast', 'POST', data, cb, error)},
    getAnnouncementList(data, cb, error){apiCall('/api/v1/announce/getAnnouncementList', 'POST', data, cb, error)},
    getAnnounceDate(data, cb, error){apiCall('/api/v1/announce/getAnnounceDate', 'POST', data, cb, error)},
    deleteAnnouncement(data, cb, error){apiCall('/api/v1/announce/deleteAnnouncement', 'POST', data, cb, error)},
    
    // proposal
    createProposal(data, cb, error){apiCall('/api/v1/proposal/createProposal', 'POST', data, cb, error)},
    getProposalList(data, cb, error){apiCall('/api/v1/proposal/getProposalList', 'POST', data, cb, error)},
    getProposalData(data, cb, error){apiCall('/api/v1/proposal/getProposalData', 'POST', data, cb, error)},
    deleteProposal(data, cb, error){apiCall('/api/v1/proposal/deleteProposal', 'POST', data, cb, error)},
    sendVote(data, cb, error){apiCall('/api/v1/proposal/sendVote', 'POST', data, cb, error)},
    saveResultCID(data, cb, error){apiCall('/api/v1/proposal/saveResultCID', 'POST', data, cb, error)},
    
}