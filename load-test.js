import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
      { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
      { duration: '5m', target: 0 }, // ramp-down to 0 users
    ]
  };

export default function () {

  const headers = {
    'Content-Type':'application/json',
    'token':'Y1TK4JKANU',
    };

  const res = http.get('http://150.95.88.249/BikeStores/api/product-all-queue', { headers });
  
  sleep(1)
  console.log(res.json());
}

