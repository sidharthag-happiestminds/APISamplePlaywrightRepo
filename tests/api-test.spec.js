//Add import 

import {test,expect} from '@playwright/test'; 

//Create a test using request context 
test('API Get Request', async({request}) => { 

    const response = await request.get('https://reqres.in/api/users/2'); 

    expect(response.status()).toBe(200); 

    const text = await response.text(); 

    expect(text).toContain('Janet'); 

    console.log(await response.json()); 

}) 

test('API Post Request', async ({ request }) => { 

    const response = await request.post('https://reqres.in/api/users', { 
        data: { 
            "name": "Sidhartha", 
            "job": "SDET" 
        } 
    }); 

    expect(response.status()).toBe(201); 

    const text = await response.text(); 

    expect(text).toContain('Sidhartha'); 

    console.log(await response.json()); 

})