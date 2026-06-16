const { requestLogger } = require('./logger');

describe('requestLogger', () => {

    test('debe llamar a next()', () => {

        const req: any = {
            method: 'GET',
            path: '/health'
        };

        const res: any = {
            statusCode: 200,
            on: jest.fn()
        };

        const next = jest.fn();

        requestLogger(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    test('debe registrar método y ruta correctamente', () => {

        const consoleSpy = jest
            .spyOn(console, 'log')
            .mockImplementation(() => {});

        let finishCallback: (() => void) | undefined;

        const req: any = {
            method: 'GET',
            path: '/health'
        };

        const res: any = {
            statusCode: 200,
            on: jest.fn((event: string, callback: () => void) => {
                if (event === 'finish') {
                    finishCallback = callback;
                }
            })
        };

        const next = jest.fn();

        requestLogger(req, res, next);

        expect(finishCallback).toBeDefined();

        finishCallback?.();

        expect(consoleSpy).toHaveBeenCalled();

        const mensaje = String(consoleSpy.mock.calls[0]?.[0]);

        expect(mensaje).toContain('GET');
        expect(mensaje).toContain('/health');

        consoleSpy.mockRestore();
    });

});