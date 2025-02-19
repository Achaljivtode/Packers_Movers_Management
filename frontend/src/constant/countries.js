

export const info ={
    Countries : ['India','Australia','United States of America (USA)'],
    State : {
        India: ['Maharastra','Rajasthan','Uttarakhad','Goa'],
        Australia: ['New South Wales','Victoria','Queensland'],
        USA : ['Florida','Georgia','Lowa','Alaska'],
    },
    City : {

        Maharastra: ['Mumbai','Pune','Nagpur'],
        Rajasthan: ['Jaipur','Jodhpur','Udaipur'],
        Uttarakhad: ['Dehradun','Haridwar','Rishik' ],
        Goa: ['Panaji','Margoa','Ponda'],
        NewSouthWales: ['Sydney','Newcastle','Wollongong'],
        Victoria: ['Melbourne','Geelong','Ballarat'],
        Queensland: ['Brisbane','Gold Coast','Cairns'],
        Florida: ['Miami','Tampa','Orlando'],
        Georgia: ['Atlanta','Augusta','Savannah'],
        Lowa: ['Des Moines','Cedar Rapids','Davenport'],
        Alaska: ['Anchorage','Fairbanks','Juneau'],
    }
}



// {
//     state === 'Maharastra' ? info.City.Maharastra.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Rajasthan' ? info.City.Rajasthan.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Uttarakhad' ? info.City.Uttarakhad.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Goa' ? info.City.Goa.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'New South Wales' ? info.City.NewSouthWales.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Victoria' ? info.City.Victoria.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Queensland' ? info.City.Queensland.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Florida' ? info.City.Florida.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Georgia' ? info.City.Georgia.map(state => (<option key={state} value={state}>{state}</option>))
//     : state === 'Lowa' ? info.City.Lowa.map(state => (<option key={state} value={state}>{state}</option>))
//     : info.City.Alaska.map(state => (<option key={state} value={state}>{state}</option>))
// }