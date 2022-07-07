import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'

import App, {calcularNovoSaldo} from './app'

describe('Componente principal', () => {
    describe('Ao abrir aplicativo...', () => {
        it ('mostrar o nome do banco', () => {
            render (<App />);
    
            expect(screen.getByText('ByteBank').toBeInTheDocument);
        })
        it ('mostrar saldo', () => {
            render (<App />);
    
            expect(screen.getByText('Saldo:').toBeInTheDocument);
        })
        it ('mostrar botão de realizar operação', () => {
            render (<App />);
    
            expect(screen.getByText('Realizar operação').toBeInTheDocument);
        })
    })    
    describe('Ao realizar transação...', () => {
        it ('caso saque, valor do saldo deve diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150);

            expect(novoSaldo).toBe(100);

        });
        it('caso saque, a transação deve ser realizada', () => {
            render (<App />);
            
            const saldo = screen.getByText('R$ 1000');
            const transacao = screen.getByLabelText('Saque');
            const valor = screen.getByTestId ('valor');
            const botaoTransacao = screen.getByText ('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000');

            fireEvent.click(transacao, {target: {value: 'saque'}});
            fireEvent.change(valor, {target: {value: 10}});
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');

        })
    })
})
