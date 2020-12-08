import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test in authReducer', () => {
    test('should return default state', () => {
        const state = authReducer({logged:false}, {});
        expect(state).toEqual({logged:false});
    });
    test('should authenticate and show user name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }
        const state = authReducer({logged:false}, action);
        expect(state).toEqual({
            logged: true,
            name: 'Hernando'
        });
    });
    test('should delete user name and logged false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({logged:true, name: 'Pedro'}, action);
        expect(state).toEqual({logged: false });
    });
})