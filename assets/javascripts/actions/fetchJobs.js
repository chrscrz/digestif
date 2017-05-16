import { CALL_API } from 'redux-api-middleware';
import { FETCH_JOBS } from 'actions/types';

export default function(params) {
  return {
    [CALL_API]: {
      endpoint: "/api/jobs",
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
      types: [
        {
            type: FETCH_JOBS.REQUEST
        },
        {
            type: FETCH_JOBS.SUCCESS
        },
        {
            type: FETCH_JOBS.FAILURE
        }
      ],
    }
  };
}

