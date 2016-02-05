//----------------------------------------------------------------------------------------------------------------------
/// StateService
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

class StateService {
    constructor()
    {
        this.state = {
            user: null
        };
    } // end constructor

    get user(){ return this.state.user; }
    set user(val){ this.state.user = val; }
} // end StateService

//----------------------------------------------------------------------------------------------------------------------

export default new StateService();

//----------------------------------------------------------------------------------------------------------------------