import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
describe( 'Task Reducers', function () {

  let state;
  beforeEach(function() {
    state = reducers({"user": "Solomon"},{});
  });

  test('reducer should initiate properly', () => {
    let expected = {
      "tasks": {
        "allIds": [],
        "byId": {},
        "fetchStatus": {"error": false, "fetching": false},
        "saveStatus": {"eligible": false, "error": false, "saving": false}
      },
      "user": "Solomon"
    }
    expect(state).toEqual(expected);
  });

  test('ADD_TASK should add task object to state.tasks', () => {
    state = reducers(state, {
      type: 'ADD_TASK',
      payload: {
        title: 'test 1',
        taskId: 'cjb1rlthu00003i5r5y0cto0d'
      }
    });

    let expectedById = {
      cjb1rlthu00003i5r5y0cto0d: {
        id: 'cjb1rlthu00003i5r5y0cto0d',
        title: 'test 1'
      }
    };

    let expectedAllIds = ['cjb1rlthu00003i5r5y0cto0d'];

    expect(state.tasks.byId).toEqual(expectedById);
    expect(state.tasks.allIds).toEqual(expectedAllIds);
  });
})