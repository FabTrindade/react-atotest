import React from 'react';
import {render, screen} from '@testing-library/react'

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

        })
    })
})