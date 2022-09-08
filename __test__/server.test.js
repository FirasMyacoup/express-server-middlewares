'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API ', () => {

    it('Server Works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello')
    })

    it('Home Page Works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello')
    })
    

    it('number works', async () => {
        const res = await request.get('/square').query('num=5');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"num":25}')
    })


    it('number error', async () => {
        const res = await request.get('/square').query('num=firas');
        expect(res.status).toEqual(500);
        expect(res.text).toEqual('{"code":500,"message":"Server Error: firas is not a number"}')
    })
    
})