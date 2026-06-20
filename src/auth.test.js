const { requireApiKey } = require('./auth');

describe('requireApiKey', () => {

    test('header x-api-key ausente', () => {

        const req = {
            headers: {}
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        requireApiKey(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
    });

    test('clave incorrecta', () => {

        const req = {
            headers: {
                'x-api-key': 'clave-mala'
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        requireApiKey(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
    });

    test('clave válida', () => {

        const req = {
            headers: {
                'x-api-key': 'secreto-demo'
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        requireApiKey(req, res, next);

        expect(next).toHaveBeenCalled();
    });

});